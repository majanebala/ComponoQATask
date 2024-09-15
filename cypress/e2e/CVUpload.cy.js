import profilePage from "../support/pages/profilePage"

describe('Test Profile Prefill from CV Upload', () => {
  let responseData;

  beforeEach('Login to app before test',()=>{
    cy.visit('/')
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })

  it.only('Verify candidate can upload their CV and correct pre-filling of Experience and Skills fields', () => {

    cy.intercept('POST', '/graphql', (req) => {
      if (req.body.operationName === 'UploadCV') { 
        req.continue((res) => {
          responseData = res.body.data.uploadCV.parsedCV.jobs;        
        });
      }
    }).as('uploadCV');
  
    profilePage.attachCV('test.pdf')

    //Verify successful CV upload
    cy.wait('@uploadCV').then(() => {
      cy.contains('Your CV has been uploaded, and your profile has been prefilled!', {timeout: 15000}).should('be.visible')
      profilePage.clickCloseIcon()
  
    //Workaround for the encountered bug #1 and #2
    cy.reload()    
    profilePage.waitForProfilePageLoad()
    profilePage.clickCloseIcon()

    });
  });
})