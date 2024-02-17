// login  credentials
// name 	vegar
// email 	no@noroff.no
// pass 	pass123123

// Describe the function

describe("login correct credentials", () => {
  it("should log into the Social Media platform", () => {
    // We need to go to the index.html page
    cy.visit("http://127.0.0.1:5500/");

    // Then the login form and enter credentials
    cy.get("[data-cy='emailInp']")
      .type("no@noroff.no", { force: true })
      .should("have.value", "no@noroff.no");
    cy.get("[data-cy='passwordInp']")
      .type("pass123123", { force: true })
      .should("have.value", "pass123123");

    // Submit the form
    cy.get("[data-cy='loginBtn']").click();

    // Wait for server response and profile info
    cy.wait(5000);

    // UI should show the logged in page / contains h4 === username && <span class="text-muted d-block profile-email">no@noroff.no</span>
    cy.get("[data-visible='loggedIn']").should("exist").end();
  });
});
