
module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Search Bar Test': browser => {
        browser
        .setValue('input[name="q"]', ['Why is math hard?', browser.Keys.ENTER])
        .assert.urlContains('google')
        .verify.valueContains('input[name="q"]', ["Why is math hard?"])
        .pause(1000)
        .assert.urlContains('search?')
        .pause(300)
    },
    'Click Submit Test': browser => {
        browser
        .setValue('input[name="q"]', ['Rick Sanchez'])
        .verify.valueContains('input[name="q"]', ["Rick Sanchez"])
        .pause(1000)
        //.moveToElement('[value="Google Search"]')
        .click('[value="Google Search"]')
        .pause(300)
    },
    'Im Feeling Lucky Test': browser => {
        browser
        .setValue('input[name="q"]', ['Giant Rubber Duck'])
        .verify.valueContains('input[name="q"]', ["Giant Rubber Duck"])
        .pause(1000)
        .waitForElementPresent('.RNmpXc')
        .click('.RNmpXc')
        .pause(3000)
    }

}