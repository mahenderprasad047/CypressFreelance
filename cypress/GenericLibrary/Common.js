

class Common
{
    GenerateRandomNumber(numberOfDigits)
    {
        var i, temp, temp1;
        const allCharaters = "0123456789";
		var random = "";
		for(i=0;i<numberOfDigits;i++)
		{
			temp = Math.random()*10;
			temp1 = allCharaters.charAt(temp);
			random = random+temp1;
		}
		
		return random;
    }

	static WaitForFewSeconds(iSecs)
	{
		cy.wait(iSecs*1000);
	}
}

export default Common;