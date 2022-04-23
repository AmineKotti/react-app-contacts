import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
      
      const deleteContactsHandler = (id) => {
        props.getContactsId(id)
    }
    const renderContactList = props.contacts.map((contact) => {
      return (
        <div> <ContactCard contact = { contact } clichHandler = {deleteContactsHandler} /> </div>
       );
    }
    )

    return (
        <div className="ui celled list">{renderContactList}</div>
    );
}


export default ContactList;