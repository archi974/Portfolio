import React from 'react';
import Navbar from '../components/navbar/navbar';
import "./scss/contact.css";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <form name="contact" className="contact_form">
                <h1>Me contacter :</h1>
                
                <input type="text" placeholder="Nom Prénom"/>

                <input type="text" placeholder="Nom de l'entreprise"/>
                
                <input type="text" placeholder="Sujet" />

                <input type="text" placeholder="Email"/>

                <textarea rows={4} cols={50} maxLength={200} placeholder="Votre offre"></textarea>
            </form>
        </div>
    )
}