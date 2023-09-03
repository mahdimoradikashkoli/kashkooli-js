برای انجام این تمرین به دوتا اینپوت و یک دکمه نیاز داریم با  استفاده از دستور زیر  از جاوا اسکریپت   درخواست می کنیم تا اینپوت ها را به  ما بدهد تا بتوانیم مقدارش را با زدن بر روی دکمه شا تسک در صفحه نشان دهد 
const taskTitle = document.querySelector<HTMLInputElement>("#taskTitle");
const taskDeccription = document.querySelector<HTMLInputElement>("#taskdescription");
const button = document.querySelector<HTMLButtonElement>("#showtask");
const listTask = document.querySelector<HTMLButtonElement>("#listTask");

 دستور زیر بیانگر این است که وقتی بر روی دکمه کلیک شد مقدار ورودی ها را در صفحه نشان دهد
 button?.addEventListener("click" , () =>{
    const showTask =document.createElement("div");
    const titr =document.createElement("h1");
    titr.innerText=taskTitle?.value ?? "";
    const titrDescription =document.createElement("h3");
    titrDescription.innerText=taskDeccription?.value ?? "";
    showTask.appendChild(titr);
    showTask.appendChild(titrDescription);
    listTask?.appendChild(showTask)
})
