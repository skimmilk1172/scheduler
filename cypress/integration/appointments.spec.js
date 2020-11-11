
describe("Appointments", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");

    cy.visit("/");

    cy.contains("Monday");
  });

  it("should book an interview", () => {

    // This clicks the Add button
    cy.get("[alt=Add]")
      .first()
      .click();

      // Enters in the name
    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");
      //Clicks on the Save button
    cy.contains("Save").click();
      // Sees the booked appointment
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  });

  it("should edit an interview", () => {
    //.Click Edit button
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

      // Enters in the name
    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Lydia Miller-Jones");
    //Clicks on the Save Button
    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  });

  it("should cancel an interview", () => {
    //Clicks the Delete Button
    cy.get("[alt=Delete]").click({ force: true });
    //Clicks the Confirm button
    cy.contains("Confirm").click();
    //Checks if the message is hidden or not
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");
    //This checks if the students name is there or not
    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});