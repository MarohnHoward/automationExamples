var myCommands = {
    navigateTo: function (data) {
        this
            .waitForElementPresent('@categoryBtn')
            .click('@categoryBtn')
            .pause(300)
            .waitForElementPresent(data)
            .click(data)
            .waitForElementPresent('@menuExit')
            .pause(300)
            .click('@menuExit')
            .verify.urlContains("http://localhost:3000/#/")
        return this
    },
    enter: function (data) {
        this
            .waitForElementPresent('@hrdInput')
            .setValue('@hrdInput', data.hrd)
            .waitForElementPresent('@mkeInput')
            .setValue('@mkeInput', data.mke)
            .waitForElementPresent('@oaiInput')
            .setValue('@oaiInput', data.oai)
            .waitForElementPresent('@nameInput')
            .setValue('@nameInput', data.name)
            .waitForElementPresent('@sexDropDown')
            .click('@sexDropDown', data.sex)
            .waitForElementPresent('@racDropDown')
            .click('@racDropDown', data.race)
            .waitForElementPresent('@hgtInput')
            .setValue('@hgtInput', data.hgt)
            .waitForElementPresent('@wgtInput')
            .setValue('@wgtInput', data.wgt)
            .waitForElementPresent('@haiInput')
            .setValue('@haiInput', data.hai)
            .waitForElementPresent('@offInput')
            .setValue('@offInput', data.off)
            .waitForElementPresent('@dowInput')
            .setValue('@dowInput', data.dow)
            .waitForElementPresent('@olnInput')
            .setValue('@olnInput', data.dl)
            .waitForElementPresent('@olsInput')
            .setValue('@olsInput', data.dls)
            .waitForElementPresent('@oldInput')
            .setValue('@oldInput', data.dle)
            .waitForElementPresent('@licInput')
            .setValue('@licInput', data.lp)
            .waitForElementPresent('@lisInput')
            .setValue('@lisInput', data.ls)
            .waitForElementPresent('@lidInput')
            .setValue('@lidInput', data.lie)
            .waitForElementPresent('@hrdInput')
            .setValue('@hrdInput', data.hrd)
            .waitForElementPresent('@mkeInput')
            .setValue('@mkeInput', data.mke)
            .waitForElementPresent('@oaiInput')
            .setValue('@oaiInput', data.oai)
            .waitForElementPresent('@nameInput')
            .setValue('@nameInput', data.name)
            .waitForElementPresent('@sexDropDown')
            .click('@sexDropDown', data.sex)
            .waitForElementPresent('@racDropDown')
            .click('@racDropDown', data.race)
            .waitForElementPresent('@hgtInput')
            .setValue('@hgtInput', data.hgt)
            .waitForElementPresent('@wgtInput')
            .setValue('@wgtInput', data.wgt)
            .waitForElementPresent('@haiInput')
            .setValue('@haiInput', data.hai)
            .waitForElementPresent('@offInput')
            .setValue('@offInput', data.off)
            .waitForElementPresent('@dowInput')
            .setValue('@dowInput', data.dow)
            .waitForElementPresent('@olnInput')
            .setValue('@olnInput', data.dl)
            .waitForElementPresent('@olsInput')
            .setValue('@olsInput', data.dls)
            .waitForElementPresent('@oldInput')
            .setValue('@oldInput', data.dle)
            .waitForElementPresent('@licInput')
            .setValue('@licInput', data.lp)
            .waitForElementPresent('@lisInput')
            .setValue('@lisInput', data.ls)
            .waitForElementPresent('@lidInput')
            .setValue('@lidInput', data.lie)
            .pause(300)
        return this
    },
    verifyEnter: function (data) {
        this
            .verify.valueContains('@hrdInput', data.hrd)
            .verify.valueContains('@mkeInput', data.mke)
            .verify.valueContains('@oaiInput', data.oai)
            .verify.valueContains('@nameInput', data.name)
            .verify.valueContains('@sexDropDown', "M")
            .verify.valueContains('@racDropDown', "W")
            .pause(1000)
            .verify.valueContains('@hgtInput', data.hgt)
            .verify.valueContains('@wgtInput', data.wgt)
            .verify.valueContains('@haiInput', data.hai)
            .verify.valueContains('@offInput', data.off)
            .verify.valueContains('@dowInput', "1998-04-30")
            .verify.valueContains('@olnInput', data.dl)
            .verify.valueContains('@olsInput', data.dls)
            .verify.valueContains('@oldInput', "2020-04-30")
            .verify.valueContains('@licInput', data.lp)
            .verify.valueContains('@lisInput', data.ls)
            .verify.valueContains('@lidInput', "2021-04-30")
        return this
    },
    modify: function (data) {
        this
            .waitForElementPresent('@widInput')
            .setValue('@widInput', data.wid)
            .waitForElementPresent('@hrdInput')
            .setValue('@hrdInput', data.hrd)
            .waitForElementPresent('@mkeInput')
            .setValue('@mkeInput', data.mke)
            .waitForElementPresent('@oaiInput')
            .setValue('@oaiInput', data.oai)
            .waitForElementPresent('@nameInput')
            .setValue('@nameInput', data.name)
            .waitForElementPresent('@sexDropDown')
            .click('@sexDropDown', data.sex)
            .waitForElementPresent('@racDropDown')
            .click('@racDropDown', data.race)
            .waitForElementPresent('@hgtInput')
            .setValue('@hgtInput', data.hgt)
            .waitForElementPresent('@wgtInput')
            .setValue('@wgtInput', data.wgt)
            .waitForElementPresent('@haiInput')
            .setValue('@haiInput', data.hai)
            .waitForElementPresent('@offInput')
            .setValue('@offInput', data.off)
            .waitForElementPresent('@dowInput')
            .setValue('@dowInput', data.dow)
            .waitForElementPresent('@olnInput')
            .setValue('@olnInput', data.dl)
            .waitForElementPresent('@olsInput')
            .setValue('@olsInput', data.dls)
            .waitForElementPresent('@oldInput')
            .setValue('@oldInput', data.dle)
            .waitForElementPresent('@licInput')
            .setValue('@licInput', data.lp)
            .waitForElementPresent('@lisInput')
            .setValue('@lisInput', data.ls)
            .waitForElementPresent('@lidInput')
            .setValue('@lidInput', data.lie)
        return this
    },
    verifyModify: function (data) {
        this
            .verify.valueContains('@widInput', data.wid)
            .verify.valueContains('@hrdInput', data.hrd)
            .verify.valueContains('@mkeInput', data.mke)
            .verify.valueContains('@oaiInput', data.oai)
            .verify.valueContains('@nameInput', data.name)
            .verify.valueContains('@sexDropDown', "M")
            .verify.valueContains('@racDropDown', "W")
            .verify.valueContains('@hgtInput', data.hgt)
            .verify.valueContains('@wgtInput', data.wgt)
            .verify.valueContains('@haiInput', data.hai)
            .verify.valueContains('@offInput', data.off)
            .verify.valueContains('@dowInput', "1998-04-30")
            .verify.valueContains('@olnInput', data.dl)
            .verify.valueContains('@olsInput', data.dls)
            .verify.valueContains('@oldInput', "2020-04-30")
            .verify.valueContains('@licInput', data.lp)
            .verify.valueContains('@lisInput', data.ls)
            .verify.valueContains('@lidInput', "2021-04-30")
        return this
    },
    cancel: function (data) {
        this
            .setValue('@widInput', data.wid)
            .setValue('@resInput', data.res)
            .setValue('@datInput', data.dat)
        return this
    },
    verifyCancel: function (data) {
        this
            .verify.valueContains('@widInput', data.wid)
            .verify.valueContains('@resInput', data.res)
            .verify.valueContains('@datInput', "1990-01-01")
        return this
    }
}
module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [myCommands],
    elements: {
        categoryBtn: '.bm-burger-button',
        enterOption: 'p[name="enterOption"]',
        menuExit: '.bm-cross-button',
        hrdInput: 'input[name="hdrInput"]',
        mkeInput: 'input[name="mkeInput"]',
        oaiInput: 'input[name="oriInput"]',
        nameInput: 'input[name="namInput"]',
        sexDropDown: 'select[name="sexInput"] option[value="M"]',
        racDropDown: 'select[name="racInput"] option[value="W"]',
        hgtInput: 'input[name="hgtInput"]',
        wgtInput: 'input[name="wgtInput"]',
        haiInput: 'input[name="haiInput"]',
        offInput: 'input[name="offInput"]',
        dowInput: 'input[name="dowInput"]',
        olnInput: 'input[name="olnInput"]',
        olsInput: 'input[name="olsInput"]',
        oldInput: 'input[name="oldInput"]',
        licInput: 'input[name="licInput"]',
        lisInput: 'input[name="lisInput"]',
        lidInput: 'input[name="lidInput"]',
        modifyOption: 'p[name="modifyOption"]',
        widInput: 'input[name="widInput"]',
        cancelOption: 'p[name="cancelOption"]',
        resInput: 'input[name="resInput"]',
        datInput: 'input[name="datInput"]',
    }
}