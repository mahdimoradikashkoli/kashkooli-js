"use strict";
const personlist = [
    {
        id: "a-nfoir3tf7",
        name: "yavar",
        lastName: "abbasi",
        age: 21,
        job: "web developer",
        maritalStatuse: false,
        gender: "male",
        height: 170,
        weight: 60,
        phoneNumber: "09174530401"
    },
    {
        id: "a-htrikv53465",
        name: "jafar",
        lastName: "soltani",
        age: 65,
        job: "web developer",
        maritalStatuse: false,
        gender: "male",
        height: 170,
        weight: 70,
        phoneNumber: "09174530401"
    },
    {
        id: "a-nfoir3try8kt5",
        name: "kazem",
        lastName: "baghri",
        age: 21,
        job: "web developer",
        maritalStatuse: false,
        gender: "male",
        height: 170,
        weight: 60,
        phoneNumber: "09174530401"
    },
    {
        id: "a-tmyiu467",
        name: "mahdi",
        lastName: "moradi",
        age: 21,
        job: "web developer",
        maritalStatuse: false,
        gender: "male",
        height: 170,
        weight: 60,
        phoneNumber: "09174530401"
    },
];
console.log(personlist);
//create
const newPerson = function (person) {
    personlist.push(person);
};
newPerson({
    id: "a-eroiiiiii7th",
    name: "mamad",
    lastName: "karimi",
    age: 25,
    job: "doctor",
    maritalStatuse: true,
    gender: "male",
    height: 180,
    weight: 85,
    phoneNumber: "09178765432"
});
console.log(personlist);
//update
const updetePerson = (id, person) => {
    const personIndex = personlist.findIndex((item) => item.id === id);
    personlist[personIndex] = Object.assign(Object.assign({}, personlist[personIndex]), person);
};
updetePerson("a-htrikv53465", { age: 30 });
console.log(personlist);
//delete
const deletePerson = (id) => {
    const personIndex = personlist.findIndex((item) => item.id === id);
    return personlist.splice(personIndex, 1);
};
deletePerson("a-htrikv53465");
personlist.sort((a, b) => a.name.localeCompare(b.name));
console.log(personlist);
//# sourceMappingURL=index.js.map