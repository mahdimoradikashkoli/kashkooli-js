
const taskTitle = document.querySelector<HTMLInputElement>("#taskTitle");
const taskDeccription = document.querySelector<HTMLInputElement>("#taskdescription");
const button = document.querySelector<HTMLButtonElement>("#showtask");
const listTask = document.querySelector<HTMLButtonElement>("#listTask");

button?.addEventListener("click" , () =>{
    const showTask =document.createElement("div");
    const titr =document.createElement("h1");
    titr.innerText= taskTitle?.value ?? "";
    const titrDescription =document.createElement("h3");
    titrDescription.innerText=taskDeccription?.value ?? "";
    showTask.appendChild(titr);
    showTask.appendChild(titrDescription);
    listTask?.appendChild(showTask)
})

// document.write(taskTitle?.value ?? "");
// document.write(taskDeccription?.value ?? "");