
class Dashboard
{

    btnCart = "//button[text()='Cart']";
    VerifySuccessfulLogin()
    {
        cy.xpath(this.btnCart).should("be.visible");
    }
}

export default Dashboard;