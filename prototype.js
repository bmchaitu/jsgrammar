// When a function is defined two things happen: the function object is created,
// because functions are objects. Then, a completely separate prototype object is
// created.
// The prototype property of the defined function will point to it.

//*****NOTE_POINT******
//Note : function Object and prototype Objects are created at the function definition time.

//prototype is an Object
//Constructor of prototype refers to the function Object.
/*******************************/

//PROTOTYPE ON OBJECT LITERAL
var literal :{
	 prop : 123,
	 meeth : function {}
};

// Internally it is wired into prototype as an Object of type Object.
//Even though it's not created using the new Operator.

//Whenever a new Object is defined,a secondary Object serve as its 
//prototype is crreated.

