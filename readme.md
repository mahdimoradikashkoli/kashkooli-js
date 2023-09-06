Here we created a separate function file to put the functions in this folder.
We use the following function to give us an error if no data is entered in the input:
const validateCreateContact = (contactInfo:contactInfoType) => {
    
    if (!validateFialds(contactInfo.contactName, contactInfo.phoneNumber + "")){
        alert("fill all fialds");
        throw Error("fill all fialds")  
    }
   
}

In this exercise, we focused on not giving an error to the user if a data is not entered in the input, and we also created a function file in the SAC to place the functions there and one function does not have multiple tasks.