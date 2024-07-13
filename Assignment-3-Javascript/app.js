// Complete Practice Exercise 6.1, 6.2 and 6.3 from JavaScript book 2.

// Practice exercise 6.

// See if you can write a function for yourself. We want to write a function that adds 
// two numbers.
// 1. Create a function that takes two parameters, adds the parameters together, 
// and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using 
// console.log.
// 4. Create a second call to the function using two more numbers as arguments 
// sent to the function


// function add(a, b) {
// return a + b;
// }
// const num1 = 20;
// const num2 = 70;
// console.log(add(num1, num2));
// console.log(add(20, 30));


// Practice exercise 6.2

// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array
// value.
// 5. Invoke the function.


// const Words = ["Beautiful", "Ugly", "Smart", "Clever", "Gorgeous","Friendly"];
// function myGame() {
// const question = prompt("What is your name?");
// const nameWords = Math.floor(Math.random() * Words.length);
// console.log(Words[nameWords] + " " + question );
// }
// myGame();


// Practice exercise 6.3

// Create a basic calculator that takes two numbers and one string value indicating
// an operation. If the operation equals add, the two numbers should be added. If the
// operation equals subtract, the two numbers should be subtracted from one another.
// If there is no option specified, the value of the option should be add.
// The result of this function needs to be logged. Test your function by invoking it
// with different operators and no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value
// within its parameters. Use those values with a condition to check if the
// operator is + or -, and add or subtract the values accordingly (remember if
// not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output
// the response to the console.
// 5. Update the operator value to be the other operator type—either plus or
// minus—and call to the function again with the new updated arguments.


// const num1 = 20;
// const num2 = 5;
// let operate = "-";

// function cal(a, b, op) {
//     if (op == "-") {
//         console.log(a - b);
//     } else {
//         console.log(a + b);
//     }
// }

// cal(num1, num2, operate);



// Practice exercise 4.5

// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string

// let prize = prompt("Pick a number 0-10");
// prize = Number(prize);
// let output = "My Prize: ";
// switch (prize){
// case 0:
// output += "Gold ";
// case 1:
// output += "Coin ";
// break;
// case 2:
// output += "Big ";
// case 3:
// output += "Box of ";
// case 4:
// output += "Silver ";
// case 5:
// output += "Bricks ";
// break;
// default:
// output += "Sorry Try Again";
// }
// console.log(output);



// Evaluating a number game, 

// let numGame = prompt("What number?");   
// numGame = Number(numGame);
// let num = 100;
// let message = "nothing";
// if (numGame > num) {
// message = numGame + " was greater than " + num;
// } else if (numGame === num) {
// message = numGame + " was equal to " + num;
// } else {
// message = numGame + " is less than " + num;
// }
// console.log(message);



// // Friend checker game, 

// let personName = prompt("Enter a name");
// let message;
// switch (personName) {
// case "Ali" :
// case "Ahmed" :
// case "Umar" :
// case "Rayyan" :
// message = personName + " is my friend";
// break;
// default :
// message = "I don't know " + personName;
// }
// console.log(message);



// Rock Paper Scissors game ).


// const myArray = ["Rock", "Paper", "Scissors"];
// let computer = Math.floor(Math.random() * 3);
// let player = Math.floor(Math.random() * 3);
// let message = "player " + myArray[player] + " vs computer " + myArray[computer] + " ";
// if (player === computer) {
// message += "it's a tie";
// } else if (player > computer) {
// if (computer == 0 && player == 2) {
// message += "Computer Wins";
// } else {
// message += "Player Wins";
// }
// } else {
// if (computer == 2 && player == 0) {
// message += "Player Wins";
// } else {
// message += "Computer Wins";
// }
// }
// console.log(message);



