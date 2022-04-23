import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from 'uuidv4';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contact}])
  }


  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
    return contact.id !== id
  })  
   setContacts(newContactsList)
}


  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("test",getContacts)
   setContacts(getContacts)
  },[])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])

  return (
   <div className='ui container'>
     <Header />
     <AddContact  addContactHandler = {addContactHandler}/>
     <ContactList  contacts = {contacts} getContactsId = {removeContactHandler} />
   </div>
  );
}

export default App;
