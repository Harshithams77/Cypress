/// <reference types="Cypress" />
describe('My First Test Suite',function()
{
    it('MyFirstTest case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        //how to enter inside edit box
        cy.get(".search")

    
    })
})