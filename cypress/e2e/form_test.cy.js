describe('Automation Practice Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fills out and submits the form', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('label[for="gender-radio-1"]').click(); // Male
    cy.get('#userNumber').type('1234567890');

    // Set Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();


    // Subject
    cy.get('#subjectsInput').type('Economics{enter}');

    // Hobby
    cy.get('label[for="hobbies-checkbox-3"]').click(); // Music

    // Upload file
    cy.get('#uploadPicture').selectFile('files/sampleImage.jpg');

    // Address (required field)
    cy.get('#currentAddress').type('123 Street Name');

    // Click the state dropdown container first
    cy.get('#state').click();
    cy.get('#react-select-3-input').type('NCR{enter}');

// Click the city dropdown container
    cy.get('#city').click();
    cy.get('#react-select-4-input').type('Delhi{enter}');


    // Submit
    cy.get('#submit').click();

    // Assertions
    cy.get('td').contains('Student Name').siblings().should('contain', 'John Doe');
    cy.get('td').contains('Student Email').siblings().should('contain', 'john.doe@example.com');
    cy.get('td').contains('Gender').siblings().should('contain', 'Male');
    cy.get('td').contains('Mobile').siblings().should('contain', '1234567890');
    cy.get('td').contains('Date of Birth').siblings().should('contain', '28 February,1930');
    cy.get('td').contains('Subjects').siblings().should('contain', 'Economics');
    cy.get('td').contains('Hobbies').siblings().should('contain', 'Music');
    cy.get('td').contains('Picture').siblings().should('contain', 'sampleImage.jpg');
    cy.get('td').contains('State and City').siblings().should('contain', 'NCR Delhi');
  });
});
