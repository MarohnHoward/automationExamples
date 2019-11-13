
module.exports = {
    beforeEach: browser => {
        browser.url('https://cards-beta.devclock.com/login')
    },
    after: browser => {
        browser.pause(3000)
    },
    'Can Login With an Existing Account': browser => {
        browser
            .setValue('input[type="email"]', 'test@devmtnqa.com')
            .setValue('input[type="password"]', 'testpass')
            .useXpath()
            .click('//button[contains(@data-bind, "login")]')
            .expect.element('//div[contains(@data-bind, "logout")]').to.be.visible.before(5000)
    }
}