// This cute cheat sheet is for writing tests without pageOject files or tests where we stick the selector in the test.
// These cheat sheets are not affiliated with DevMountain.
// These cheat sheets are causal but go into good detail so just wait it out 
// Okay so tests they're fun we start off by writing module.exports and beforeEachs and afters. 
// So lets do that.
// module.exports = {
//  beforeEach: browser => {
//      browser.url('https:theurlyouaretesting')
//  },
//  after: browser => {
//      browser.pause(3000)
//  },
//  }
//  Okay so all that goes before your test.
//  What goes under after and beforeEach is optional the only thing that is not optional is the url that you are working on.
//  One thing to note is that you cannot have a beforeEach and an afterEach in the same test it doesn't work.
//  Don't do it.
//  Okay what comes next is the nameing and setting up of your test.
//  If you are using this cheatSheet do not just copy and paste or else all of your tests are going to be named 'Your Test Here'.
//  I will know and I will be slightly peeved and make you write a whole test in front of me.
//  Okay the actual test.
// 'Your Test Here': browser => {
//      browser
//          .actionForSeletor('SelectorForSaidAction')
//          .somethingElseForASelector('SelectorDoingSomethingElse')
//          .settingAValue('SelectorOfValueYou'reSetting', 'Whatever text you are setting')
//  *PRO NOTE* After I have set something I put a verification right after to verify that it actually set the value.
//  That looks like this.
//          .verify.valueContains('SelectorYouJustSet', "Whatever you set")
//  If we are setting we use single quotation for the characters you are setting.
//  Verification we use double quotations for what we set.
//  Okay so lets put it all together.
//  This is how you write a test.
// module.exports = {
//     beforeEach: browser => {
//         browser.url('http:whateverbrowseryoureworkingon')
//     },
//     after: browser => {
//         browser.pause(3000)
//     },
//     'Your Test Here': browser => {
//         browser
//             .actionForSelector('SelectorForAction')
//             .somethingElseForASelector('SelectorDoingSomethingElse')
//             .settingAValue('SelectorYouAreSetting', 'Whatever text you are setting')
//             .verify.valueContains('SelectorYouJustSet', "Whatever text you just set")
//     },
//     'A Different Test If You Need More Than One': browser => {
//         browser
//     }
// }
//  That is how you write a test without a pageObject file
//  Feel free to slack me @MarohnHoward