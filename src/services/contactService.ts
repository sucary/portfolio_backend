import contactData from "../../data/contact";
import { Contact } from "../../types";



const contactArray: Contact[] = [...contactData];

console.log(contactArray);


const getContact = (): Contact[] => {
  return contactArray.map(({type, value, displayName, icon}) => ({
    type,  
    value,
    displayName,
    icon
  }));
};

/*
const getContact = (): Contact[] => {
  return [...contactArray];
};
*/

const addContact = (contact: Contact): Contact => {

  const newContact: Contact = {
    ...contact,
    
  };

  contactArray.push(newContact);
  console.log('Added ', newContact.type, ' to project list.');
  return newContact;
};

export default {
  getContact,
  addContact
};