// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/ let age = 1;
if(age >12 && age < 55){
  console.log("You can participate in the marathon");
}else if(age > 4 && age < 7){
  console.log(" You are too young to participate in the marathon");
}else if( age < 4){
  console.log("Hey Kiddo! Can You Walk ? ");
}else if( age > 55){
  console.log("You are too old to participate in the marthon ");
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
    let c ="e";
  for(let i=1; i <=10; i++){
       c= c+"e" ;
  }
  console.log(`h${c}llo`);
    
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let n = +prompt("Enter the number");
    let sum = n*(n+1)/2;
     alert(sum);

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
 let number = +prompt("enter the number");
 switch(number){
       case 1:
       alert(`number is equal to 1`);
       break;
       case 2:
        alert(`number is equal to 2`);
        break;
        case 3:
       alert(`number is equal to 3`);
       break; 
       case 4:
        alert(`number is equal to 4`);
        break;
        case 5:
        alert(`number is equal to 5`);
         break;
         case 6:
         alert(`number is equal to 6`);
         break;
        case 7:
        alert(`number is equal to 7`);
        break;
        case 8:
        alert(`number is equal to 8`);
        break;
        case 9:
        alert(`number is equal to 9`);
        break;
        default:
          alert(`PLEASE TRY AGAIN`);
          break;
 }
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = 95;
 switch(marks){
         case marks > 90:
         alert(`Your Grade is AA`);
         break;
         case marks > 80 && marks <= 90:
         alert(`Your Grade is AB`);
         break;
         case marks > 70 && marks <= 80:
         alert(`Your Grade is AA`);
         break;
         case marks > 60 && marks <= 70:
         alert(`Your Grade is AA`);
         break;
         case marks > 50 && marks <= 60:
         alert(`Your Grade is AA`);
         break;
         case marks > 40 && marks <= 50:
         alert(`Your Grade is AA`);
         break;
         case marks > 30 && marks <= 40:
         alert(`Your Grade is AA`);
         break;
         case(marks <= 30): 
         alert(`Your Grade is AA`);
         break;
 }
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
  let int1 =+prompt("enter the first number");
  let int2 =+prompt("enter the second number");
  if(int1 > int2){
    alert(`${int1} is larger nuber`);
  }else{
    alert(`${int2} is larger number`)
  }
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
   let p1= +prompt(`enter the p1`);
   let p2= +prompt(`enter the p2`);
   let p3= +prompt(`enter the p3`);
   let product =p1*p2*p3;
   alert(product);
   

  

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let number1 = +prompt(`enter the first number`);
let number2 = +prompt(`enter the second number`);
let Add =number1 + number2;
let mul =number1 *number2 ;
if(number1 > number2){
     alert(`sub : ${number1 -number2}`);
     alert(`div : ${number1 / number2}`);
}else{
  alert(`sub : ${number2 -number1}`);
  alert(`div : ${number2 / number1} `);
}
alert(Add);
alert(mul);
