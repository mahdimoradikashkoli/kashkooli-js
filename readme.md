#Here we want to add two numbers together and display them in the output

We define three definition variables that take input from the user
The following command:

let firstNumber= +prompt("enter your number")
let operator= prompt("enter operator")
let secoundNumber= +prompt("enter secound number")

Then, using the following command, we make a condition that if the operator is equal to addition, two numbers will be added together.
The following command:

if(operator === "+"){
    console.log(firstNumber + secoundNumber);
    document.write(firstNumber + secoundNumber)
}