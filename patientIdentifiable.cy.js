describe('Patient Identifiable', ()=>{
    it('Règlements à payer', () => {
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
        cy.get('#side-menu > :nth-child(3) > .sub-menu > :nth-child(1) > .side-nav-link-ref').click()
        
        //creer un patient identifiable
        cy.get(':nth-child(1) > :nth-child(1) > .form-control').type('tadiams')                            //saisir le prenom
        cy.get('form.ng-untouched > :nth-child(1) > :nth-child(2) > .form-control').type('tathiaw')        //saisir le nom
        cy.get(':nth-child(2) > :nth-child(1) > .form-control').type('700000000')
        cy.get(':nth-child(2) > :nth-child(2) > .w-100 > .ng-select-container > .ng-arrow-wrapper').click()
        cy.contains('Féminin').click()
        cy.get('.input-group > .form-control').type('21/12/1998')
        cy.get(':nth-child(5) > .col-md-6 > .form-control').type('dakar')
        cy.get('#email').type('diams@gmail.com')
        cy.get(':nth-child(7) > :nth-child(1) > .w-100 > .ng-select-container > .ng-value-container > .ng-input > input').click()
        cy.get(':nth-child(7) > :nth-child(2) > .w-100 > .ng-select-container > .ng-value-container > .ng-input > input').click()
        cy.contains('A+').click()
        cy.get(':nth-child(1) > .col-md-6 > .w-100 > .ng-select-container > .ng-arrow-wrapper').click()         //niveau d'instruction
        cy.contains('master').click()                                                                      //profession
        cy.get('#nationalite > .ng-select-container > .ng-arrow-wrapper').click()                               //nationalité
        cy.contains('SENEGAL').click() 
        cy.get(':nth-child(3) > :nth-child(2) > .w-100 > .ng-select-container > .ng-arrow-wrapper').click()     //ethnie    
        cy.contains('WOLOF').click()  
        //enregistrer l'enregistrement
        cy.get('.col-12 > .btn').click()                                                  

    })
})  