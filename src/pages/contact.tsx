import React from 'react';
import NavbarComponent from '../component/Navbar/Navbar';
import emailjs from 'emailjs-com';
import "./scss/contact.css";

export interface IContactPageProps { }

const ContactPage: React.FunctionComponent<IContactPageProps> = props => {

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
        <div className="body-contact">
            <NavbarComponent />
            <div className="container-contact">
                <h1>Contact</h1>
                <div className="test">
                </div>
                <div className="contact">
                    <div className="contact-data">
                        <p>vincent.k.97480@gmail.com</p>
                        <p>0755 64 32 25</p>
                        <p>Paris</p>
                        <p>27 ans</p>
                        <a href="https://www.linkedin.com/in/vincent-kbidi/" target="_blank" rel="noopener noreferrer">LinkedIn<img src="https://api.iconify.design/openmoji:linkedin.svg" alt="logo LinkedIn" /></a>
                        <button>
                            <a href="/Portfolio/Curriculum_Vitae_Vincent_K_BIDI.pdf" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--pepicons" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><g fill="currentColor"><path d="M17.333 5.947a1.749 1.749 0 0 0-.513-1.287l-3.48-3.48a1.79 1.79 0 0 0-1.247-.513H4C3.267.667 2.667 1.26 2.667 2v16c0 .733.6 1.333 1.333 1.333h12c.733 0 1.333-.6 1.333-1.333V5.947Zm-5-2.94l2.66 2.66h-2.66v-2.66Zm3 14.326H4.667V2.667h5.666v3.24c0 .966.787 1.76 1.76 1.76h3.24v9.666Z"></path><path d="M8.002 6.8a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133Z"></path><path fillRule="evenodd" d="M10.133 9.111c0-1.134-.954-1.955-2.133-1.955c-1.178 0-2.133.82-2.133 1.955v.533a.356.356 0 0 0 .356.356h3.555a.356.356 0 0 0 .355-.356v-.533ZM6.167 12.5a.5.5 0 0 1 .5-.5h6.666a.5.5 0 0 1 0 1H6.667a.5.5 0 0 1-.5-.5Zm0 2.333a.5.5 0 0 1 .5-.5h6.666a.5.5 0 1 1 0 1H6.667a.5.5 0 0 1-.5-.5Z" clipRule="evenodd"></path></g></svg>CV
                            </a>
                        </button>
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Nom" />
                        <input type="email" name="from_email" placeholder="Email" />
                        <textarea name="message" placeholder="Message..." />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;