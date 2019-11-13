var myCommands = {
    nav: function (data) {
        this
            .api.useXpath()
        this
            .click(`//li[text()="${data.name}"]`)
            .api.useCss()
        return this
    },
    verify: function (data) {
        this 
            .verify.containsText('@name', data.name)
            .verify.valueContains('@phoneInput', data.phone)
            .verify.valueContains('@titleInput', data.title)
            return this
    }
}
module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html',
    commands: [myCommands],
    elements: {
        name: '#employeeTitle',
        nameInput: '[name="nameEntry"]',
        phoneInput: '[name="phoneEntry"]',
        titleInput: '[name="titleEntry"]',
        id: '#employeeID'
    }
}