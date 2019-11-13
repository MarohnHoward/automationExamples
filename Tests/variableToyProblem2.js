module.exports = {
    after: browser => {
        browser.end()
    },
    'Selectors': browser => {
        var searchBar = '.enter-location__input'
        var submitButton = '.enter-location__submit'
        var resultingCity = '.current-weather__weather'
        browser
            .url('https://devmountain-qa.github.io/weatherman/build/index.html')
            .setValue(searchBar, 'San Diego')
            .click(submitButton)
            .waitForElementVisible(resultingCity)
            .verify.containsText(resultingCity, 'San Diego')
    },
    'Test data': browser => {
        var newEmployeeName = 'input[name="nameEntry"]'
        var newEmployeePhone = 'input[name="phoneEntry"]'
        var newEmployeeTitle = 'input[name="titleEntry"]'
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            // Use the selector from 'var newEmployeeName' in the '.clearValue' below.
            // Do the same for the corrisponding '.clearValues' and '.except.element('').value.not.to.equal'.
            .clearValue('input[name="nameEntry"]')
            .setValue(newEmployeeName, 'John Doe')
            .clearValue('input[name="phoneEntry"]')
            .setValue(newEmployeePhone, '8088675309')
            .clearValue('input[name="titleEntry"]')
            .setValue(newEmployeeTitle, 'The Head Honcho')
            .click('#saveBtn')
            .click('li[name="employee1"]')
            .expect.element('input[name="nameEntry"]').value.not.to.equal(newEmployeeName)
        browser
            .click('li[name="employee11"]')
            .expect.element(newEmployeeName).value.to.equal('John Doe')
        browser.expect.element(newEmployeePhone).value.to.equal('8088675309')
        browser.expect.element(newEmployeeTitle).value.to.equal('The Head Honcho')
    }
}