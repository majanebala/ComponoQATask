class LoginPage {
    elements ={
        userNameTxt : () => cy.get('input[name="email"]'),
        passwordTxt : () => cy.get('input[name="password"]'),
        loginBtn : () => cy.contains('button', 'Log In')
    }

    enterUsernamePassword(username, password){
        this.elements.userNameTxt().type(username);
        this.elements.passwordTxt().type(password);
    }

    clickLoginButton (){
        this.elements.loginBtn().click();
    }
}
module.exports = new LoginPage()