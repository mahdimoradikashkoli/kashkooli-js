import {contactsListType , contactprops, contactInfoType} from "./types";
import {
    contactsListDrawer,
    contactNameText ,
    phoneNumberInput ,
    simStorageInput ,
    deviceStorageInput ,
    contactsListElement ,
    contactsList
} from "./importer.js";
import {createListItem, validateFialds} from "./functions.js"
export const showContactListHandler =  () => {
    contactsListDrawer?.classList.remove("hidden");
    contactsListDrawer?.classList.add("")
}
export const clearDrawerButtonHandler = () => {
    contactsListDrawer?.classList.add("hidden");
}

const validateCreateContact = (contactInfo:contactInfoType) => {
    
    if (!validateFialds(contactInfo.contactName, contactInfo.phoneNumber + "")){
        alert("fill all fialds");
        throw Error("fill all fialds")  
    }
   
}

export const handelCraeteContact =  () => {
    validateCreateContact({
        contactName:contactNameText!.value,
        phoneNumber:phoneNumberInput!.value
    })
    const newContac:contactprops = {
        id:crypto.randomUUID(),
        contactname:contactNameText?.value?? "",
        phonenumber:phoneNumberInput?.value?? "",
        storage:deviceStorageInput?.checked ? "Device" : "Sim",
        avatar:null,
    };

    contactsList.push(newContac);
    const listItem = createListItem({
        contactName:newContac.contactname,
        phoneNumber:newContac.phonenumber,
    });

    contactsListElement?.appendChild(listItem);
 }



