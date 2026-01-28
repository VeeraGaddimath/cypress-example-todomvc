/// <reference types="cypress" />

describe('Google Search to Amazon Washing Machine', () => {
  it('should launch Google, search Amazon, and find washing machines', () => {
    // Step 1: Launch Google.com
    cy.visit('https://www.google.com')
    
    // Verify Google homepage loaded
    cy.title().should('include', 'Google')
    cy.get('input[name="q"]').should('be.visible')

    // Step 2: Search for Amazon.com
    cy.get('input[name="q"]').type('amazon.com')
    cy.get('input[name="q"]').should('have.value', 'amazon.com')
    
    // Press Enter to search
    cy.get('input[name="q"]').type('{enter}')
    
    // Wait for search results to load
    cy.wait(2000)
    
    // Verify search results are displayed
    cy.get('body').should('contain.text', 'amazon')

    // Step 3: Click on Amazon link from search results
    // Find and click the first Amazon link
    cy.get('a').contains('amazon.com').first().click()
    
    // Wait for Amazon to load
    cy.wait(3000)
    
    // Verify we're on Amazon
    cy.url().should('include', 'amazon')
    
    // Step 4: Search for Washing Machine on Amazon
    cy.get('input[id*="twotabsearchtextbox"]').type('washing machine')
    cy.get('input[id*="twotabsearchtextbox"]').should('have.value', 'washing machine')
    
    // Press Enter to search
    cy.get('input[id*="twotabsearchtextbox"]').type('{enter}')
    
    // Wait for results to load
    cy.wait(3000)
    
    // Verify washing machine search results are displayed
    cy.get('body').should('contain.text', 'washing')
    
    // Log success
    cy.log('✅ Successfully navigated from Google to Amazon and searched for washing machines')
  })

  it('should verify washing machine product listings', () => {
    // Launch Google
    cy.visit('https://www.google.com')
    
    // Search for Amazon
    cy.get('input[name="q"]').type('amazon washing machine')
    cy.get('input[name="q"]').type('{enter}')
    
    // Wait and verify results
    cy.wait(2000)
    cy.get('body').should('contain.text', 'amazon')
    
    // Navigate to Amazon
    cy.get('a').contains('amazon.com').first().click()
    cy.wait(3000)
    
    // Verify Amazon loaded
    cy.url().should('include', 'amazon')
    
    // Search for washing machines directly on Amazon
    cy.get('input[id*="twotabsearchtextbox"]').clear().type('washing machine{enter}')
    
    // Wait for results
    cy.wait(3000)
    
    // Verify products are displayed
    cy.get('[data-component-type="s-search-result"]').should('have.length.greaterThan', 0)
    cy.get('body').should('contain.text', 'Results')
    
    cy.log('✅ Washing machine products displayed on Amazon')
  })
})
