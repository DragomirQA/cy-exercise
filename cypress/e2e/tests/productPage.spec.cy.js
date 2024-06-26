// <reference types="cypress"/>}

import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import validUser from '../../fixtures/valid_user.json';


const loginPage = new LoginPage();
const productPage = new ProductPage();

describe('Products tests', () => {

    beforeEach('Test setup', () => {
        cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/');
        loginPage.fillEmailField(validUser.email);
        loginPage.fillPasswordField(validUser.password);
        loginPage.clickSignInButton();
        loginPage.elements.myAccountTitle().should('be.visible');
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');

    })

    it('Jackets: Validate prices', () => {

        cy.visit('/women/tops-women/jackets-women.html');
        productPage.elements.prices().each((element, i, list) => {
            cy.wrap(element).should('contain', '$');
        })
    })

    it('Jackets: Validate images', () => {

        cy.visit('/women/tops-women/jackets-women.html');
        productPage.elements.images().each((element, i, list) => {
            cy.wrap(element).should('be.visible');
        })
    })

    it('Jackets: Validate each image opens a product', () => {

        cy.visit('/women/tops-women/jackets-women.html');
        productPage.elements.images().each((element, i, list) => {
            cy.wrap(element).click();
            cy.wait(4000);
            cy.go('back');
    })
})

it.only('Jackets: Validate drop down menu', () => {
    cy.visit('/women/tops-women/jackets-women.html');
    cy.get('#limiter').select('12', {force: true});
    cy.wait(2000);
    cy.get('#limiter').select('24', {force: true});
    cy.wait(2000);
    cy.get('#limiter').select('36', {force: true});
    cy.wait(2000);


})


})
