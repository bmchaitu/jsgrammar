
//for ... of Loops
//for of Generators
function *generator()
{
	console.log('Hello World 1');
	yield 1;
	console.log('Hello World 2');
	yield 2;
	console.log('Hello World 3');
	yield 3;
};

for(let value of generator())
{
	console.log('Yield Value'+value);
}

//Second Version 
let gen=generator();
console.log('----Secon Version-----');
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


//for...of Strings
let name='Chaitu';
for(let Character of name)
console.log('Character:'+Character)


//for...of Arrays
let myarray=[1,2,3,4];
for(let element of myarray)
console.log('Element:'+element); 


//for..of Objects
//Objects need to be converted into Iterables
//to iterate thorough the loops
//Objects are not iterable but the enumerable
let myobject={a:1,b:2,c:3};
for(let propertvalues of Object.entries(myobject))
	console.log(propertvalues)

//for..of loop accepts only iterables
//for...in loop
//for..in loop iterrates only the enumerable object properties
//all the object properties are not the enumerable
//so all the object properties won't be iterated
let object ={
	a:1;
	b:2;
	c:3,
	method:()=> this.a+this.b
};


for(let prop in object)
console.log(prop,object[prop]);

//No prototype and constructor properties are iterated.


