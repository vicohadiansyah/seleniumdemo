const {Builder, By, Key, until} = require ("selenium-webdriver");
const assert = require("assert");

//describe  block
describe("Webapp", function(){
    
    //it block
    it("login siswa", async function(){

        //lauch brwoser 
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate url 
        await driver.get("https:///xdmin199x:twMydn1AtRpJHlELvnvd@staging-my.skul.id/")

        //navigate to siswa role
        await driver.findElement(By.xpath("(//p[normalize-space()='Siswa'])[1]")).click()

        // username form
        await driver.wait(until.elementLocated(By.xpath("(//input[@name='username'])[1]")), 10000);
        const username = await driver.findElement(By.xpath("(//input[@name='username'])[1]"));
        await username.sendKeys("siswa_test_baru");

        //password form
        await driver.wait(until.elementLocated(By.name("password")), 10000);
        const password = await driver.findElement(By.xpath("(//input[@placeholder='Password'])[1]"))
        await password.sendKeys("Password24");

        // check radio button 
        const checkboxElement = await driver.findElement(By.className("rs-checkbox-inner"));
        await driver.executeScript("arguments[0].click();", checkboxElement);
        
        //click button login
        await driver.findElement(By.xpath("(//button[normalize-space()='LOGIN'])[1]")).click()

        //click lewati
        const lewati = await driver.wait(until.elementLocated(By.className("rs-btn rs-btn-subtle")), 10000);
        await lewati.click();

        //buka profile
        await driver.findElement(By.xpath("//p[normalize-space()='Profil'][1]")).click();

        //assert tittle
        const expectedTitle = 'Skul.id | Profil saya';
        const actualTitle = await driver.getTitle();
        assert(actualTitle.includes(expectedTitle));


        //close browser
        await driver.quit();  
    }); 


});
