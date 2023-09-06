export const createListItem = (contactInfo) => {
    const listItem = document.createElement("li");
    listItem.className = "py-2 px-1  bg-slate-500  rounded-lg mt-2";
    const contactNameElement = document.createElement("h1");
    contactNameElement.className = "text-blue-700";
    contactNameElement.innerText = contactInfo.contactName;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-blue-700";
    contactPhoneNumberElement.innerText = contactInfo.phoneNumber.toString();
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);
    return listItem;
};
export const validateFialds = (...failds) => {
    return failds.every((fiald) => !!fiald.toString());
};
// <div class="text-blue-700 bg-slate-500">
//# sourceMappingURL=functions.js.map