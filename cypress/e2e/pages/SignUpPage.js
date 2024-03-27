/// <reference types="cypress"/>}

class SignUpPage {

elements = {

    firstNameField : () => cy.get('#firstname'),
    lastNameField : () => cy.get('#lastname'),
    emailField : () => cy.get('#email_address'),
    passwordField : () => cy.get('#password'),
    confirmPasswordField : () => cy.get('#password-confirmation'),
    createAnAccountButton : () => cy.get('#form-validate > .actions-toolbar > div.primary > .action > span')
}

fillFirstNameField(firstNameAnyText) {
    this.elements.firstNameField().type(firstNameAnyText);
}

fillLastNameField(lastNameAnyText) {
    this.elements.lastNameField().type(lastNameAnyText);
}

fillEmailField(emailAnyEmail) {
    this.elements.emailField().type(emailAnyEmail);
}

fillPasswordField(passwordAnyText) {
    this.elements.passwordField().type(passwordAnyText);
}

fillConfirmPasswordField(confirmPasswordAnyText) {
    this.elements.confirmPasswordField().type(confirmPasswordAnyText);
}

clickCreateAnAccountButton() {
    this.elements.createAnAccountButton().click;
}

}

module.exports = SignUpPage;