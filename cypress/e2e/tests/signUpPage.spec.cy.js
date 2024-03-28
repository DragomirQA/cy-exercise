// <reference types="cypress"/>}

import SignUpPage from '../pages/SignUpPage';

const signUpPage = new SignUpPage();

describe('Creating account test', () => {

    it('Creating account: happy flow', () => {
        const randomNumber = Date.now();
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
        signUpPage.fillFirstNameField('Ika');
        signUpPage.fillLastNameField('Prase');
        signUpPage.fillEmailField('mudro_prasence1989' + randomNumber + '@oink.com');
        signUpPage.fillPasswordField('Divlja89svinjica!@')
        signUpPage.fillConfirmPasswordField('Divlja89svinjica!@');
        signUpPage.clickCreateAnAccountButton();
        signUpPage.elements.messageSuccess().should('be.visible');
        
    })

    it('Creating account: already existing email', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
        signUpPage.fillFirstNameField('Ika');
        signUpPage.fillLastNameField('Prase');
        signUpPage.fillEmailField('mudro_prasence1989@oink.com');
        signUpPage.fillPasswordField('Divlja89svinjica!@')
        signUpPage.fillConfirmPasswordField('Divlja89svinjica!@');
        signUpPage.clickCreateAnAccountButton();
        signUpPage.elements.messageError().should('be.visible');

    })



    

})