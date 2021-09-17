import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import { filterDataProp, orderDataProp } from '../../pages'

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string
  category: string;
}

const categoryName = {
   "t-shirts": "Camisetas",
   "mugs": "Canecas"
}
  

async function getProduct(productId: string): Promise<ProductData> {
        const response = await request(
          process.env.API_URL,
          gql`
            query {
              Product(id: "${productId}") {
                id
                name
                description
                image_url
                price_in_cents
                category
              }
            }
          `
        )
        const product = {
          id: response.Product.id,
          name: response.Product.name,
          category: categoryName[response.Product.category],
          imageUrl: response.Product.image_url,
          description: response.Product.description,
          price: response.Product.price_in_cents / 100
        }
    
        return product

      
    } 


export function useProduct(productId: string) {

  return useQuery(['products', productId], () => getProduct(productId),{
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}