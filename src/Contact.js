import { useState } from "react";
import { ReactDOM } from "react";

export function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for showing your interest in me! \nI'll be in touch shortly.`)
      }

    return(
        <div>
        <form action="submission.html" onSubmit={handleSubmit}>
            <h1>Interested in hiring me?</h1>
            <h3>Please fill out the following form</h3>
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" required /><br/>
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" required /><br/>
            <label htmlFor="company">Company Name:</label>
            <input type="text" id="company" name="company" required /><br/>
            <label htmlFor="e-mail">E-mail:</label>
            <input type="text" id="e-mail" name="e-mail" required /><br/>
            <label htmlFor="phone-number">Phone Number:</label>
            <input type="text" id="phone-number" name="phone-number" required /><br/>
            <span>What is your preferred contact method? </span>
            <input type="checkbox" id="e-mail" name="contact-method" value="e-mail" />
            <label htmlFor="e-mail">E-mail</label>
            <input type="checkbox" id="phone-number" name="contact-method" value="phone-number" />
            <label htmlFor="phone-number">Phone Number</label><br/>
            <label htmlFor="message">Message (optional):</label><br/>
            <textarea name="message" id="message" cols="30" rows="5"></textarea><br/>
            <span>Are you human?</span>
            <input type="radio" name="captcha" id="yes" value="yes" required />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="captcha" id="no" value="no" />
            <label htmlFor="no">No</label><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}