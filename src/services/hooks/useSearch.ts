import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import { filterDataProp, orderDataProp } from '../../pages'
import api from '../api'
import { print } from 'graphql'
import { GET_PRODUCTS_BY_NAME } from '../graphql/products'

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

      const response = await api.post('', {
        query: print(GET_PRODUCTS_BY_NAME),
        variables: {
          name: filter
        }
      }).then(response => {
        return response.data.data
      })

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