import React, {useRef} from 'react';
import Layout from "../components/Layout.jsx";
import InfoBox from "../components/InfoBox.jsx";
import "../css/contact.css";
import emailjs from '@emailjs/browser';
const Contact = () =>{

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_myhouse1932', 'template_9szulgp', form.current, import.meta.env.VITE_APP_EMAILJS_CODE) //Pretty Much Works just needs a enviroment variahle set up for api publicKey.
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };






    return(
        <Layout>
            <div className="contact-form-wrap">
                <div className="contact-form-content">
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="firstName">First name:</label><br />
                        <input className="contact-textbox" type="text" id="first_name" name="first_name" placeholder="First Name" required /><br />

                        <label htmlFor="lname">Last name:</label><br />
                        <input className="contact-textbox" type="text" id="last_name" name="last_name" placeholder="Last Name" required /><br />

                        <label htmlFor="emailAddress">Email Address</label><br />
                        <input className="contact-textbox" type="text" id="sender_email" name="sender_email" placeholder="Email" required /><br />

                        <label htmlFor="emailMessage">Message</label><br />
                        <textarea className="email-message-textbox" name="sender_message" placeholder="Type your message here" required></textarea><br />

                        <button className="submit-button" type={"submit"} value={"Send"}>SUBMIT</button>
                    </form>
                </div>
            </div>

            <div className = "index-infoboxes-box">
                <InfoBox title="ADDRESS" lines={["119 S 7TH ST.", "COLUMBIA, MO 65201"]}/>
                <InfoBox title="HOURS" lines={["FRIDAY 5PM - 1AM", "SATURDAY 11AM - 1AM"]}/>
            </div>
        </Layout>

    );
}

export default Contact;