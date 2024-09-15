import loginPage from "./pages/loginPage"
import profilePage from "../support/pages/profilePage"

Cypress.Commands.add('login', (username, password) => { 
    loginPage.enterUsernamePassword(username, password)
    loginPage.clickLoginButton()
    profilePage.waitForProfilePageLoad()

 })

