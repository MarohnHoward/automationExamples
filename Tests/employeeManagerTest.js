module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.pause(3000)
    },
    'Editing existing fields': browser => {
        browser
        .click('[name="employee1"]')
        .clearValue('[name="nameEntry"]')
        .setValue('[name="nameEntry"]', 'Rick James')
        .verify.valueContains('[name="nameEntry"]', "Rick James")
        .clearValue('[name="phoneEntry"]')
        .setValue('[name="phoneEntry"]', '8098675309')
        .verify.valueContains('[name="phoneEntry"]', "8098675309")
        .clearValue('[name="titleEntry"]')
        .setValue('[name="titleEntry"]', 'Boss')
        .verify.valueContains('[name="titleEntry"]', "Boss")
        .click('[name="save"]')
        .verify.containsText('[name="employee1"]', "Rick James")
    },

}