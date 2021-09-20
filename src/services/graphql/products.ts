import gql from 'graphql-tag';

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: ID!) {
    Product(id: $id){
      id
      name
      category
      image_url
      description
      price_in_cents
      sales
    }
  }
`

export const GET_PRODUCTS_BY_NAME = gql`
  query getProductsByName($name: String!) {
    allProducts(filter:{name: $name}){
      id
      name
      image_url
      price_in_cents
      description
      category
    }
  }
`