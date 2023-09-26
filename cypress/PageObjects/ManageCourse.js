import Common from "../GenericLibrary/Common"

class ManageCourse
{

    btnAddNewCourse = "//button[text()='Add New Course ']";
    btnChooseFile = "#thumbnail"        //"//input[@id='thumbnail']";
    edtCourseName = "//input[@id='name']";
    edtCourseDescription = "//textarea[@id='description']";
    edtInstructor = "//input[@id='instructorNameId']";
    edtPrice = "//input[@id='price']";
    btnSelectCategory = "//div[text()='Select Category']";
    btnHealthcareCatefory = "//button[text()='Healthcare']";
    btnSave = "//button[text()='Save']";




    CreateACourse() 
    {
         
        cy.xpath(this.btnAddNewCourse).click();
        Common.WaitForFewSeconds(2);
        const fileName = 'Siemens.JPG';
        cy.get(this.btnChooseFile).attachFile(fileName);
        cy.xpath(this.edtCourseName).type("CTScan");
        cy.xpath(this.edtCourseDescription).type("Radiology");
        cy.xpath(this.edtInstructor).type("Mahender");
        cy.xpath(this.edtPrice).type("200");
        cy.xpath(this.btnSelectCategory).click();
        cy.xpath(this.btnHealthcareCatefory).click();
        cy.xpath(this.btnSave).click();

    }
}

export default ManageCourse;