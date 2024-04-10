// <reference types="cypress"/>}

import LoginPage from '../pages/LoginPage';
import validUser from '../../fixtures/valid_user.json';
import invalidUser from '../../fixtures/invalid_user.json';

const loginPage = new LoginPage;

describe('Login tests', () => {

    beforeEach('Test setup', () => {
        cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/');
    
    })

    it('Login test: unsuccessfull login', () => {
        loginPage.fillEmailField(validUser.email);
        loginPage.fillPasswordField(invalidUser.password);
        loginPage.clickSignInButton();
        loginPage.elements.messageError().should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')

    })


    it('Login test: successfull login', () => {
        loginPage.fillEmailField(validUser.email);
        loginPage.fillPasswordField(validUser.password);
        loginPage.clickSignInButton();
        loginPage.elements.myAccountTitle().should('be.visible');
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');

    })


    it('Login test: unregistered user', () => {
        loginPage.fillEmailField(invalidUser.email);
        loginPage.fillPasswordField(invalidUser.password);
        loginPage.clickSignInButton();
        loginPage.elements.messageError().should('be.visible');
        

    })

})