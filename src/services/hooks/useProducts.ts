import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'

type Products = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

type getProductsResponse = {
  products: Products[],
  count: number,
}

async function getProducts(page: number): Promise<getProductsResponse> {
      const response = await request(
        process.env.API_URL,
        gql`
          query {
            allProducts(perPage: 12, page: ${page - 1}) {
              id
              name
              image_url
              price_in_cents
            }
            _allProductsMeta (perPage: 12, page: ${page - 1}) {
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


export function useProducts(page: number) {

  return useQuery(['products', page], () => getProducts(page),{
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}