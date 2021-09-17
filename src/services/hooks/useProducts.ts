import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'

export function useProducts(page: number) {
  return useQuery('products', async () => {
    const response = await request(
      process.env.API_URL,
      gql`
        query {
          allProducts(perPage: 12, page: ${page}) {
            id
            name
            image_url
            price_in_cents
          }
        }
      `
    )

    return response;
  })
}