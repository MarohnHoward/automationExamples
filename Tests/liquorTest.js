var navBar = function (liquorObject) {
    liquorObject
        .api.pause(500)
    liquorObject
        .waitForElementPresent('@Liquor')
        .click('@Liquor')
        .waitForElementPresent('@home')
        .waitForElementPresent('@Recipes')
        .click('@Recipes')
        .verify.containsText('@recipeResults', "Cocktail Recipes")
        .waitForElementPresent('@liquor2')
        .click('@liquor2')
        .waitForElementPresent('@home')
        .click('@Videos')
        .verify.containsText('@videoResults', "Curbside Cocktails")
        .waitForElementPresent('@liquor2')
        .click('@liquor2')
        .waitForElementPresent('@home')
        .click('@CityGuides')
        .waitForElementPresent('@cityResults')
        .verify.containsText('@cityResults', "CITY GUIDES")
        .click('@liquor2')
        .waitForElementPresent('@home')
        .click('@Spirits')
        .waitForElementPresent('@spiritsResult',)
        .verify.containsText('@spiritsResult', "Explore types of liquor")
        .click('@liquor2')
        .waitForElementPresent('@home')
        .click('@Community')
        .assert.urlContains('drinkwire')
        .click('@liquor2')
        .waitForElementPresent('@home')
        .click('@Bartenders')
        .waitForElementPresent('@bartenderResults')
        .verify.containsText('@bartenderResults', "The Bar Life" )
}
var liquorObject= {}
module.exports = {
    before: browser => {
        liquorObject = browser.page.liquorPO()
        liquorObject.navigate() 
    },
    after: browser => {
        liquorObject.end()
    },
    'Testing the navbar': browser => {
        navBar(liquorObject)
        liquorObject.pause(1000)
    },
    //'Search Bar Test': browser => {
        
  //  }
}