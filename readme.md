First, I defined a variable that is an array to list people in, then I defined its type above.
I added a new person using the following function.
const newPerson = function(person:personlisttype){
    personlist.push(person)
}
I updated Lecite using the following function.
const updetePerson = (id:personlisttype["id"] , person:personlisttype) => {
    const personIndex:number = personlist.findIndex((item) => item.id === id) 
    personlist[personIndex] = {...personlist[personIndex] , ...person};
}
I used the following function to delete
//delete
const deletePerson = (id:personlisttype["id"] ) => {
    const personIndex:number = personlist.findIndex((item) => item.id === id);
    return personlist.splice(personIndex , 1)
}
I used the following command to sort by name
personlist.sort((a, b) => a.name.localeCompare(b.name));