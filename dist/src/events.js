import { contactsListDrawer, contactNameText, phoneNumberInput, deviceStorageInput, contactsListElement, contactsList } from "./importer.js";
import { createListItem, validateFialds } from "./functions.js";
export const showContactListHandler = () => {
    contactsListDrawer?.classList.remove("hidden");
    contactsListDrawer?.classList.add("");
};
export const clearDrawerButtonHandler = () => {
    contactsListDrawer?.classList.add("hidden");
};
const validateCreateContact = (contactInfo) => {
    if (!validateFialds(contactInfo.contactName, contactInfo.phoneNumber + "")) {
        alert("fill all fialds");
        throw Error("fill all fialds");
    }
};
export const handelCraeteContact = () => {
    validateCreateContact({
        contactName: contactNameText.value,
        phoneNumber: phoneNumberInput.value
    });
    const newContac = {
        id: crypto.randomUUID(),
        contactname: contactNameText?.value ?? "",
        phonenumber: phoneNumberInput?.value ?? "",
        storage: deviceStorageInput?.checked ? "Device" : "Sim",
        avatar: null,
    };
    contactsList.push(newContac);
    const listItem = createListItem({
        contactName: newContac.contactname,
        phoneNumber: newContac.phonenumber,
    });
    contactsListElement?.appendChild(listItem);
};
//# sourceMappingURL=events.js.map