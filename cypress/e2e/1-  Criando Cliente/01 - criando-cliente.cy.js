/// <reference types="cypress" />

describe('criando um cliente', () => {
  beforeEach(() => {

    cy.visit('https://napoleao-de6dc--validacao-customer-7fe8zq4l.web.app/')
  })

  it('criando um cliente na base, com e-mail já cadastrado', () => {

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

    cy.get('.css-1lomthf > .MuiBox-root > .MuiButton-root')
    .click()

    cy.get('#field-name')
    .click()
    .type(Cypress.env('name'))
    .should('be.visible')

    cy.get('#field-email')
    .click()
    .type(Cypress.env('emailFail'))
    .should('be.visible')

    cy.get('#field-birth_date')
    .click()
    .type(Cypress.env('dob'))
    .should('be.visible')

    cy.get('#field-cpf_cnpj')
    .click()
    .type(Cypress.env('cpf'))
    .should('be.visible')

    cy.get(':nth-child(5) > .MuiGrid-grid-sm-2 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > .MuiIconButton-label > [data-testid="ArrowDropDownIcon"]')
    .click()
    cy.contains('Brazil')
    .click()

    cy.get('#field-phone')
    .click()
    .type(Cypress.env('phone'))
    .should('be.visible')

    cy.get(':nth-child(6) > .MuiGrid-grid-sm-2 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > [data-testid="ArrowDropDownIcon"]')
    .click()
    cy.contains('Estudante')
    .click()

    cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > [data-testid="ArrowDropDownIcon"]')
    .click()
    cy.contains('São Paulo')
    .click()  

    cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > [data-testid="ArrowDropDownIcon"]')
    .click()
    cy.contains('CRM')
    .click()

    cy.get('#demo-mutiple-checkbox')
    .click()
    cy.get('[data-value="eb0912d7-6e17-4cda-a3e9-50a084dddd2d"]')
    .click()

    cy.get('#field-social_media')
    .click()
    .type('anselmo-santos-0114b5172/')
    .should('be.visible')

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    .type(Cypress.env('cep'))
    .should('be.visible')

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    .type(Cypress.env('numberhouse'))
    .should('be.visible')
    
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > [data-testid="ArrowDropDownIcon"]')
    .click()
    cy.contains('São Paulo')
    .click()

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > .MuiGrid-grid-sm-6 > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    .type(Cypress.env('address'))
    .should('be.visible')

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(6) > .MuiFormControl-root > .MuiOutlinedInput-root')
    .click()
    .type(Cypress.env('district'))
    .should('be.visible')

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(7) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiAutocomplete-endAdornment > .MuiAutocomplete-popupIndicator > .MuiIconButton-label > [data-testid="ArrowDropDownIcon"]')
    .click()
    cy.contains('Campo Limpo Paulista')
    .click()

    cy.get('.MuiDropzoneArea-textContainer')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/Design_sem_nome_1.png', {action: 'drag-drop' })
        .should(function($imput) {

        })

        cy.wait(5000)

    cy.get('.css-jaenh2 > .MuiBox-root > .MuiButton-root')
    .click()

    cy.contains('div', 'O email teste@penseapp.com.br já está cadastrado, tente outro.')
    .should('be.visible')

  })

})
