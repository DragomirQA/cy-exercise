// <reference types="cypress"/>}

// CSS SELECTORS
/**
 *   TAG[ATRIBUTE="VALUE"] input[type="checkbox"] 
 *   TAG[ATRIBUTE="VALUE"][ATRIBUTE="VALUE"]
 *   TAG[ATRIBUTE="VALUE"][ATRIBUTE="VALUE"][ATRIBUTE="VALUE"]...
 */
describe('Checkboxes and radio buttons', () => {

    beforeEach('Test setup', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    })

    it.only('Validate all checkboxes', () => {
        // check all using element list and assert
        cy.get('input[type="checkbox"]').check().should('be.checked')
        // uncheck all using element list and assert
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked');

        // check first element in the list using first()
        cy.get('input[type="checkbox"]').first().check();
        // check last element in the list using last()
        cy.get('input[type="checkbox"]').last().check();
        // check using element list and passing value to check()
        cy.get('input[type="checkbox"]').check('option-2');
        // uncheck two checkboxes using .uncheck(arrayOfValuesToCheck)
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-4']);
        // assert that element list is unchecked
        cy.get('input[type="checkbox"]').should('not.be.checked');



    })

    it('Validate user can check multiple checkboxes', () => {
        // check all using element list and assert

        // uncheck the first one using first() and assert

        // uncheck the last one using last() and assert

        // uncheck any that is checked using speceific css selector and assert


    })


    it('Validate all radio buttons', () => {
        // select first one using first() and assert it is selected
        // make sure all others are not selected with specific locators
        // select the second one using check('value')
        // ...


    })


})