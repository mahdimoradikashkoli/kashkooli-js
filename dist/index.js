import { contactsList } from "./src/importer.js";
import { submitButton, showContactList, clearDrawerButton } from "./src/importer.js";
import { showContactListHandler, clearDrawerButtonHandler, handelCraeteContact } from "./src/events.js";
showContactList?.addEventListener("click", showContactListHandler);
clearDrawerButton?.addEventListener("click", clearDrawerButtonHandler);
submitButton?.addEventListener("click", handelCraeteContact);
console.log(contactsList);
//# sourceMappingURL=index.js.map