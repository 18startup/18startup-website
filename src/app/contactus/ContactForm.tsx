import React from 'react'
import styles from "./page.module.css";

const ContactForm = () => {
  return (
    <form className={styles.contact__form}>
        <h2>Fill the form <span>(* are required)</span></h2>
        <div className={styles.form__input}>
            <label htmlFor="name">Name<span>*</span></label>
            <input type="text" placeholder='Enter your name' title='Provide your name' required id='name' name='name' aria-required />
        </div>
        <div className={styles.form__input}>
            <label htmlFor="email">Email<span>*</span></label>
            <input type="email" placeholder='Enter your email' title='Provide your email address' required id='email' name='email' aria-required />
        </div>
        <div className={styles.form__input}>
            <label htmlFor="company">Company Name<span>*</span></label>
            <input type="text" placeholder='Enter company name' title='Provide your company name' required id='company' name='company' aria-required />
        </div>
        <div className={styles.form__input}>
            <label htmlFor="info">Extra Information</label>
            <textarea placeholder='Any extra information...' title='Write down any extra information...' id='info' name='info'></textarea>
        </div>
        <button type="submit" title='Submit Form'>Submit</button>
    </form>
  )
}

export default ContactForm