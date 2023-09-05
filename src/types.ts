export type contactprops = {
    id:string;
    contactname:string;
    phonenumber:string | number;
    storage:"Sim" | "Device";
    avatar?:string | null;
};

export type contactsListType = contactprops[];