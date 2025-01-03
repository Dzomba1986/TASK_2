import registerPage from "../POM/registerPage";
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();
const recipientName = faker.person.firstName();
const recipientEmail = faker.internet.email();
const city = faker.location.city();
const address = faker.location.streetAddress();
const zip = faker.location.zipCode();
const phoneNumber = faker.phone.number();

describe ('Homework Task 2', () => {
   
         beforeEach('Visit Web shop site', ()=>{
           cy.visit('/');
         })

         it('Register user', () =>{
            registerPage.registerComplete(firstName, lastName, email, password);
            registerPage.registerCompleatedFild().should('contain', 'Your registration completed');
            registerPage.logouTab().click();
         })

         it('Login user', () =>{
            registerPage.loginComplete(email, password);
            registerPage.computersTabMainMenu().click();
         })

         it('Checking computer subgroups', () =>{
            registerPage.computersTabMainMenu().click();
            registerPage.computersSubGroups().should('have.length', 3);
            registerPage.computersSubGroupsTitle().eq(3).should('contain', 'Desktops');
            registerPage.computersSubGroupsTitle().eq(4).should('contain', 'Notebooks');
            registerPage.computersSubGroupsTitle().eq(5).should('contain', 'Accessories');
         })

         it('Checking sorting functionality', () =>{
            registerPage.computersTabMainMenu().click();
            registerPage.computersSubGroupsTitle().eq(3).click();
            registerPage.sortingButton().select(3).should('contain', 'Price: Low to High');
         })

         it('Checking sorting functionality', () =>{
            registerPage.computersTabMainMenu().click();
            registerPage.computersSubGroupsTitle().eq(3).click();
            registerPage.itemsPerPageButton().select(0);
            registerPage.itemsPerPageButton().should('contain', "4");
         })

         it('Adding items to wishlist', () =>{
            registerPage.loginComplete(email, password);
            registerPage.computersTabMainMenu().click();
            registerPage.giftCardTabMainMenu().click();
            registerPage.productItems().eq(1).click();
            registerPage.recipientGiftCard2(recipientName, recipientEmail);
            registerPage.whishlistTab().click();
            registerPage.qtyField().should('not.have.value', 0);
            registerPage.whishlistShareLink().should('be.visible').and('contain', 'http://demowebshop.tricentis.com/wishlist/');
         })

         it('Adding item to shopping cart', () =>{
            registerPage.loginComplete(email, password);
            registerPage.computersTabMainMenu().click();
            registerPage.computersSubGroups().eq(0).click();
            registerPage.addToCartListButton().eq(0).click();
            registerPage.addToCartButton().click();
            registerPage.cartTab().eq(0).click();
            registerPage.qtyField().should('not.have.value', 0);
         })

         it('Removing item from shopping cart', () =>{
            registerPage.loginComplete(email, password);
            registerPage.computersTabMainMenu().click();
            registerPage.computersSubGroups().eq(0).click();
            registerPage.addToCartListButton().eq(0).click();
            registerPage.addToCartButton().click();
            registerPage.cartTab().eq(0).click();
            registerPage.qtyField().should('not.have.value', 0);
            registerPage.itemCheckbox().check();
            registerPage.updateCartButton().click();
            registerPage.orderSummaryField().should('contain', 'Your Shopping Cart is empty!');
         })

         it('Item checkout', () =>{
            registerPage.loginComplete(email, password);
            registerPage.computersTabMainMenu().click();
            registerPage.computersSubGroups().eq(0).click();
            registerPage.addToCartListButton().eq(0).click();
            registerPage.addToCartButton().click();
            registerPage.cartTab().eq(0).click();
            registerPage.qtyField().should('not.have.value', 0);
            registerPage.termOfServiceCheckbox().check();
            registerPage.checkoutButton().click();
            registerPage.checkoutProcess(city, address, zip, phoneNumber);
            registerPage.confirmationMessage().should('contain', 'Your order has been successfully processed!');
         })



         
      
})