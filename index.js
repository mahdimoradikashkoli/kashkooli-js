function sum(firstNumber , operator , secoundNumber) {
    if (!isNaN(firstNumber + secoundNumber)){
        switch (operator) {
            case '+' :
                return (firstNumber + secoundNumber)
            case '-' :
                return (firstNumber - secoundNumber)
            case '*' :
                return (firstNumber * secoundNumber)
            case '/' :
                return (firstNumber / secoundNumber)
        }
    }
    return "someting wrong"
}
const firstNumber = +prompt("enter firstnumber")
const operator = prompt("enter operator")
const secoundNumber = +prompt("enter secoundNumber")
document.write (sum(firstNumber , operator , secoundNumber) )
function convertToupperCase(sentence) {
    return sentence.toUpperCase()
}

console.log(convertToupperCase("hello world"))
