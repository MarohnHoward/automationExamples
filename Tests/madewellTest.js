
var madeFill = function (madeObjects) {
    madeObjects
        .api.pause(300)
    madeObjects
        .waitForElementPresent('@firstClick')
        .pause(500)
        .click('@firstClick')
        .waitForElementVisible('@newCate')
        .moveToElement('@newCate', 10, 10)
        .waitForElementVisible('@newSubcate')
        .moveToElement('@denimCate', 10, 10)
        .waitForElementPresent('@denimSubcate')
        .moveToElement('@clothingCate', 10, 10)
        .moveToElement('@shoesCate', 10, 10)
        .waitForElementPresent('@shoesSubcate')
        .moveToElement('@accessoriesCate', 10, 10)
        .waitForElementPresent('@accessoriesSubcate')
        .moveToElement('@lifeCate', 10, 10)
        .waitForElementPresent('@lifeSubcate')
        .moveToElement('@labelsCate', 10, 10)
        .waitForElementPresent('@labelsSubcate')
        .moveToElement('@saleCate', 10, 10)
        .waitForElementPresent('@saleSubcate')
        .moveToElement('@inspoCate', 10, 10)
        .waitForElementPresent('@inspoSubcate') 
        .pause(2000) 
}
var addCartInfo = function (madeObjects) {
    madeObjects
        .pause(1000)
        .moveToElement('@denimCate', 10, 10)
        //.waitForElementPresent('@denimSubcate')
        .pause(500)
        .click('@denimSubcate')
        .pause(1000)
        .waitForElementPresent('@dressSelect')
        .click('@dressSelect')
        .waitForElementPresent('@sizeSelect')
        .click('@sizeSelect')
        .waitForElementNotPresent('@addToBagDisabled', 10000)
        .pause(5000)
        .moveToElement('@addToBag', 10, 10)
        .pause(4000)
        .click('@addToBag')
        .pause(4000)
        .click('@myBagDropDown')
        .waitForElementPresent('@dressSelect')
        .click('@removeBtn')
        .pause(1000)
}
var favoritesAdd = function(madeObjects) {
    madeObjects
        .moveToElement('@denimCate', 10, 10)
        .pause(500)
        .click('@denimSubcate')
        .pause(10000)
        .waitForElementPresent('@dressSelect')
        .moveToElement('@dressSelect')
        .pause(1000)
        .click('@favoritesBtn')
        .pause(10000)
        //.waitForElementPresent('@createAccount')
}
var madeObjects
module.exports = {
    before: browser => {
        madeObjects = browser.page.madewell()
        madeObjects.resizeWindow(1400,900)
        madeObjects.navigate()
        madeObjects.waitForElementPresent('body')
    },
    after: browser => {
        madeObjects.end()
    },
    'Verify Corrisponding Tab Test': browser => {
             madeFill(madeObjects)
    },
    'Add to Cart Test': browser => {
            addCartInfo(madeObjects)
            madeObjects.pause(10000)
    },
    'Favorites Add Test': browser => {
        favoritesAdd(madeObjects)
        madeObjects.pause(10000)
    }
}