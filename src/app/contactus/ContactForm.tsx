'use client';
import React, { useEffect, useState } from 'react';
import styles from "./page.module.css";

// Actions
import saveContactFormResponse from '@/actions/contactform';

const ContactForm = () => {

    const [saveResponseLoad, setSaveResponseLoad] = useState(false);
    // const [submitMessage, setSubmitMessage] = useState('');

    // useEffect(() => {

    //     let interval: NodeJS.Timeout;

    //     if (submitMessage) {
    //         interval = setInterval(() => {
    //             setSubmitMessage('');
    //         }, 4000);
    //     }

    //     () => clearInterval(interval);

    // }, [submitMessage]);

  return (
    <form className={styles.contact__form} onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);

        setSaveResponseLoad(true);
        const response = await saveContactFormResponse(formData);
        // setSubmitMessage(response.message);
        alert(response.message);
        setSaveResponseLoad(false);
        form.reset();
    }}>
        <h2>Fill the form <span>(* are required)</span></h2>
        <div className={styles.form__input}>
            <label htmlFor="name">Name<span>*</span></label>
            <input type="text" placeholder='Enter your name' title='Provide your name' required id='name' name='Full_Name' aria-required />
        </div>
        <div className={styles.form__input}>
            <label htmlFor="email">Email<span>*</span></label>
            <input type="email" placeholder='Enter your email' title='Provide your email address' required id='email' name='Email' aria-required />
        </div>
        <div className={styles.form__input}>
            <label htmlFor="contact">Contact Number<span>*</span></label>
            <input type="text" placeholder='Enter contact number' pattern="^[0-9+\s]*$" title='Provide your contact number' required id='contact' name='Contact_Number' aria-required />
        </div>
        <div className={styles.form__input}>
            <label htmlFor="info">Extra Information</label>
            <textarea placeholder='Any extra information...' title='Write down any extra information...' id='info' name='Message'></textarea>
        </div>
        {/* {(submitMessage && !saveResponseLoad) && <p>{submitMessage}</p>} */}
        <button disabled={saveResponseLoad} aria-disabled={saveResponseLoad} type="submit" title={`${!saveResponseLoad ? 'Save Contact Response' : 'Submitting Response'}`}>{saveResponseLoad ? 'Saving Response...' : 'Submit'}</button>
    </form>
  )
}

export default ContactForm