import {contactsListType , contactprops} from "./types";
import {
    contactsListDrawer,
    contactNameText ,
    phoneNumberInput ,
    simStorageInput ,
    deviceStorageInput ,
    contactsListElement ,
    contactsList
} from "./importer.js";

export const showContactListHandler =  () => {
    contactsListDrawer?.classList.remove("hidden");
    contactsListDrawer?.classList.add("")
}
export const clearDrawerButtonHandler = () => {
    contactsListDrawer?.classList.add("hidden");
}
export const handelCraeteContact =  () => {
    const newContac:contactprops = {
        id:crypto.randomUUID(),
        contactname:contactNameText?.value?? "",
        phonenumber:phoneNumberInput?.value?? "",
        storage:deviceStorageInput?.checked ? "Device" : "Sim",
        avatar:null,
    };
    contactsList.push(newContac);
    const listItem = document.createElement("li");
    listItem.className="py-2 px-1 bg-slate-300 rounded-lg mt-2";
    const contactNameElement = document.createElement("h1");
    contactNameElement.className="text-slate-700";
    contactNameElement.innerText=newContac.contactname;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className="text-slate-500";
    contactPhoneNumberElement.innerText = newContac.phonenumber.toString();

    listItem.appendChild(contactNameElement );
    listItem.appendChild(contactPhoneNumberElement);
    contactsListElement?.appendChild(listItem);
 }



