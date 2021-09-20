/// <reference types="cypress" />

import { aliasQuery } from "../util/graphql-test-utils";

describe('Ecommerce user', () => {
  it('should be able to add products to cart', () => {

    cy.visit('')
    cy.get('[data-cy=productImage0]').click()
    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('.logoContainer > svg').click()
    cy.get('[data-cy=productImage1]').click()
    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('[data-cy=shoppingBagCount]').contains(2)
  });

  it('should be able to delete product', () => {
    cy.visit('')
    cy.get('[data-cy=productImage0]').click()
    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('.logoContainer > svg').click()
    cy.get('[data-cy=productImage1]').click()
    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('[data-cy=shoppingBag]').click()
    cy.get('[data-cy=shoppingBagCount]').contains(2)
    cy.get('[data-cy=cartItemTrash0]').click()
    cy.get('[data-cy=shoppingBagCount]').contains(1)
  })

  it('should be able to change product amounth', () => {
    cy.visit('')
    cy.get('[data-cy=productImage0]').click()
    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('[data-cy=shoppingBag]').click()
    cy.get('[data-cy=shoppingBagCount]').contains(1)
    cy.get('[data-cy=cartItemSelect0]').select("2")
    cy.get('[data-cy=shoppingBagCount]').contains(2)
    
  })

  it('should be able to make a purchase', () => {
    cy.visit('')
    cy.get('[data-cy=productImage0]').click()
    cy.get('.product__AddToCartButton-sc-q838ga-5').click()
    cy.get('[data-cy=shoppingBag]').click()
    cy.get('[data-cy=shoppingBagCount]').contains(1)
    cy.get('[data-cy=cartItemSelect0]').select("2")
    cy.get('[data-cy=shoppingBagCount]').contains(2)

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlmakePurchaseQuery'
    }).as('postProducts')

    cy.get('[data-cy=buyButton]').click()

    cy.wait('@gqlmakePurchaseQuery')
      .its('response.body.data.allProducts')
      .should((allProducts) => {
        expect(allProducts).to.exist
      })
  })

  
})

export {}
