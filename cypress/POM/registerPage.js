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

    loginTab(){
        return cy.get('[href="/login"]');
    }

    loginButton(){
        return cy.get('[class="button-1 login-button"]');
    }

    logouTab(){
        return cy.get('[href="/logout"]');
    }

    computersTabMainMenu(){
        return cy.get('[href="/computers"]').eq(0);
    }

    giftCardTabMainMenu(){
        return cy.get('[href="/gift-cards"]').eq(0);
    }

    computersSubGroups(){
        return cy.get('.sub-category-item');
    }

    computersSubGroupsTitle(){
        return cy.get('.title');
    }

    sortingButton(){
        return cy.get('#products-orderby');
    }

    itemsPerPageButton(){
        return cy.get('#products-pagesize');
    }

    productItems(){
        return cy.get('.picture');
    }
    
    giftCard2RecipientName(){
        return cy.get('#giftcard_2_RecipientName')
    }

    giftCard2RecipientEmail(){
        return cy.get('#giftcard_2_RecipientEmail')
    }

    addToWishlistButton(){
        return cy.get('#add-to-wishlist-button-2')
    }

    whishlistTab(){
        return cy.get('.cart-label').contains('Wishlist');
    }

    whishlistShareLink(){
        return cy.get('[class="share-link"]');
    }

    addToCartListButton(){
        return cy.get('[value="Add to cart"]');
    }

    addToCartButton(){
        return cy.get('#add-to-cart-button-72');
    }

    cartTab(){
        return cy.get('.cart-label').contains('cart');
    }

    qtyField(){
        return cy.get('.qty-input');
    }

    itemCheckbox(){
        return cy.get('[name="removefromcart"]');
    }

    updateCartButton(){
        return cy.get('[name="updatecart"]');
    }

    orderSummaryField(){
        return cy.get('.order-summary-content');
    }

    termOfServiceCheckbox(){
        return cy.get('#termsofservice');
    }

    checkoutButton(){
        return cy.get('#checkout');
    }

    countryField(){
        return cy.get('#BillingNewAddress_CountryId');
    }

    stateField(){
        return cy.get('#BillingNewAddress_StateProvinceId');
    }

    cityInputField(){
        return cy.get('#BillingNewAddress_City');
    }

    addressInputField(){
        return cy.get('#BillingNewAddress_Address1');
    }

    zipInputField(){
        return cy.get('#BillingNewAddress_ZipPostalCode');
    }

    phoneInputField(){
        return cy.get('#BillingNewAddress_PhoneNumber');
    }

    continueBillingButton(){
        return cy.get('[onclick="Billing.save()"]');
    }

    continueShippingButton(){
        return cy.get('[onclick="Shipping.save()"]');
    }

    continueShippingMethodButton(){
        return cy.get('[onclick="ShippingMethod.save()"]');
    }

    continuePaymentMethodButton(){
        return cy.get('[onclick="PaymentMethod.save()"]');
    }

    continuePaymentInfodButton(){
        return cy.get('[onclick="PaymentInfo.save()"]');
    }

    confirmeButton(){
        return cy.get('[value="Confirm"]');
    }

    confirmationMessage(){
        return cy.get('.title');
    }


    registerComplete (firstName, lastName, email, password){
         this.registerTab().click();   
         this.genderMale().click();
         this.firstNameInputField().type(firstName);
         this.lastNameInputField().type(lastName);
         this.emailInputField().type(email);
         this.passwordlInputField().type(password);
         this.passwordConfirmationInputField().type(password);
         this.registerButton().click();
    }

    loginComplete (email, password){
        this.loginTab().click();   
        this.emailInputField().type(email);
        this.passwordlInputField().type(password);
        this.loginButton().click();
   }

    recipientGiftCard2 (recipientName, recipientEmail){  
        this.giftCard2RecipientName().type(recipientName);
        this.giftCard2RecipientEmail().type(recipientEmail);
        this.addToWishlistButton().click();
    }   

    checkoutProcess (city, address, zip, phoneNumber ){  
        this.countryField().select(1);
        this.stateField().select(4);
        this.cityInputField().type(city);
        this.addressInputField().type(address);
        this.zipInputField().type(zip);
        this.phoneInputField().type(phoneNumber);
        this.continueBillingButton().click();
        this.continueShippingButton().click();
        this.continueShippingMethodButton().click();
        this.continuePaymentMethodButton().click();
        this.continuePaymentInfodButton().click();
        this.confirmeButton().click();
    }   

}    

module.exports = new registerPage();