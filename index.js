function avarage(a, b, c, d, e) {
    const sum = a + b + c + d + e;
    const avg = sum / 5;
    if (avg < 12){
        console.log("mashrot")
    } 
    return avg;
 }
 let firstNumber =+prompt("enter firstNumber")
 let secoundNumber =+prompt("enter secoundNumber")
 let thirdNumber =+prompt("enter thirdNumber")
 let fourthNumber=+prompt("enter fourthNumber")
 let fifthNumber =+prompt("enter fifthNumber")
 console.log(avarage(firstNumber, secoundNumber, thirdNumber, fourthNumber, fifthNumber))