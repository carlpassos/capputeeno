import gql from 'graphql-tag';

export const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: String!, $sales: number!) {
    updateProduct(id: $id, sales: $sales){
      id
      name
    }
  }
`