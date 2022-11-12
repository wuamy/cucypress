const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When('I visit saucedemo.com', () => {
  cy.visit('https://www.saucedemo.com/');
});

Then('I should see a search bar', () => {
  cy.get('#login-button')
    .should('be.visible')

  assert.deepEqual({}, {})
});