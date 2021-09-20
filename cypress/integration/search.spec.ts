/// <reference types="cypress" />

import { aliasQuery } from "../util/graphql-test-utils";

describe('Ecommerce user', () => {
  it('should be able to find products by name', () => {
    cy.visit('')

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlProductFilteredByNameQuery'
    }).as('searchProducts')

    cy.get('[data-cy=searchInput]').type('Camiseta Broken Saints')
    cy.get('[data-cy=searchButton]').click()
    cy.wait('@gqlProductFilteredByNameQuery')
    cy.wait('@gqlProductFilteredByNameQuery')
        .its('response.body.data.allProducts')
        .should((allProducts) => {
          expect(allProducts).to.be.a('array')
        })
  });
})

export {}
