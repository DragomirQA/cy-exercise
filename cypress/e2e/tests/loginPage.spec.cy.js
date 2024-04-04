// <reference types="cypress"/>}

import LoginPage from '../pages/LoginPage';

const loginPage = new LoginPage;

describe('Login tests', () => {

    it('Login test: unsuccessfull login', () => {
       
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/');
        loginPage.fillEmailField('prasulence@oink.com');
        loginPage.fillPasswordField('Wrongpass');
        loginPage.clickSignInButton();
        loginPage.elements.messageError().should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')

    })


    it('Login test: successfull login', () => {
       
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/');
        loginPage.fillEmailField('prasulence@oink.com');
        loginPage.fillPasswordField('Svinjica89');
        loginPage.clickSignInButton();
        loginPage.elements.myAccountTitle().should('be.visible');

    })


    it('Login test: unregistered user', () => {
       
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/');
        loginPage.fillEmailField('alien@mars.com');
        loginPage.fillPasswordField('Alienpass');
        loginPage.clickSignInButton();
        loginPage.elements.messageError().should('be.visible');
        //Za asertaciju sam hteo da bude have.class ali nikako nisam mogao da uradim kako treba,
        //tako da za sada ostaje asertacija be.visible :-/

    })

})