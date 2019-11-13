var myData = [
    {
        name: 'Bernice Ortiz',
        phone: '4824931093',
        title: 'CEO'
    },
    {
        name: 'Marnie Barnett',
        phone: '3094812387',
        title: 'CTO'
    },
    {
        name: 'Phillip Weaver',
        phone: '7459831843',
        title: 'Manager'
    },
    {
        name: 'Teresa Osborne',
        phone: '3841238745',
        title: 'Director of Engineering'
    },
    {
        name: 'Dollie Berry',
        phone: '4873459812',
        title: 'Front-End Developer'
    },
    {
        name: 'Harriett Williamson',
        phone: '6571249801',
        title: 'Front-End Developer'
    },
    {
        name: 'Ruby Estrada',
        phone: '5740923478',
        title: 'Back-End Developer'
    },
    {
        name: 'Lou White',
        phone: '8727813498',
        title: 'Full-Stack Developer'
    },
    {
        name: 'Eve Sparks',
        phone: '8734567810',
        title: 'Product Manager'
    },
    {
        name: 'Lois Brewer',
        phone: '8749823456',
        title: 'Sales Manager'
    },
]
var employeeManagerPage = {}
module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.employeePage()
        employeeManagerPage
            .navigate()
    },
    after: browser => {
        employeeManagerPage
            .end()
    },
    'Employee Manager Input Test': browser => {
        myData.forEach(test=> {
            employeeManagerPage
                .nav(test)
                .verify(test)
        })
    }
}