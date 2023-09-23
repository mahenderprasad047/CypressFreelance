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

        const sName = "Mahender" + common.GenerateRandomNumber() + " Prasad";
        const sEmail = "mahenderprasad" + common.GenerateRandomNumber() + "gmail.com";
        const sPassword = "Mahen" + common.GenerateRandomNumber() + "@go";
        signup.AddANewUser(sName, sEmail, sPassword);

        cy.log("TC1 END - Verify Successful Login")
    })

})