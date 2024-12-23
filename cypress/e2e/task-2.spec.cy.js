import registerPage from "../POM/registerPage";
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

describe ('Homework Task 2', () => {

    const baseUrl = Cypress.config('baseUrl');
   
         beforeEach ('Visit Web shop site', ()=>{
            cy.visit('/');
         })

         it('Register user', () =>{
            registerPage.registerFlow(firstName, lastName, email, password);
            registerPage.registerCompleatedFild().should('contain', 'Your registration completed');
         })

         
      
})