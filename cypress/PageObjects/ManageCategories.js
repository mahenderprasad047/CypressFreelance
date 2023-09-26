import Common from "../GenericLibrary/Common"

class ManageCategories
{

    btnAddNewCategory = "//button[text()='Add New Category ']"

    CreateACategory(sCategoryName)
    {
        cy.window().then(function(win)
        {
            cy.stub(win, "prompt").returns(sCategoryName); 
        }) 
        cy.xpath(this.btnAddNewCategory).click();
        Common.WaitForFewSeconds(1);
        cy.xpath("//td[text()='" + sCategoryName +"']").should("be.visible");
        Common.WaitForFewSeconds(1);

    }
}

export default ManageCategories;