import React from 'react';
import Navbar from '../components/navbar/navbar';
import emailjs from 'emailjs-com';
import "./scss/contact.css";

export default function Contact() {

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset()
    }

    return (
        <div>
            <Navbar />
            <a href="../src/assets/Curriculum_Vitae_Vincent_K_BIDI.pdf" target="_blank" >Curriculum Vitae</a>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Nom" />
                <input type="email" name="from_email" placeholder="Email" />
                <textarea name="message" placeholder="Message..." />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}