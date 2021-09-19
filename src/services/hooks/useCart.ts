import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import {  CartInfoProps } from '../../context/cartContext'

export type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string
  category: string;
  count: number;
}


  

async function getProducts(cartInfo: CartInfoProps): Promise<ProductData[]> {

  const productsIdArray = cartInfo.products.map(product => {
    return `"${product.id}"`
  })
  
  const response = await request(
      process.env.API_URL,
      gql`
      query {
        allProducts(filter:{ids: [${productsIdArray}]}) {
          id
          name
          image_url
          description
          price_in_cents
        }
      }
      `
    )
    const productList = response.allProducts.map(product => {
      
      const productFilter = cartInfo.products.find(cartProduct => cartProduct.id === product.id)

      const count = productFilter.count

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.image_url,
        description: product.description,
        price: product.price_in_cents / 100,
        count:  count ?? 0
      }
    })

    return productList
  }


export function useCart(cartInfo: CartInfoProps) {
  return useQuery(['cartList'], () => getProducts(cartInfo))
}