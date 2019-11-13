// Custom Commands!
// This is not an offical cheat sheet this is just me helping you out so be ready for a very casual feel, who knows that might be what you need
// I recommend you open a practice page in your VS code and follow along that way you get practice and you feel cool cause you're coding and thats something to be proud of 
// First you create an object
// Then you add commands
// The formatting for the custom command is a little different than your regular function
// Okay lets write one
// var empManager = function (employeeObject) {
//     employeeObject
//         .api.pause(500)
//     employeeObject
//         .someStuffToDo('@selectorThatsDoingTheStuff')
// }
// PRO NOTE I usually put a.waitForElementPresent()
// The selector I normally use is the seletor I'm clicking first
//     .waitForElementPresent is a good way to get a lot of asserstions in and it gives your system a chance to catch up to your dope code!
// Okay back to the command I'll start over so its easier to follow 
// var empManager = function (employeeObject) {
//     employeeObject
//         .api.pause(500)
//     employeeObject
//         .waitForElementPresent;) ('@selectorYouUseFirstAfterTheWait')
//             .clickOrSomethingLikeThat('@selectorYouWereWaitingFor')
//             .verify.yourClickDidSomething('@resultsSelectorCauseYourOnANewPagePresumably)
//                 .setSomethingCauseWhyNot('@selectorYou'reSetting)
//                 .verify.whateverYouWantToVerify('@selector', "The Words I'm Guessing You're Verifying")
//                 .action('@selector')
//                 .verify.yourActionDidSomething('@resultsSelector)
//  } * end o' command*
// Okay are we ready to call it ?
// Generally you write this part before you start writing your command above it in your test file
// YOUR CUSTOM COMMANDS GO ABOVE YOUR TEST IF YOU WANT A BREEZY TIME
// Don't read that like I'm yelling at you cause we both know that just means its important
// Okay the test set up and calling
// var employeeObject = {}
// module.exports = {
//     before: browser => {
//         employeeObject = browser.page.yourPageObjectsFile()
//         employeeObject.navigate()
//     },
//     after: browser => {
//         employeeObject.end()
//     },
//     'Name Of Your Test': browser => {
//         empManager(employeeObject)
//         employeeObject(1000)
//     },
// }
// Okay notice in the call underneath your test name I call what we named the command along with name of the var above module.exports
// Thats how nightwatch knows what commands to run
// I personally put the pause at the end because I like to see the page the test is ending on before it ends
// But the pause is optional the rest of it not so much
// There you have it how to write and call a custom command 
