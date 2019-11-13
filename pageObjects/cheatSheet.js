// FUNCTIONS
// Remember that you need Name Input and Actions
// function Name(Inputs) { Actions }
// or var name = fuction(inputs){ actions }
// or var name = (inputs) => { actions }
// Any of those are correct! I know its annoying but it really does just depend how you like your code!
// Alright, check it out I'm gonna write out an example using all of those verisons above 
// function addFive(number) { number + 5 }
// var addFive = function (number) { number + 5 }
// var addFive = (number) => { number + 5 }
// addFIve is the name of the function number is your input and { number + 5 } is your action
// My personal favorite is the second option but again its all about how you like your code
// Okay now we are going to call the function
// As you move on and make custom commands calling gets a little different but I will go over that
// All you need is the Name of your function and your agruments
// name(arguments)
// So for our addFive function we would call it like this
// addFive(5)
// Notice that we don't put addFive(number + 5) when we are calling that is because number is an input 5 is the action
// Here's another example both function and call using the addFive function 
// function addFive(number) { number + 5 }
// addFive("Albert")
// Since I'm calling the actions of "Albert" the result wil be Albert5 because we are adding 5 to our aurgument 
// ARRAYS
// Arrays are a collection of values that you can call using numbers
// For arrays you need a name and values
// var arrayName = [value1, value2]
// Here is an array example
// var pets = [
//     "dog",
//     "cat",
//     "goldfish"
// ]
// Our array name is pets and our values are dog, cat, and goldfish
// Okay lets call it
// To call it your array name and the "key" in this case dog's key is "0" cat is "1" goldfish is "2"
// For this example we are going to call each value individually
// arrayName[key]
// pets[0]
// pets[1]
// pets[2]
// Its as simple as that
// METHODS
// Methods are functions contained inside an object
// Don't panic these ones look scary but they are actually pretty chill 
// Here's the syntax
// var objName = {
//     funcName: function () { code }
// }
// Okay now the real thing
// var basicMath = {
//     add: function (num1, num2) {
//         return num1 + num2
//     },
// }
// We put return plus our arguments to specify that we are adding the two arguments together
// By the same token if we were to divid subtract or multiply
// Just for practice below are examples of divide subtract and multiply
// var basicMath = {
//     divide: function (num1, num2) {
//         return num1 / num2
//     },
// }
// var basicMath = {
//     subtract: function (num1, num2) {
//         return num1 - num2
//     },
// }
// var basicMath = {
//     multiply: function (num1, num2) {
//         return num1 * num2
//     },
// }
// Basically the return does what the function is named
// So lets talk calling
// Syntax for calling a method needs the object name the method name aNd arguments
// objName.methName(arguments)
// In the example I will call the add function from basicMath
// basicMath.add(2, 2)
// basicMath is the objName add is our funcName 2, 2 are our arguments



