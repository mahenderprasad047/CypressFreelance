import BaseClass from "../GenericLibrary/BaseClass"
import LoginPage from "../PageObjects/LoginPage"
import Dashboard from "../PageObjects/Dashboard";
import ManageCategories from "../PageObjects/ManageCategories";
import ManageCourse from "../PageObjects/ManageCourse";
import Common from "../GenericLibrary/Common"

describe("TestCase3", function(){

    it("CreateAnOrder", function(){
        
        cy.log("TC3 START - Verify Order Creation");
        const base = new BaseClass();
        const login = new LoginPage();
        const dash = new Dashboard();
        const category = new ManageCategories();
        const course = new ManageCourse();
        
        base.LaunchApplication();
        cy.fixture("Config").then(function(data){
            login.LoginToApplication(data.LoginEmail, data.LoginPassword);
         })
   
        dash.VerifySuccessfulLogin()
        cy.screenshot("SuccessFullyLoggedintoApplication");
        cy.log("Step1 - Verify Successfully logged in application");

        dash.NavigateToManageCategoriesScreen();
        cy.log("Step2 - Verify navigation to ManageCategory screen");

        category.CreateACategory("Healthcare");
        cy.log("Step3 - Verify creation of category");

        dash.NavigateToHomePage();
        dash.NavigateToManageCoursesScreen();
        cy.log("Step4 - Verify navigation to ManageCourse screen");

        course.CreateACourse();
        cy.log("Step5 - Course is created Successfully");

        //Add the course
        dash.NavigateToHomePage();
        Common.WaitForFewSeconds(1);
        dash.AddACourse();
        Common.WaitForFewSeconds(1);
        cy.log("Step6 - Order done successfulluy");

        //delete Course and Category
        dash.NavigateToManageCoursesScreen();
        Common.WaitForFewSeconds(1);
        cy.xpath("//td[text()='CTScan']//following::button").click();
        Common.WaitForFewSeconds(1);
        dash.NavigateToHomePage();
        Common.WaitForFewSeconds(1);
        dash.NavigateToManageCategoriesScreen();
        
        cy.xpath("//td[text()='Healthcare']//following::button[1]").click({force: true});
        Common.WaitForFewSeconds(1);
        cy.xpath("//button[text()='Delete']").click();
        Common.WaitForFewSeconds(1);

        
        
        cy.log("Step7 - Category and Coursedelete Successfully");
        cy.log("TC3 END - Verify Order Creation");
    })
})