import BaseClass from "../GenericLibrary/BaseClass"
import Dashboard from "../PageObjects/Dashboard";
import LoginPage from "../PageObjects/LoginPage"



describe("TestCase1", function(){

    it("VerifySuccessfulLogin", function(){
        cy.log("START TC - Verify Successful Login")
        const base = new BaseClass();
        const login = new LoginPage();
        const dash = new Dashboard();

        base.LaunchApplication();

        cy.fixture("Config").then(function(data){
            login.LoginToApplication(data.LoginEmail, data.LoginPassword);
         })
   
        dash.VerifySuccessfulLogin()
        cy.screenshot("SuccessFullyLoggedintoApplication");
        cy.log("END TC - Verify Successful Login")
    })

})