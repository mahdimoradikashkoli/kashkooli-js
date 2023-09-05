import {contactsListType} from "./types"
export const contactNameText =
    document.querySelector<HTMLInputElement>("#contactName");
export const phoneNumberInput =
    document.querySelector<HTMLInputElement>("#phoneNumber");
export const simStorageInput = 
    document.querySelector<HTMLInputElement>("#simStorage");
export const deviceStorageInput = 
    document.querySelector<HTMLInputElement>("#deviceStorage");
export const submitButton = 
    document.querySelector<HTMLButtonElement>("#submitButton");
export const showContactList = 
    document.querySelector<HTMLButtonElement>("#showcontactslist");
export const contactsListDrawer = 
    document.querySelector<HTMLDivElement>("#contactsListDrawer");
export const contactsListElement = 
    document.querySelector<HTMLUListElement>("#contactsList");
export const clearDrawerButton = 
    document.querySelector<HTMLButtonElement>("#clearDrawer");

export const contactsList:contactsListType = [];