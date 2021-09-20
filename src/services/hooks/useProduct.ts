import { useQuery } from 'react-query'
import {request, gql} from 'graphql-request'
import api from '../api'
import { print } from 'graphql'
import { GET_PRODUCT_BY_ID } from '../graphql/products'

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
       
  if (productId !== "undefined") {

  const response = await api.post('', {
    query: print(GET_PRODUCT_BY_ID),
    variables: {
      id: productId
    }
  }).then(response => {
    console.log(response.data.data.Product)
    return response.data.data
  })
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

  throw "product loading or undefined"

  
} 


export function useProduct(productId: string) {

  return useQuery(['products', productId], () => getProduct(productId),{
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}