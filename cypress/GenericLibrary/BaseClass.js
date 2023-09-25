
class BaseClass
{

    LaunchApplication()
    {
        
        cy.fixture("Config").then(function(data){
            cy.visit(data.ApplicationURL);
        })
    }

}

export default BaseClass;