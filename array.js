//In Javascript Arrays many methods are Iterators
//Javascript Functions are expressions

let fruit=['apple','orange','pineApple'];
fruit.forEach(value => console.log(value));

//Array.Every
//Array.some
//Array.filter
//returns the new array with true satisfied conditions of the array elemnts

//Array.map
//returns the copy of old array with modified values

//Array.reduce

//Array.flat()
//removes all the inner array elements
//return the array elemts When the no parameter is given only the elements at one inner level is broken

let multi = [1,2,3,[4,5,6,[7,8,9,[10]]]];
console.log(multi.flat());
console.log(multi.flat().flat());
console.log(multi.flat(Infinity);


//Array.map()
let fuckingarray = multi.map((x) => [x,x*2]);
console.log(fuckingarray) //[[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20]];

//Array.flatMap()
//returns all the array elements upon the function
//execution and flattens the array
array=[1,2,3,[4,5,6,[7,8,9]]]
newarray = array.flatMap(x => [x,x*2])  //1,2,2,4,3,6,84,8,5,10,6,12,7,14,8,16,9,18,10,20

//matching of multiple the Regular Expressions
// '/g' is used in regulAR expression to return all the multiple values
// string.match() returns the first occurence

 let string = 'Hello';
 let matches = string.match('l');
 console.log(matches[0])



 let strings = 'Hello';
 let matche = string.match(/l/);
 console.log(matche[0])



 let newstring = 'Hello';
 let matches = newstring.match(/l/g);
 console.log(matches) // ['l','l']

//  Capturing groups in regex is simply extracting a pattern from () parenthesis.
// You can capture groups with /regex/.exec(string) and with string.match
//prepend ?<name> inside brackets. The resulting object
// will have a new property groups.name attached
//(?<name>pattern)


