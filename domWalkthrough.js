// console.dir(document);

// console.log(document.domain); //<--Shows IP Address
// console.log(document.URL);

// // 
// console.log(document.title);
// // 
// console.log(document.doctype);
// // 
// console.log(document.head);
// // 
// console.log(document.body);
// // 
// console.log(document.all);
// // 
// console.log(document.all[03]);
// // 
// document.all[00].textContent = 'We Just Changed The Header';


// Document Object Model can scan the tree for elements

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images); 

// ////////////////////////////////////////////////////////////////////////////

// Access the DOM with GETELEMENTBYID 

// console.log(document.getElementById('header-title')); 

// //  Creation of an object variable using  the document fncunction 

// let headerTitle = document.getElementById('header-title');

// headerTitle.textContent = "Im changing the Header";

// headerTitle.textContent = "I am changing it again.";


// headerTitle.style.color = 'hotpink';

//////////////////////////////////////////////////////////


let items = document.getElementsByClassName("list-group-item");

console.log(items);
console.log(items[0]);

items[0].textContent = "Hello, World!";

items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'white';
items[0].textContent = "Skee Wee";
items[0].style.color = "green";

items[1].textContent = "Bye";

items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'red';
items[1].textContent = "Skee Wee";
items[1].style.color = "green";

items[2].textContent = "Hi";

items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'blue';
items[2].textContent = "Skee Wee";
items[2].style.color = "green";