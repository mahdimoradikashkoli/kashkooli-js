We want to build a calculator that the user can use to perform multiplication, division, addition and subtraction operations

First, we define three variables that take input from the user.
The following command:

let firstNumber=+prompt("enter first number")
let operator=prompt("enter operator")
let secoundNumber=+prompt("enter secound number")

Then, using the following command, if the operator was equal to (+), add the last number and the first number together, and if it was equal to (-), subtract two numbers from each other.

if (operator === "+"){
    document.write(firstNumber + secoundNumber)
}else if (operator === "-"){
    document.write(firstNumber - secoundNumber)
}else if (operator === "*"){
    document.write(firstNumber * secoundNumber)
}else if (operator === "/"){
    document.write(firstNumber / secoundNumber)
}else{
    document.write("operator is wrong")
}