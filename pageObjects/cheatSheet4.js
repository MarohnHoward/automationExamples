// module.exports = {
//     beforeEach: browser => {
//         browser.url('https://google.com')
//             .waitForElementPresent('body')
//     },
//     after: browser => {
//         browser.end()
//     },
//     'Random For Loop Test': browser => {
//         // This loop is just to log text and count up in the console
//         //When you initialize i, and use it later in a callback, use "let, instead of var"
//         for (let i=1/*This is setting i to 1*/;i<9;i++/*If i is less than 9, it will add 1 to i*/ ) {
//             browser
//                 .useXpath()
//                 .getText('(//a)[1]', function (result) {
//                     //i will start at 1, and continuously loop through
//                     //and add 1 to the value of i, until it hits 9.
//                     console.log(result.value);
//                     //This colsole.log is just printing the value of i in the console.
//                     console.log(i);
//                 })
//         }
//     }
// }