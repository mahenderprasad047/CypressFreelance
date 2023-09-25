

class LoginPage
{
	edtEmail = "//input[@id='email1']";
	edtPassword = "//input[@id='password1']";
	btnSignIn = "//button[text()='Sign in']";
    btnSignUp = "//a[contains(text(),'Signup')]"

    LoginToApplication(sEmail, sPassword)
    {
        cy.xpath(this.edtEmail).type(sEmail);
        cy.xpath(this.edtPassword).type(sPassword);
        cy.xpath(this.btnSignIn).click();
   
    }

    CLickOnSignUpLink()
    {
        cy.xpath(this.btnSignUp).click(); 
    }

}
    
export default LoginPage;