
class SignUpPage
{
    edtName = "//input[@id='name']";
    edtEmail = "//input[@id='email']";
    edtPassword = "//input[@id='password']";
    chkCypress= "//label[text()='Cypress']/..//input";
    rdgGender = "//input[@id='gender2']";
    lstState = "//select[@id='state']";
    lstHobbies = "//select[@id='hobbies']";
    btnSignUp = "//button[text()='Sign up']";

    AddANewUser(sName, sEmail, sPassword)
    {
        cy.xpath(this.edtName).type(sName,{force: true});
        cy.xpath(this.edtEmail).type(sEmail,{force: true});
        cy.xpath(this.edtPassword).type(sPassword,{force: true});
        cy.xpath(this.chkCypress).check({force: true});
        cy.xpath(this.rdgGender).check({force: true});
        cy.xpath(this.lstState).select("Jharkhand");
        cy.xpath(this.lstHobbies).select("Reading");
        cy.wait(2000);
        cy.xpath(this.btnSignUp).click({ force: true });
        cy.wait(5000);
        cy.log(cy.url());
        cy.url().should('include', 'login')


    }



}

export default SignUpPage;