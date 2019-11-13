
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    afterEach: browser => {
        browser.pause(3000)
    },
    'Employee Manager Test' : browser => {
        browser
            .click('[name="employee1"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input.materialInput[name="nameEntry"]','Invader Zim')
            .verify.valueContains('input.materialInput[name="nameEntry"]', "Invader Zim")
            .pause(300)
            .clearValue('input.materialInput[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '9097895678')
            .verify.valueContains('input[name="phoneEntry"]', "9097895678")
            .pause(300)
            .clearValue('input.materialInput[name="titleEntry"]')
            .setValue('input.materialInput[name="titleEntry"]', 'Stanley Steamer')
            .verify.valueContains('input.materialInput[name="titleEntry"]', "Stanley Steamer")
            .pause(300)
            .click('[name="save"]')
            .pause(3000)
        },
        'Another Test' : browser => {
            browser
            .click('[name="employee2"]')
            .clearValue('input.materialInput[name="nameEntry"]')
            .setValue('input.materialInput[name="nameEntry"', 'Rick Sanchez')
            .verify.valueContains('input.materialInput[name="nameEntry"]', "Rick Sanchez")
            .pause(300)
            .clearValue('input.materialInput[name="phoneEntry"]')
            .setValue('input.materialInput[name="phoneEntry"]', '18004206969')
            .verify.valueContains('input.materialInput[name="phoneEntry"]', "18004206969")
            .pause(300)
            .clearValue('input.materialInput[name="titleEntry"]')
            .setValue('input.materialInput[name="titleEntry"]', 'Jerry Hater')
            .verify.valueContains('input.materialInput[name="titleEntry"]', 'Jerry Hater')
            .pause(300)
            .click('[name="save"]')
            .pause(3000)
        }
}