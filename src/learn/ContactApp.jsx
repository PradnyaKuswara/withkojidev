import React,{useEffect} from "react";
import ContactList from "./ContactList";
import { getData } from './data';


function ContactApp(){
    const contacts = getData();

    return(
        <div data-aos="fade-left" className="contact-app max-w-screen-lg p-5 mx-auto">
            <h1 className="text-gray-500 text-3xl font-sans font-bold">Daftar Kontak</h1>
            <ContactList contacts={contacts}/>
        </div>
    );
}

export default ContactApp; 