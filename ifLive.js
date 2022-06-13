// console.log("Hello, world!");

/* uses the Math object property of random, which returns a random number
between 0-1.
*/
// let randomNumber = Math.random(); 

// console.log(randomNumber);

//This block of code is running a conditional checking if the random number less than 0.5, if so it will print msg.
// if (randomNumber < 0.5) {
//     console.log("Hello");
//     console.log(randomNumber);
// }

//This block of code, check to see if random number is greater then OR equal 0,5, if so it will print the msg.
// if (randomNumber >= 0.5) {
//     console.log("Random Number is greater than 0.5");
//     console.log(randomNumber);
// }

// let dayOfWeek = 'Saturday';

/* 
This block of code is checking if dayOfWeek is equal to the value on the right
right side of condition statement. And if dayOfWeek is equal, it will
print the corresponding msg to the console. 
*/

// if (dayOfWeek === 'Monday') {
//     console.log('This is Monday');
// }else if(dayOfWeek === 'Thursday') {
//     console.log('This is Thursday');
// }else if(dayOfWeek === 'Saturday') {
//     console.log('Hooray today is Saturday!');
// }else {
//     console.log('What day is it?');
// }

/*this block of code is promting the user to enter a age
then it is checking that age with the series of if statements
below, if age matches certain group, it will print out the 
coressponding msg to the console.
*/

let age = prompt("What is your age?");

if (age <= 15) {
    console.log("You're to young to drive!");
} else if (age >= 16) {
    console.log("You are old enough to drive!");
} else {
    console.log("Ride the bus thaannn!");
}
