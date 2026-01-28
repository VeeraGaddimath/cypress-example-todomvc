/// <reference types="cypress" />

describe('Automation End to End Tests', () => {
  beforeEach(() => {
    // Add setup for each test
    cy.visit('https://example.cypress.io')
  })

  it('should load the page successfully', () => {
    cy.title().should('include', 'Cypress Example')
  })

  it('should navigate to commands section', () => {
    cy.get('a[href*="commands"]').first().click()
    cy.url().should('include', '/commands')
  })

  it('should perform basic user interactions', () => {
    // Test typing
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('input[type="email"]').should('have.value', 'test@example.com')

    // Test clicking
    cy.get('button').first().click()
    cy.get('button').should('be.visible')
  })

  it('should validate form submission', () => {
    // Navigate to form
    cy.get('a').contains('Form').click()
    
    // Fill form fields
    cy.get('input[type="text"]').type('Test User')
    cy.get('textarea').type('This is a test automation script')
    
    // Submit form
    cy.get('button[type="submit"]').click()
  })

  it('should handle network requests', () => {
    cy.intercept('GET', '**/api/**', {
      statusCode: 200,
      body: { success: true }
    }).as('apiRequest')

    // Trigger API call
    cy.get('button').click()
    
    // Wait for and verify the request
    cy.wait('@apiRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
    })
  })

  it('should manage local storage', () => {
    // Set local storage
    cy.window().then((win) => {
      win.localStorage.setItem('testKey', 'testValue')
    })

    // Verify local storage
    cy.window().then((win) => {
      expect(win.localStorage.getItem('testKey')).to.equal('testValue')
    })
  })

  it('should handle multiple page navigations', () => {
    // Navigate to different sections
    cy.get('a').first().click()
    cy.url().should('not.equal', 'https://example.cypress.io')

    // Go back
    cy.go('back')
    cy.url().should('equal', 'https://example.cypress.io')

    // Go forward
    cy.go('forward')
  })

  it('should validate element visibility and state', () => {
    // Check visibility
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.length.greaterThan', 0)

    // Check text content
    cy.get('h1').first().should('contain.text', 'Cypress')

    // Check attributes
    cy.get('a').first().should('have.attr', 'href')
  })

  it('should handle keyboard events', () => {
    cy.get('input').first().focus()
    cy.get('input').first().type('{enter}')
    cy.get('input').first().type('{backspace}')
  })

  it('should wait for elements and perform actions', () => {
    // Wait for element to be visible
    cy.get('button', { timeout: 5000 }).should('be.visible')

    // Perform action after wait
    cy.get('button').click({ force: true })

    // Verify action completed
    cy.get('body').should('contain.text', 'Cypress')
  })

  afterEach(() => {
    // Cleanup after each test
    cy.window().then((win) => {
      win.localStorage.clear()
    })
  })
})
