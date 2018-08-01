context('simple test', () => {
    it.only('lets do something',() => {
        cy.visit('localhost:3000')


        .get('input[name=writer]')
        .type('ofer')
        
        .get('input[type=submit]')
        .click()

        .get('input[name=writer]')
        .type('capitolis')
        .get('input[type=submit]')
        .click()

        .get('ul')
        .contains('capitolis')
        
        .get('ul')
        .contains('ofer')

        .get('button')
        .click()


    });
})