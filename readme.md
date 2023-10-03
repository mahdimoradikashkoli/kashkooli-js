We want to write a multi-step calculator with functions

We use the following command to write it:

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