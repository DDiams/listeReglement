describe('Afficher la liste des patients', ()=>{
    it('Les patients', ()=>{
        //saisir l'url de l'application
        cy.visit('https://dpp-preprod.eyone.net/')

        //saisir l'identifiant
        cy.get('.mb-3 > #email').type('respfacturation@preprod.sn')

        //saisir le mot de passe
        cy.get('.mt-3 > .form-horizontal > :nth-child(2) > #password').type('passe')

        //cliquer sur se connecter
        cy.get('.w-50').click()

        //menu patient
        cy.get('#side-menu > :nth-child(3) > .is-parent').click()

        cy.get('#side-menu > :nth-child(3) > .sub-menu > :nth-child(2) > .side-nav-link-ref').click()           //les patients
        cy.get(':nth-child(2) > tr > .text-right > .dropdown > .dropdown-toggle').click()                       //trois points d'action
        cy.get('[style="position: absolute; z-index: 1050; top: 0px; left: 0px; will-change: transform; transform: translate(717px, 317px);"] > .dropdown-menu > :nth-child(1)').click() //visualiser

    })
})