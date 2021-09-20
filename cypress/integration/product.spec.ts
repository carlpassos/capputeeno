/// <reference types="cypress" />

import { aliasQuery } from "../util/graphql-test-utils";

describe('Ecommerce user', () => {
  it('should be able to view a single product', () => {
    cy.visit('')

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'product')
      req.alias = 'gqlProductQuery'
    }).as('postProducts')

    cy.get('[alt="Camiseta Broken Saints"]').click()
    cy.get('.product__ProductHeader-sc-q838ga-3 > :nth-child(1)').contains('Camisetas')
    cy.get('h2').contains('Camiseta')
  });

  it('should be able to add to cart', () => {
    cy.visit('/product/f3dbd1bd-d2e4-4410-bc46-a607465d4ca8')

    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('.styles__Cart-sc-136eu6e-3 > span').contains(1)
    
  })
})

export {}
