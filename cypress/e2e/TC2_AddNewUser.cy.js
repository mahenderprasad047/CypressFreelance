import BaseClass from "../GenericLibrary/BaseClass"
import Common from "../GenericLibrary/Common"
import LoginPage from "../PageObjects/LoginPage"
import SignUpPage from "../PageObjects/SignUpPage"

describe("TestCase2", function(){

    it("AddNewUser", function(){
        cy.log("TC1 START - Verify Successful Login")

        const base = new BaseClass();
        const common = new Common();
        const login = new LoginPage();
        const signup = new SignUpPage();

        base.LaunchApplication();
        login.CLickOnSignUpLink();

        var randomNumber = common.GenerateRandomNumber(5)
        cy.log("Random Number is "+ randomNumber)
        const sName = "Mahender" + randomNumber;
        const sEmail = "mahender" + randomNumber + "@gmail.com";
        const sPassword = "Ma" + randomNumber + "@go";
        signup.AddANewUser(sName, sEmail, sPassword);

        cy.log("TC1 END - Verify Successful Login")
    })

})