import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import { filterDataProp } from '../../pages'

type Products = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

type getProductsResponse = {
  products: Products[],
  count: number,
}

async function getProducts(page: number, filter: filterDataProp): Promise<getProductsResponse> {
      const formatedFilter = filter !== "all" ? `, filter:{category: "${filter}"}` : ""
      const response = await request(
        process.env.API_URL,
        gql`
          query {
            allProducts(perPage: 12, page: ${page - 1}${formatedFilter} ) {
              id
              name
              image_url
              price_in_cents
              category
            }
            _allProductsMeta (perPage: 12, page: ${page - 1}${formatedFilter}) {
              count
            }
          }
        `
      )

      const products = await response.allProducts.map(product => {
        return {
          id: product.id,
          name: product.name,
          imageUrl: product.image_url,
          price: product.price_in_cents / 100
        }
      })

      const data = {
          products: products,
          count: response._allProductsMeta.count
      }
  
      return  data
    }


export function useProducts(page: number, filter: filterDataProp) {

  return useQuery(['products', page, filter], () => getProducts(page, filter),{
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}