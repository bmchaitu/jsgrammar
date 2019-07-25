// In many ways arrow functions behave in the same way as standard functions. You
// can assign them to a variable name:
var func1 = () => { };


// Arrow functions add one other unique feature. You can return values without
// using return keyword.
var func2 = (num) => { num**2 };


// Even after removing {} brackets and return keyword
//It works Good
var func3 = (value) => value+1;


//in JavaScript functions are expressions
// An expression is anything
// that returns a single value. Similar to how a math equation returns a value


//by removing parenthesis and the need to explicitly specify return keyword:
//Arrow functions help us expand on the idea by providing an even slimmer syntax
//of visible of expressions
var func4 = value => value*2;

//They turn functions into something that looks a lot like a math equation. (or a
// math function.) That’s why they are often used in Functional Programming style.

//If you have a background in math you will feel at home using them! :)

//Arrow Functions Anatomy
// a.  Arrow functions do not have array-like arguments object. They also cannot be
//     used as constructors
//b.   The this keyword points to the same value this points to in
//c.   The scope just outside of the arrow function.


//case1: without curly braces without return statement -->returns
var func5 = (value) => value+1;


//case2: with curly braces with return statement -->returns
var func6 = (value) => { return value*1;}


//case3: with curly braces without return statement ->doesn't return
var func7 = (value) => { "Hello World"; }

//Need to be careful while Using the Higher Order functions
setTimeout(func5,1000); //works
setTimeout(func6,1000); //works
setTimeout(func7,1000); //doesn't work

//sometimes true
var func8 = (value) => { return random() >= 0.5}


// Arrow functions do not bind this keyword. They look it up from whatever this
// equals in the outer scope, just like any other variable. Hence, you can say arrow
// functions have a ”transparent” scope.
var func9 = () => console.log(this);

//No this Keyword Binding
var afunc = (param1,param2) => console.log(arguments);

//No Constructors Usage
//-Constructor
// You can create and call a function
// but you can also use same function as an object constructor – together with new
// operator – to instantiate an object. The function itself becomes class definition.

//ConclusionFor this reason you would often hear it said that in JavaScript all functions are
//objects.
/***********Arrow functions cannot be used as object constructors.***************/

function classic(event){
	console.log('Classic function');
	console.log(this); //HTML Document
}

var arrowfunc = (event){
	console.log('Arrow Function');
	console.log(this);//window object
}

document.addEventListener('click',clasic);
document.addEventListener('click',arrowfunc);

//Arrow Functions Inherited the 'this' value
//It Inherited such value cause arrow functions take consideration of where the 







