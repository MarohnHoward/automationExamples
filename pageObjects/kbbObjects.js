var kbbCommands = {
    scrollDownBy: function(pixels){
        this.api.execute(`window.scrollBy(0, ${pixels})`)
        return this
    }
}
module.exports = {
    url: 'https://www.kbb.com/?psid=19999&siomid=szqixn2b4_dc|298751470077|kelley%20blue%20book|e|26285ajd51861|pgrid|19636779173|ptaid|aud-351331324681:kwd-14390991|&segment=&enhancedvs=&ptaid=aud-351331324681:kwd-14390991&gclid=CjwKCAjw5_DsBRBPEiwAIEDRWwSakWBuGFNOp9iNAnApsFotoRXjSjOUBlhJktzEdkQOFQfKV8C0pBoCMnAQAvD_BwE&pgrid=19636779173&bodystyle=',
    commands: [kbbCommands],
    elements: {
        certPreOwned: '#cpoVehicle',
        used: '#usedVehicle',
        new: '#newVehicle',
        carYear: '#slp-dropdown-year option[value="2015"]',
        carMake: '#slp-dropdown-make option[value="13"]',
        carModel: '#slp-dropdown-model option[value="journey"]',
        carPrice: 'class="js-path-next button-one"',
        noOptions: '[class="js-path-next-default button-four"]',
        getPrice:{
            selector: '(//div[@class=“path-condition-footer text-center”])[2]',
            locateStrategy: 'xpath',
         },
    }
}