const {Builder, By, Key} = require ("selenium-webdriver");
var should = require("chai").should();

//describe  block
describe("add todo tests", function(){
    
    //it block
    it("succses fully add on todo list", async function(){

        //lauch brwoser 
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate url 
        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        // add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Selenium Pratice", Key.RETURN);

        //assertion
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
            return value
        });

        //assert use chai should
        todoText.should.equal("Selenium Pratice")

        //close browser
        await driver.quit();
    }); 


});















