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

    cy.get(':nth-child(3) > .MuiList-root > :nth-child(1) > .MuiButton-root > .MuiButton-label > .MuiBox-root')
    .click()

    cy.get('.MuiDrawer-root > .MuiBackdrop-root')
    .click()

    cy.wait(20000)

    cy.get('[data-testid="Pesquisa-iconButton"]')
    .click()

    cy.get('.MuiOutlinedInput-input')
    .click()
    .type('New Test')
  
    cy.get('[data-testid="MuiDataTableBodyCell-4-0"] > :nth-child(2) > .MuiBox-root > :nth-child(1)')
    .click()

    cy.get('#field-id_card')
    .click()
    .type(Cypress.env('rg'))

    cy.get('.MuiDropzoneArea-textContainer')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/Design_sem_nome_1.png', {action: 'drag-drop' })
        .should(function($imput) {

        })

    cy.wait(6000)

    cy.get('.css-jaenh2 > .MuiBox-root > .MuiButton-root')
    .click()

    cy.contains('div', 'Operação realizada com sucesso!')
    .should('be.visible')

  })

})
