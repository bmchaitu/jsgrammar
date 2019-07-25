//JavaScript creates a unique object for each HTML tag currently present in your
//*.html document


// Creating and appending another element to an existing element will dynamically
// insert it into the DOM and instantly display it on the screen as if it were directly
// typed into the HTML source code.


//They are automatically included to DOM (Document Object
//Model) in your application once the page is loaded into browser

//The method createElement natively exists on the document object.

//Creating HTML Elements Dynamically
 let element1 = document.createElement('div');  //<div>
 let element2 = document.createElement('img'); //<img>

 //At this point none of the created elements are attached to DOM yet.

 //Setting CSS Style

 var element4 = document.createElement('div');
 var element5 = document.createElement('p');
 element5.style.color: 'white';
 element5.style.background:'black';

 //Adding Elements To DOM with .appendChild method

 //elemnet.appendChild() method can be used to insert the elment to the DOM
 //the element should already exists as a child in the DOM Tree.
 document.body.appendChild(element5);
 document.body.appendChild(element4);
 

 //getElementById
 var elemntbyid = document.getElementById('id-1')


 //querySelector
 let selector = {'#eleid','.class1','class2'};
 var element6 = document.querySelector(selector);
 var new_element = document.createElement('div');
 element6.appendChild(new_element);

 //Writing A Function To Create Elements

 
