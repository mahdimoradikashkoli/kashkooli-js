const personList =[
    {
        name:"ali",
        id:"12",
        age:"30",
        mager:"biologist"
    },
    {
        name:"mammd",
        id:"13",
        age:"25",
        mager:"mechanic"
    },
    {
        name:"bagher",
        id:"14",
        age:"34",
        mager:"doctor"
    }
]
const craeteNewContact=function(){
    const newContact={
        name:"shakila",
        id:"15",
        age:"24",
        mager:"student" 
    }
   return {
    newContact
   } 
    
}
const addNewContact=function(){
    personList.push(craeteNewContact())
}
addNewContact()
console.log(personList)

const removeContact=function(index){
    personList.splice(index)
}
// removeContact(3)
function editPersonByIndex(array, index, newPerson) {
    if (index < array.length) {
        array[index] = newPerson;
    } else {
        console.log("شاخص وارد شده بیشتر از طول آرایه است.");
    }
}
editPersonByIndex(personList,0,{
    name:"mahdi",
    id:"23",
    age:"54",
    mager:"inginear"
})





