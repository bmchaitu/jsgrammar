//Standard function using keyword
//Arrow function
//Standard function can be called and used as constructors using the new keyword
function myfunction()
{
	return 'Hello World';
}
//--About 'this'
// Inside a function, the this keyword can point either to the context from which the
// function was called. But it can also point to an instance of the created object, if
// that function was used as an object constructor
//Even if the parameters are not sent to the function
//Every function can have the arguments object
function myfunction(para1,para2,para3,para4='hi')
{
	console.log('para1' + para1);
		console.log('para2' + para2);
		console.log('para3' + para3);
			console.log('para4' + para4);
}
//Anarrow function can be callwed but can't be used as the constructor
//Arrow functions don't have the arguments object which the standard function has
//Inside the scope of an arrow function this keyword
//points to whatever this equals to outside of its own scope.//


//Anonymus function
setTimeout(function()
{
	console.log('From Anonymus function')
},1000);
//Assigning Functions To Variables
// Anonymous functions can be assigned to a variable, making them named functions
// again. By doing this you can separate the function definition from its use in an
// event-based method:

//Note that different event functions
// generate their own arguments, regardless of whether your anonymous function
// defines parameters to catch them – they will be passed into the function:




//built-in directive typeof

//Later arrow functions were invented to deal with some of the side effects of this
// odd-ball use-case for this keyword. And that is our next subject!