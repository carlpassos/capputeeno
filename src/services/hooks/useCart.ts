import { useQuery } from 'react-query'
// import {request, gql} from 'graphql-request'
import {  CartInfoProps } from '../../context/cartContext'
import api from '../api'
import { print } from 'graphql'
import { GET_FILTERED_PRODUCTS_BY_IDS } from '../graphql/cart'

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
    return product.id
  })

  console.log(print(GET_FILTERED_PRODUCTS_BY_IDS))

  const response = await api.post('', {
    query: print(GET_FILTERED_PRODUCTS_BY_IDS),
    variables: {
      ids: productsIdArray
    }
  }).then( response => {
    console.log('entrou aqui')
    const { allProducts } = response.data.data

    console.log(response.data)

    const productList = allProducts.map(product => {
      
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
  })

  return response;
  
  // const response = await request(
  //     process.env.API_URL,
  //     gql`
  //     query {
  //       allProducts(filter:{ids: [${productsIdArray}]}) {
  //         id
  //         name
  //         image_url
  //         description
  //         price_in_cents
  //       }
  //     }
  //     `
}


export function useCart(cartInfo: CartInfoProps) {
  return useQuery(['cartList'], () => getProducts(cartInfo))
}