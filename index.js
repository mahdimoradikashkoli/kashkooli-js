// let firstNumber= +prompt("enter your number")
// let operator= prompt("enter operator")
// let secoundNumber= +prompt("enter secound number")
// if(operator === "+"){
//     console.log(firstNumber + secoundNumber);
//     document.write(firstNumber + secoundNumber)
// }

// function celsius_to_fahrenheit(c){
//     return 9/5 * c + 32
// }
// console.log(celsius_to_fahrenheit(5))

// function searchword(sentens,word){
//     if(sentens.includes(word)){
//         return "kalameh dar jomleh vjood darad"
//     }else{
//         return "kalameh dar jomleh vjood nadarad"
//     }
// }
// console.log(searchword("this is good" , "good"))
// console.log(searchword("this for you" , "formol"))

// class Product {
//     constructor(name, price, description) {
//         this.name = name;
//         this.price = price;
//         this.description = description;
//         this.isAddedToCart = false;
//     }

//     addToCart() {
//         if (this.isAddedToCart) {
//             throw new Error("این محصول قبلا به سبد خرید اضافه شده است.");
//         }
//         // کد اضافه کردن به سبد خرید
//         this.isAddedToCart = true;
//         console.log("محصول با موفقیت به سبد خرید اضافه شد.");
//     }

//     removeFromCart() {
//         if (!this.isAddedToCart) {
//             throw new Error("این محصول در سبد خرید وجود ندارد.");
//         }
//         // کد حذف از سبد خرید
//         this.isAddedToCart = false;
//         console.log("محصول با موفقیت از سبد خرید حذف شد.");
//     }
// }


const prsonList=[]
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const newContact=function(){
    const randomAdad=Math.floor(Math.random() * 1000);
    const randomDate="169177826" + randomIntFromInterval(1000, 900)
    const char=["m","h","d","a","i"]
    const randomWord=char[Math.floor(Math.random() * 4)]+char[Math.floor(Math.random() * 4)]+char[Math.floor(Math.random() * 4)]+char[Math.floor(Math.random() * 4)] +char[Math.floor(Math.random() * 4)]
    return{
        randomAdad,
        randomDate,
        randomWord
    }
    prsonList.push(newContact())
}

const addNewContact=function(){
    prsonList.push(newContact())
}
addNewContact()
console.log(prsonList)

