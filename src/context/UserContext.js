import React, {useState, createContext} from 'react'
//import axios from 'axios'

const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({});
    const [items, setItemsGlobal] = useState([]);

    const updateContacts = (id) => {
        //const newContacts = contacts.filter(contact => contact)
    }

    const deleteContact = (id) => {
        //contacts.map(contact = contact.id !== id)
    }

    return (
        <UserContext.Provider value={{user, setUser, items, setItemsGlobal}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;