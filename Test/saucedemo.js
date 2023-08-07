const {Builder, By, Key} = require ("selenium-webdriver");
const assert = require("assert");
const { use } = require("chai");
var should = require("chai").should();

//describe  block
describe("sauce demo", function(){
    
    //it block
    it("sauce demo", async function(){

        //lauch brwoser 
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate url 
        await driver.get("https://www.saucedemo.com/")
        const expectedTitle = 'Swag Labs';
        const actualTitle = await driver.getTitle();
        assert(actualTitle.includes(expectedTitle));

    
        //get value
        const username = 'standard_user';
        const password = 'secret_sauce';
      
        //login menggunakan value 
        await driver.findElement(By.id("user-name")).sendKeys(username);
        await driver.findElement(By.id("password")).sendKeys(password);
        await driver.findElement(By.id("login-button")).click();

        //assert url berhasil login
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://www.saucedemo.com/inventory.html');

        //get value backpack 
        const backpack ='29.99';

        await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click()
        await driver.findElement(By.xpath("(//a[@class='shopping_cart_link'])[1]")).click()
        await driver.findElement(By.id("checkout")).click()


        // value untuk isi form checkout
        const firstname = 'vico';
        const lastame = 'hadi';
        const zipcode = '40284';

        await driver.findElement(By.id("first-name")).sendKeys(firstname);
        await driver.findElement(By.id("last-name")).sendKeys(lastame);
        await driver.findElement(By.id("postal-code")).sendKeys(zipcode);
        await driver.findElement(By.id("continue")).click();

        // confirm harga backpack 
        const cartPriceElement = await driver.findElement(By.className('inventory_item_price'));
        const cartPriceText = await cartPriceElement.getText();
        const expectedPriceText = '$29.99';
        assert.strictEqual(cartPriceText, expectedPriceText);


        //melanjutkan checkout
        await driver.findElement(By.id("finish")).click()
        const completeMessage = await driver.findElement(By.className('complete-header')).getText();
        const expectedMessage = 'THANK YOU FOR YOUR ORDER!';

        // Assersi pesan berhasil
        assert.strictEqual(completeMessage.toUpperCase(), expectedMessage);
        

        //close browser
        await driver.quit();  
    }); 


});
