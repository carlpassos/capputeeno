import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import { filterDataProp, orderDataProp } from '../../pages'

export type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
}
  

async function getSearch(page: number, filter: string): Promise<ProductData[]> {
      const formatedFilter = filter !== "all" ? `, filter:{name: "${filter}"}` : ""
      console.log(filter)
      console.log(`
      query {
        allProducts(perPage: 12, page: ${page - 1}${formatedFilter}) {
          id
          name
          image_url
          price_in_cents
          description
          category
        }
        _allProductsMeta (perPage: 12, page: ${page - 1}${formatedFilter}) {
          count
        }
      }
    `)
      const response = await request(
        process.env.API_URL,
        gql`
          query {
            allProducts(perPage: 12, page: ${page - 1}${formatedFilter}) {
              id
              name
              image_url
              price_in_cents
              description
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
          description: product.description,
          price: product.price_in_cents / 100
        }
      })
  
      return  products
    }


export function useSearch(page: number, filter: string) {

  return useQuery(['products', page, filter], () => getSearch(page, filter),{
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}