import 'cypress-file-upload'

class ProfilePage {
    elements = {
        uploadCVBtn : () => cy.get('[data-testid="upload-cv-button"]'),
        attachCVBtn : () => cy.get('[data-testid="upload-cv-input"]'),
        editSkillsSectionBtn : () => cy.get('div').find('a[href="/profile/experience-and-skills"]'),
        closeIcon : () => cy.get('svg').find('title').contains('Cancel').parents('svg'),
        backToProfileBtn : () =>cy.get('button[data-testid="secondary-button"]').contains('Back to profile')


    }
    waitForProfilePageLoad(){
        cy.contains('Job Happiness', { timeout: 15000 }).should('be.visible')    
    }

    attachCV(filename){
        this.elements.attachCVBtn().attachFile(filename)
        cy.wait(2000)
    }

    clickUploadCVButton(){
        this.elements.uploadCVBtn().click()
    }

    clickCloseIcon(){
        this.elements.closeIcon().click()
    }

    clicBackToProfileBtn(){
        this.elements.backToProfileBtn().click()
    }

    editSkillsSection(){
        this.elements.editSkillsSectionBtn().click()
    }
}
module.exports = new ProfilePage()