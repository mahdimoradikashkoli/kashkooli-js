const personList =[
    {
        name:"ali",
    },
    {
        name:"mammd",
    },
    {
        name:"bagher",
    }
]
const craeteNewContact=function(){
    const newContact={
        name:"shakila", 
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
editPersonByIndex(personList,0,"mahdi")





