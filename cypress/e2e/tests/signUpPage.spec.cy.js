// <reference types="cypress"/>}

import { beforeEach } from 'mocha';
import SignUpPage from '../pages/SignUpPage';

const signUpPage = new SignUpPage();

describe('Creating account test', () => {

    beforeEach('Test setup', () => {
        cy.visit('/customer/account/create/');
    })

    it('Creating account: happy flow', () => {
        const randomNumber = Date.now();
        signUpPage.fillFirstNameField('Ika');
        signUpPage.fillLastNameField('Prase');
        signUpPage.fillEmailField('mudro_prasence1989' + randomNumber + '@oink.com');
        signUpPage.fillPasswordField('Divlja89svinjica!@')
        signUpPage.fillConfirmPasswordField('Divlja89svinjica!@');
        signUpPage.clickCreateAnAccountButton();
        signUpPage.elements.messageSuccess().should('be.visible');
        
    })

    it('Creating account: already existing email', () => {
        signUpPage.fillFirstNameField('Ika');
        signUpPage.fillLastNameField('Prase');
        signUpPage.fillEmailField('mudro_prasence1989@oink.com');
        signUpPage.fillPasswordField('Divlja89svinjica!@')
        signUpPage.fillConfirmPasswordField('Divlja89svinjica!@');
        signUpPage.clickCreateAnAccountButton();
        signUpPage.elements.messageError().should('be.visible');

    })



    

})