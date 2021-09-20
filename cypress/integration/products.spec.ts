/// <reference types="cypress" />

import { aliasQuery } from "../util/graphql-test-utils";

describe('Ecommerce user', () => {
  it('should be able to view products', () => {

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlGetProductsQuery'
    }).as('postProducts')

    cy.visit('http://localhost:3000')
    cy.get('[data-cy=productImage0]')
    

    cy.wait('@gqlGetProductsQuery')
      .its('response.body.data.allProducts')
      .should((allProducts) => {
        expect(allProducts).to.be.a('array')
      })
  });

  it('should be able to filter products by type', () => {
    cy.visit('/')

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlGetTShortsProductsQuery'
    }).as('postProducts')

    cy.get('[data-cy=menuOptiont-shirts]').click()
    

    cy.wait('@gqlGetTShortsProductsQuery')
      .its('response.body.data.allProducts')
      .should((allProducts) => {
        expect(allProducts[0].category).to.be.equal('t-shirts')
        expect(allProducts[1].category).to.be.equal('t-shirts')
      })

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlGetMugsProductsQuery'
    }).as('postMugProducts')

    cy.get('[data-cy=menuOptionmugs]').click()

    cy.wait('@gqlGetMugsProductsQuery')
      .its('response.body.data.allProducts')
      .should((allProducts) => {
        expect(allProducts[0].category).to.be.equal('mugs')
        expect(allProducts[1].category).to.be.equal('mugs')
      })
  })

  it('should be able to order products', () => {
    cy.visit('')

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlGetNewsFilteredQuery'
    }).as('postProducts')

    cy.get('[data-cy="Organizar porMenu"]').click()
    cy.get('[data-cy=NovidadesOrderMenu]').click()

    cy.wait('@gqlGetNewsFilteredQuery')
      .its('response.body.data.allProducts')
      .should((allProducts) => {
        expect(allProducts).to.be.a('array')
      })

      cy.intercept('POST', '/', (req) => {
        aliasQuery(req, 'allProducts')
        req.alias = 'gqlGetPriceAscFilteredQuery'
      }).as('postProducts')
  
      cy.get('[data-cy=NovidadesMenu]').click()
      cy.get('[data-cy="Preço: Maior - menorOrderMenu"]').click()
  
      cy.wait('@gqlGetPriceAscFilteredQuery')
        .its('response.body.data.allProducts')
        .should((allProducts) => {
          expect(allProducts).to.be.a('array')
        })

      cy.intercept('POST', '/', (req) => {
        aliasQuery(req, 'allProducts')
        req.alias = 'gqlGetPriceDescFilteredQuery'
      }).as('postProducts')
  
      cy.get('[data-cy="Preço: Maior - menorMenu"]').click()
      cy.get('[data-cy="Preço: Menor - maiorOrderMenu"]').click()
  
      cy.wait('@gqlGetPriceDescFilteredQuery')
        .its('response.body.data.allProducts')
        .should((allProducts) => {
          expect(allProducts).to.be.a('array')
        })

      cy.intercept('POST', '/', (req) => {
        aliasQuery(req, 'allProducts')
        req.alias = 'gqlGetSalesFilteredQuery'
      }).as('postProducts')
  
      cy.get('[data-cy="Preço: Menor - maiorMenu"]').click()
      cy.get('[data-cy="Mais vendidosOrderMenu"]').click()
  
      cy.wait('@gqlGetSalesFilteredQuery')
        .its('response.body.data.allProducts')
        .should((allProducts) => {
          expect(allProducts).to.be.a('array')
        })
  })

  it('should be able to change the current page', () => {
    cy.visit('')

    cy.intercept('POST', '/', (req) => {
      aliasQuery(req, 'allProducts')
      req.alias = 'gqlGetPageTwoQuery'
    }).as('postProducts')

    cy.get(':nth-child(2) > ul > [data-cy=paginationButton2]').click()

    cy.wait('@gqlGetPageTwoQuery')
        .its('response.body.data.allProducts')
        .should((allProducts) => {
          expect(allProducts).to.be.a('array')
        })
  })
})

export {}
