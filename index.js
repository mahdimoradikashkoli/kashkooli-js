let firstNumber=+prompt("enter first number")
let operator=prompt("enter operator")
let secoundNumber=+prompt("enter secound number")

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