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

