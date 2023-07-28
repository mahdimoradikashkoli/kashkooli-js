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

function avarage(a, b, c, d, e) {
    const sum = a + b + c + d + e;
    const avg = sum / 5;
    if (avg < 12){
        console.log("mashrot")
    } 
    return avg;
 }
 console.log(avarage(10, 10, 8, 11, 12))