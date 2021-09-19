import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import { filterDataProp, orderDataProp } from '../../pages'

type Products = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
}

type getSearchResponse = {
  products: Products[],
  count: number,
}

const orderData = {
  1: `sortField: "created_at", sortOrder: "DESC"`,
  2: `sortField: "price_in_cents", sortOrder: "DESC"`,
  3: `sortField: "price_in_cents", sortOrder: "ASC"`,
  4: `sortField: "sales", sortOrder: "DESC"`,
}
  

async function getSearch(page: number, filter: filterDataProp): Promise<getSearchResponse> {
      const formatedFilter = filter !== "all" ? `, filter:{name_neq: "${filter}"}` : ""
      const response = await request(
        process.env.API_URL,
        gql`
          query {
            allProducts(perPage: 12, page: ${page - 1}${formatedFilter}) {
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
  
      return  products
    }


export function useProducts(page: number, filter: filterDataProp, order: orderDataProp) {

  return useQuery(['products', page, filter, order], () => getSearch(page, filter),{
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}