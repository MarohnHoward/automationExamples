var myData = {
    hdr: 'asdasdasda', // Required, 9-19 characters in length, any allowed
    mke: 'and', // Required, 2-4 alpha/special characters in length
    oai: '123456789', // Required, 9 alphanumeric characters in length
    name: 'Andrew Smith', // Required, 3-30 characters in length, any allowed
    sex: '@sexM', // Choices: @sexM, @sexF, @sexO, @sexU
    race: '@racW', // Choices: @racA, @racB, @racH, @racI, @racW, @racU
    hgt: '602', // Required, 3 characters in length, numeric only in FII format, where F is feet and I is inches
    wgt: '260', // Required, 1-3 characters in length, numeric only in lbs, leading zeros to be entered systematically as necessary to change the length to 3 characters in the assembled query.
    hair: 'Blonde', // Required, 3-10 characters in length, alpha only
    off: 'Andrew', // Required, 5-15 characters in length, any allowed
    dow: '04/30/1998', // Required, mm/dd/yyyy
    dl: '123456', // Optional, 1-20 characters in length, any characters allowed, if included requires DL State & DL Expiration Year
    dls: 'UT', // Optional, 2 characters in length, State Abbreviations only, if included requires Drivers License & DL Expiration Year
    dle: '04/30/2020', // Optional, mm/dd/yyyy
    lp: '123456', // Optional, 5-8 alphanumeric characters in length, if included requires License State & License Year
    ls: 'UT', // Optional, 2 characters in length, State Abbreviations only, if included requires License Plate and License Year
    lie: '04/30/2021', // Optional, mm/dd/yyyy
    wid: '8989898989',
    res: 'He Dead',
    dat: '01/01/1990'
}
var wantedQueriesPage = {}
module.exports = {
    beforeEach: browser => {
        wantedQueriesPage = browser.page.wantedQueries()
        wantedQueriesPage
            .navigate()
    },
    after: browser => {
        wantedQueriesPage
            .end()
    },
    'Enter Wanted Input Test': browser => {
        wantedQueriesPage
            .navigateTo('@enterOption')
            .enter(myData)
            .verifyEnter(myData)
    },
    'Modify Wanted Input Test': browser => {
        wantedQueriesPage
            .navigateTo('@modifyOption')
            .modify(myData)
            .verifyModify(myData)
    },
    'Cancel Wanted Input Test': browser => {
        wantedQueriesPage
            .navigateTo('@cancelOption')
            .cancel(myData)
            .verifyCancel(myData)
    }
}
