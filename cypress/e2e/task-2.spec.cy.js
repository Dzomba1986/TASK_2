import registerPage from "../POM/registerPage";

describe ('Homework Task 2', () => {

    const baseUrl = Cypress.config('baseUrl');
   
         beforeEach ('Visit Web shop site', ()=>{
            cy.visit('/');
         })

         it('Register user', () =>{

            registerPage.registerFlow(John, Doe, doetest.com, Test12345);

         })


         
})