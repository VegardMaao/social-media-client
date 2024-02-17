// login  credentials
// name 	null
// email 	no@you.no
// pass 	nopadope

// Describe the function

describe("login with wrong credentials", () => {
  it("should go to login form and enter wrong info", () => {
    // We need to go to the index.html page
    cy.visit("http://127.0.0.1:5500/");

    // Then the login form and enter wrong credentials
    cy.get("[data-cy='emailInp']")
      .type("no@you.no", { force: true })
      .should("have.value", "no@you.no");
    cy.get("[data-cy='passwordInp']")
      .type("nopadope", { force: true })
      .should("have.value", "nopadope");

    // Submit the form
    cy.get("[data-cy='loginBtn']").click();

    // Wait for server response
    cy.wait(5000);

    // Check to see if login was unsuccessful
    cy.get("[data-visible='loggedIn']")
      .contains("vegar")
      .should("not.exist")
      .end();
  });
});
