describe("AddCar page", function () {
    it("adds a car with values 'values' and '1950' and checks that add Car button works and returns ", function () {
        browser.get("http://localhost:53185/Frontend/Index.html#!/addCar/");
        var brand = element(by.model("Brand"));
        var productionYear = element(by.model("ProductionYear"));
        var resultText = element(by.id("Check"));
        var addButton = element(by.id("inputButton"));
        var brandInput = "something";
        var productionYearInput = "1950";
        brand.sendKeys(brandInput);
        productionYear.sendKeys(productionYearInput)
        addButton.click();
        expect(resultText.getText()).toEqual("The Car " + brandInput + " produced in "
               + productionYearInput + " was succesfully added to the DataBase");
    })
});