// Page Objects Files!
// For this cheat sheet I am going to go over what a page objects file is for and how to write your selectors
// Page objects files house your link to your website you are testing and your selectors youre using in your testing
// For css they are written out like this in your file
// nameOfSelector: ('selector like .navbar ')
// For xpath its a little more complicated
// nameOfSelector: {
//     selector: ('selector'),
//         locateStrategy: 'xpath'
// },
// Yes you HAVE to do that for every xpath selector
// Okay lets write a page objects file
// module.exports = {
//     url: 'urlYourTesting.com', *if it is a real url a line will go underneath it 
//     elements: {

//         nameOfSelector: ('.cssSelectorIfYouGotOneButOrderOfCssAndXpathDoesn'tMatter),
//         nameOfSelector2: {
//             selector: ('x[@path="aBunchOfRandomDevStuff"]'),
//             locateStrategy: 'xpath'
//         },
//         soOn: ('.andSoForth')
//     }
// }
// That is a page objects file
// Pretty cool right 