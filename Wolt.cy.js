/// <reference types = "cypress"/>

describe('Ordering a Burger on Wolt.com',() =>{
  it('should sucessfully order a burger',() =>{
  // visit Wolt.com website
  cy.visit('https://wolt.com/en');

  cy.get('.loading-spinner').should('not.exist'); // Wait for loading to finish

  //To accpet the Cookies button using CSSselector 
cy.get('button[class="sc-62ed5c8d-2 hyVQid"] div[class="sc-62ed5c8d-3 iBiskN"]').click();
cy.get('#front-page-input', { timeout: 10000 }).type('kauno dokas').click();

// Submitting the search form by finding the submit button and invoking its click event
cy.contains('Kauno Dokas').click();

// Checking if the page has changed - we're waiting until the 'h1'  
cy.get('body > div:nth-child(2) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > span:nth-child(2)')
  .click();

  // search for a restro in
  cy.get('input[placeholder="Search in Wolt..."]')
    .type('peledine{enter}')
    // Confirm that our new URL contains '/restaurants/'
    // Click on button // Click on el with focus

cy.contains('peledine').click() // Click on first el containing 'Welcome'
  // Verify the burger is added to the cart
  cy.get('.cart-item-name').contains(/burger/i).should('be.visible');

  // Proceed to checkout
  cy.get('.cart-button').click();

  // Checkout flow assertions and steps:

    // 1. Delivery address
    cy.get('.delivery-address').should('contain', 'Kauno Dokas');
    // If address selection is needed, uncomment and adapt:
    // cy.get('.address-selection-button').click();
    // ... (follow steps to select or enter address)

    // 2. Delivery time
    cy.get('.delivery-times').should('be.visible');
    // Select a delivery time (if needed)
    cy.get('.delivery-time-option').first().click();

    // 3. Payment method
    cy.get('.payment-methods').should('be.visible');
    cy.get('.payment-method-option[data-method="credit-card"]').click();

    // 4. Order summary
    cy.get('.order-summary-item-name').contains(/burger/i).should('be.visible');
    cy.get('.order-summary-total-price').should('contain', '$15'); 
    cy.get('.order-summary-address').should('contain', 'Kauno Dokas');
    cy.get('.order-summary-delivery-time').should('contain', '30 min'); 
    cy.get('.order-summary-payment-method').should('contain', 'Credit card'); 

   



});
});


  //Enter delviry address
  









