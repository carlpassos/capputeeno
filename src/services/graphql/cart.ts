import gql from 'graphql-tag';

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $sales: Int!) {
    updateProduct(id: $id, sales: $sales){
      id
      sales
    }
  }
`
export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    Product(id: $id){
      id
      sales
    }
  }
`