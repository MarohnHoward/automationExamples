var webPage
var clickButtonByText = (page, text) => {
    page
        .api.useXpath()
    page
        .click(`//a[contains(text(), '${text}')]`)
        .api.useCss()
}
var nextButton = (page, text) => {
    page
        .api.useXpath()
    page
        .click(`//button[contains(text(), '${text}')]`)
        .api.useCss()
}
var styleButton = (page, text) => {
    page
        .api.useXpath()
    page
        .click(`//div[contains(text(), '${text}')]`)
        .api.useCss()
}
module.exports = {
    beforeEach: browser => {
        webPage = browser.page.kbbObjects()
        webPage.navigate()
        .scrollDownBy()
    },
    after: browser => {
        browser.end()
    },
    'Find the Value of a car': browser => {
        browser
        clickButtonByText(webPage, 'Car Values')
        webPage
            .api.pause(6000)
        webPage
            .click('@certPreOwned')
            .api.pause(2000)
        webPage
            .click('@carYear')
            .click('@carMake')
            .click('@carModel')
            .pause(2000)
        nextButton(webPage, 'Next')
        webPage
            .api.pause(2000)
        webPage
        styleButton(webPage, 'AVP Sport Utility 4D')
        webPage
            .api.pause(2000)
        webPage
            .click('@noOptions')
        webPage
            .scrollDownBy('500')
            .api.pause(2000)
        webPage
        .click(`//a[text()="${"Get a Used Car Price"}"]`)
            .click('@getPrice')
    }
}