// <reference types="cypress"/>}

import SignUpPage from '../pages/SignUpPage';

const signUpPage = new SignUpPage();

describe('Creating account test', () => {

    it('Creating account: happy flow', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
        signUpPage.fillFirstNameField('Ika');
        signUpPage.fillLastNameField('Prase');
        signUpPage.fillEmailField('mudro_prasence@oink.com');
        signUpPage.fillPasswordField('Divlja89svinjica!@')
        signUpPage.fillConfirmPasswordField('Divlja89svinjica!@');
        signUpPage.clickCreateAnAccountButton();
        
    })

    

})