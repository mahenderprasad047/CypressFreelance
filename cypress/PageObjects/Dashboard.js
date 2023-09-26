import Common from "../GenericLibrary/Common"
class Dashboard
{

    btnCart = "//button[text()='Cart']";
    btnManage = "//span[text()='Manage']"
    btnManageCategory = "//a[contains(@href,'category')]"
    eleMenuDropDown = "//button[@class='cartBtn']//..//*[local-name()='svg' and @width='48px']"
    btnHome = "//div[text()='Home']"
    btnManageCourse = "//a[contains(@href,'course')]"
    btnCTScanAddToCart = "//h2[text()='CTScan'][1]/..//../button[1]"
    btnEnrollNow = "//button[text()='Enroll Now']"
    edtAddress = "//textarea[@id='thumbnail']"
    edtPhoneNumber = "//input[@id='name']"
    btnConfirmEnrollNow = "//div[@class='modal-footer']//button[text()='Enroll Now']"

    VerifySuccessfulLogin()
    {
        cy.xpath(this.btnCart).should("be.visible");
    }

    NavigateToManageCategoriesScreen()
    {
        cy.xpath(this.btnManage).trigger('mouseover').click({force: true});
        cy.xpath(this.btnManageCategory).invoke("removeAttr","target").click({force: true});
        cy.url().should('include', 'category/manage')
    }

    NavigateToHomePage()
    {
        cy.xpath(this.eleMenuDropDown).click();
        cy.xpath(this.btnHome).click();
        cy.url().should('include', 'freelance')
    }

    NavigateToManageCoursesScreen()
    {
        cy.xpath(this.btnManage).trigger('mouseover').click({force: true});
        cy.xpath(this.btnManageCourse).click({force: true});
        cy.url().should('include', 'course/manage')
    }

    AddACourse()
    {
        cy.xpath(this.btnCTScanAddToCart).click();
        Common.WaitForFewSeconds(1);
        cy.xpath(this.btnCart).click();
        Common.WaitForFewSeconds(1);
        cy.xpath(this.btnEnrollNow).click({force: true});
        cy.xpath(this.edtAddress).type("Glasgow Delaware")
        cy.xpath(this.edtPhoneNumber).type("19706")
        Common.WaitForFewSeconds(1);
        cy.xpath(this.btnConfirmEnrollNow).click();
        cy.xpath("//h4[contains(text(),'Your order id is ')]").should("be.visible");
        Common.WaitForFewSeconds(2);
        cy.xpath("//button[text()='Cancel']").click();
        Common.WaitForFewSeconds(1);
    }
}

export default Dashboard;