function addTask(taskName){
    cy.get('input[name=writer]')
    .type(taskName)
    cy.get('input[type=submit]')
    .click()
}

function cleanTaskList(){
    cy.get('button')
    .click()
}



describe('Simple Test Suite',() => {
    before(() => {
        console.log('this is before message!');
    })

    beforeEach(() => {
        console.log('this is before each message!')
    })

    afterEach(() => {
        cy.get('button')
        .click()

        console.log('this is after each message!')
    })

    after(() => {
        console.log('this is after message!')
    })

    context('Simple Test 1', () => {
        it('add/delete things',() => {
            cy.visit('/')

           //assert that the list is empty
            cy.get('li').should('have.length',0)

            //enter 'maor' into the list
            cy.get('input[name=writer]')
            .type('maor')
            cy.get('input[type=submit]')
            .click()

            //assert that there is only 1 item in the list
            cy.get('li').should('have.length',1)
    
            //enter 'capitolis' into the list
            cy.get('input[name=writer]')
            .type('capitolis')
            cy.get('input[type=submit]')
            .click()

            //assert that there is 2 items in the list now
            cy.get('li').should('have.length',2)
    
            //empty list
            cy.get('button')
            .click()

            //assert that the list is empty once again
            cy.get('li').should('have.length',0)
        });

    })

    context('Simple Test 2' , () => {
        it('clean empty list',function() {
            //assert that the list is empty
            cy.get('li').should('have.length',0)

            //empty list
            cy.get('button')
            .click()

            //assert that the list is still empty
            cy.get('li').should('have.length',0)
            
        })
    })

    context('Simple Test 3' , () => {
        it('add/delete things with functions',function() {
            cy.visit('/')

            //assert that the list is empty
             cy.get('li').should('have.length',0)
 
             //enter 'maor' into the list
             addTask('maor')
 
             //assert that there is only 1 item in the list
             cy.get('li').should('have.length',1)
     
             //enter 'capitolis' into the list
             addTask('capitolis')
 
             //assert that there is 2 items in the list now
             cy.get('li').should('have.length',2)
     
             //empty list
             cleanTaskList()
 
             //assert that the list is empty once again
             cy.get('li').should('have.length',0)
            
        })
    })
})
