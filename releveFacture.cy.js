describe('relevé de facture', ()=>{

    it('liste des relevés de facture', () => {
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

    //cliquer sur relevé de facture
    cy.get('.mm-show > :nth-child(4) > .is-parent').click()
    //affichage de la page RF
    cy.visit('https://dpp-preprod.eyone.net/gestion-financiere/creer-releve/facturation')
  })

  it('créer un nouveau relevé de facture', () => {
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

    //cliquer sur relevé de facture
    cy.get('.mm-show > :nth-child(4) > .is-parent').click()
    //affichage de la page RF
    cy.visit('https://dpp-preprod.eyone.net/gestion-financiere/creer-releve/facturation')

    //choice a RF
    cy.get('tbody.ng-star-inserted > :nth-child(1) > :nth-child(1) > #defaultCheck1').click()
    //create new RF
    cy.get('.justify-content-md-start > .btn').click()
    
  })

  it('détail relevés de facture', () => {
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

    //cliquer sur relevé de facture
    cy.get('.mm-show > :nth-child(4) > .is-parent').click()

    //affichage de la page RF
    cy.visit('https://dpp-preprod.eyone.net/gestion-financiere/creer-releve/facturation')

    //detail d'un relevé de facture
    cy.get(':nth-child(1) > :nth-child(10) > .btn > .ri-search-eye-line').click()      
        
  })

  it('exportation liste des factures', () => {
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

    //cliquer sur relevé de facture
    cy.get('.mm-show > :nth-child(4) > .is-parent').click()

    //se rediriger vers la page facture
    cy.visit('https://dpp-preprod.eyone.net/gestion-financiere/factures/facturation').click()

    //cliquer le bouton d'export
    cy.get('.d-flex > .ng-star-inserted > :nth-child(2)').click()
    
  })
})