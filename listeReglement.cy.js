describe('Gestion finaciére', () => {
  it('Règlements à payer', () => {
    //saisir l'url de l'application
    cy.visit('https://dpp-preprod.eyone.net/')

    //saisir l'identifiant
    cy.get('.mb-3 > #email').type('respfacturation@preprod.sn')

    //saisir le mot de passe
    cy.get('.mt-3 > .form-horizontal > :nth-child(2) > #password').type('passe')

    //cliquer sur se connecter
    cy.get('.w-50').click()

    //cliquer sur le menu gestion finaciére
    cy.get(':nth-child(7) > :nth-child(1) > .bx').click()

    //sous menu réglement à payer
    cy.get('.mm-show > :nth-child(5) > .side-nav-link-ref').click()

    //cliquer sur le bouton de switch
    cy.get('.switch')

    //selectionner une periode
    cy.get(':nth-child(1) > .col-md-8 > #periodType > .ng-select-container > .ng-arrow-wrapper').click()

    //Encaisser un réglement
    //cliquer sur les trois points d'actions d'un réglement à payer
    cy.get(':nth-child(2) > :nth-child(1) > .p-0 > .dropdown > .dropdown-toggle').click()
    cy.get('[style="position: absolute; z-index: 1050; top: 0px; left: 0px; will-change: transform; transform: translate(778px, 454px);"] > .dropdown-menu > .dropdown-item').click()
    cy.get('.swal2-confirm').click()
   
  })

})
