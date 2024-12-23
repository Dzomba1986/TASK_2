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
    
    registerFlow (firstName, lastName, email, password){
        return this.genderMale().click();
        return this.firstNameInputField().type(firstName);
        return this.lastNameInputField().type(lastName);
        return this.emailInputField().type(email);
        return this.passwordlInputField().type(password);
        return this.passwordConfirmationInputField().type(password);
        return this.registerButton().click();
    }
}    

module.exports = new registerPage();