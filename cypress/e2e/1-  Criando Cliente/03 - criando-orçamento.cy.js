/// <reference types="cypress" />

describe('criando um cliente', () => {
  beforeEach(() => {

    cy.visit('https://napoleao-de6dc--validacao-customer-7fe8zq4l.web.app/')
  })

  it('criando um cliente na base', () => {

    cy.get(':nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input')
    .click()
    .type(Cypress.env('userName'))

    cy.get(':nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input')
    .click()
    .type(Cypress.env('password'), {log: false})

    cy.get('form > .MuiBox-root > .MuiButton-root')
    .click()

    cy.get('[data-testid="MenuIcon"] > svg > path')
    .click()

    cy.get(':nth-child(3) > .MuiList-root > :nth-child(2) > .MuiButton-root')
    .click()

    cy.get('.MuiDrawer-root > .MuiBackdrop-root')
    .click()

    cy.wait(20000)

    cy.get('.css-1lomthf > .MuiBox-root > .MuiButton-root')
    .click()

    cy.wait(43000)

    cy.get('.sc-bczRLJ > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    cy.contains('New Test')
    .click()

    cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-mutiple-checkbox')
    .click()
    cy.contains('CONTACTCENTER: LINKEDIN')
    .click()

    cy.get('.MuiGrid-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    cy.contains('25559 - JULIANA SOUZA (ALLAN)')
    .click()

    cy.get('.css-m9fnbh-MuiGrid-root > .MuiButton-root')
    .click()
    cy.get('.MuiPaper-root > .MuiOutlinedInput-root > .MuiSelect-select')
    .click()
    cy.contains('N CLASS 10 : 10 produtos')
    .click()
    cy.get('.MuiDialog-container > .MuiPaper-root > .MuiBox-root > .MuiButton-root')
    .click()

    cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .PrivateSwitchBase-input')
    .click()

    cy.get('.css-so0qvr > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    .type('04012023')

    cy.get(':nth-child(8) > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-mutiple-checkbox')
    .click()
    cy.get('.MuiList-root > [tabindex="0"]')
    .click()

    cy.get(':nth-child(7) > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    .type('Apenas fazendo um teste de compra com o combo de curso da N-class')

    cy.get('.css-jaenh2 > .MuiBox-root > .MuiButton-root')
    .click()

    // cy.get('input[type=”checkbox”]')
    cy.get('input[type="checkbox"]')
    .check();
    // .should('be.checked')


  })

})
