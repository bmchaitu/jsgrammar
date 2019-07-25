
//Higher-order functions may sound complicated but they are actually simpler than
// their regular (first-order) functions that you’ve already been dealing with all along
//--Conclusion to the Above: Every HO functions may have the standard functions

//In this section we will write the HO function-map Which takes the other function
//(First Order)as the input and calls the functions
//The first-order function that applies an action

// A higher-order function is a function that either takes a function as one of its
// parameters or returns a function (or both.)

fun_add = (element) => element+1;

 function mymap(array,parameter_function)
 {
 	let copy=[];
 	for(let index=0;index<array.length();index++)
 	{
 		let original = array[index];
 		let modified = array[index];
 		copy[index] = modified;
 	}

 	return copy;
 }

 originalarray = [1,2,3,4,5];
 modifiedarray = mymap(originalarray,fun_add);

 //Higher Order Function - mymap
 //standard Function - fun_add

//  The accumulator in Array.reduce serves
// a similar purpose as the copy array in this example.

// Often beginners use one method instead of another to accomplish relatively the
// same thing. While it ”still works,” this choice shouldn’t be taken lightly.

// Different high-order functions are designed to deal
// with problems specific to their implementation.