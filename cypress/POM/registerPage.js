class registerPage {

    registerTab() {
        return  cy.get('[href="/register"]');
    }

    genderMale() {
        return  cy.get('#gender-male');
    }

    genderFemail() {
        return  cy.get('#gender-femail');
    }

    firstNameInputField() {
        return  cy.get('#FirstName');
    }

    lastNameInputField() {
        return  cy.get('#LastName');
    }

    emailInputField() {
        return  cy.get('#Email');
    }

    passwordlInputField() {
        return  cy.get('#Password');
    }

    passwordConfirmationInputField() {
        return  cy.get('#ConfirmPassword');
    }

    registerButton() {
        return  cy.get('#register-button');
    }

    registerCompleatedFild(){
        return cy.get('.result');
    }
    
    registerFlow (firstName, lastName, email, password){
         this.registerTab().click();   
         this.genderMale().click();
         this.firstNameInputField().type(firstName);
         this.lastNameInputField().type(lastName);
         this.emailInputField().type(email);
         this.passwordlInputField().type(password);
         this.passwordConfirmationInputField().type(password);
         this.registerButton().click();
    }
}    

module.exports = new registerPage();