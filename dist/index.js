"use strict";
// type personlisttype ={
//     id:string;
//     name:string;
//     lastName:string;
//     age:number;
//     job:string;
//     maritalStatuse:boolean;
//     gender:"male" | "female";
//     height:number;
//     weight:number;
//     phoneNumber:string | number;
// }
// const personlist:personlisttype[]=[
//     {
//         id:"a-nfoir3tf7",
//         name:"yavar",
//         lastName:"abbasi",
//         age:21,
//         job:"web developer",
//         maritalStatuse:false,
//         gender:"male",
//         height:170,
//         weight:60,
//         phoneNumber:"09174530401"    
//     },
//     {
//         id:"a-htrikv53465",
//         name:"jafar",
//         lastName:"soltani",
//         age:65,
//         job:"web developer",
//         maritalStatuse:false,
//         gender:"male",
//         height:170,
//         weight:70,
//         phoneNumber:"09174530401"    
//     } ,
//     {
//         id:"a-nfoir3try8kt5",
//         name:"kazem",
//         lastName:"baghri",
//         age:21,
//         job:"web developer",
//         maritalStatuse:false,
//         gender:"male",
//         height:170,
//         weight:60,
//         phoneNumber:"09174530401"    
//     },
//     {
//         id:"a-tmyiu467",
//         name:"mahdi",
//         lastName:"moradi",
//         age:21,
//         job:"web developer",
//         maritalStatuse:false,
//         gender:"male",
//         height:170,
//         weight:60,
//         phoneNumber:"09174530401"    
//     },
// ]
// console.log(personlist)
// //create
// const newPerson = function(person:personlisttype){
//     personlist.push(person)
// }
// newPerson({
//     id:"a-eroiiiiii7th",
//     name:"mamad",
//     lastName:"karimi",
//     age:25,
//     job:"doctor",
//     maritalStatuse:true,
//     gender:"male",
//     height:180,
//     weight:85,
//     phoneNumber:"09178765432"    
// })
// console.log(personlist)
// //update
// const updetePerson = (id:personlisttype["id"] , person:personlisttype) => {
//     const personIndex:number = personlist.findIndex((item) => item.id === id) 
//     personlist[personIndex] = {...personlist[personIndex] , ...person};
// }
// updetePerson("a-htrikv53465", {age:30}
// )
// console.log(personlist)
// //delete
// const deletePerson = (id:personlisttype["id"] ) => {
//     const personIndex:number = personlist.findIndex((item) => item.id === id);
//     return personlist.splice(personIndex , 1)
// }
// deletePerson("a-htrikv53465")
// personlist.sort((a, b) => a.name.localeCompare(b.name));
// console.log(personlist)
const taskTitle = document.querySelector("#taskTitle");
const taskDeccription = document.querySelector("#taskdescription");
const button = document.querySelector("#showtask");
const listTask = document.querySelector("#listTask");
button?.addEventListener("click", () => {
    const showTask = document.createElement("div");
    const titr = document.createElement("h1");
    titr.innerText = taskTitle?.value ?? "";
    const titrDescription = document.createElement("h3");
    titrDescription.innerText = taskDeccription?.value ?? "";
    showTask.appendChild(titr);
    showTask.appendChild(titrDescription);
    listTask?.appendChild(showTask);
});
// document.write(taskTitle?.value ?? "");
// document.write(taskDeccription?.value ?? "");
//# sourceMappingURL=index.js.map