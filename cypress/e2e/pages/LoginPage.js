/// <reference types="cypress"/>}

class LoginPage {

    elements = {

        emailField : () => cy.get('#email'),
        passwordField : () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'),
        signInButton : () => cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'), 
        myAccountTitle : () => cy.get('.base'),
        messageError : () => cy.get('.message-error > div'),
    }

    fillEmailField (emailAnyText) {
        this.elements.emailField().type(emailAnyText);
    }

    fillPasswordField (passwordAnyText) {
        this.elements.passwordField().type(passwordAnyText);
    }

    clickSignInButton() {
        this.elements.signInButton().click();
    }
}

module.exports = LoginPage;