import React from 'react';
import { Metadata } from 'next';
import styles from "./page.module.css";

// React Icons
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaLinkedin, FaMapLocationDot, FaXTwitter, FaYoutube } from "react-icons/fa6";

// Components
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | 18startup",
  description: "Reach out to 18startup for any support you need in your startup journey, We're always for help!",
};

const Contactus = () => {
  return (
    <div className={styles.contact__center}>

      {/* Head */}

      <section className={`${styles.contact__hero}`}>
        <h1>Contact <span>Us</span></h1>
        <p className={styles.para}>If you have any queries, feel free to <span>reach out to us.</span> We are always here to help you!</p>
      </section>

      {/* Head */}

      {/* Contact Details */}

      <div className={styles.contact__details}>

        <div className={styles.details__main}>
          <div className={styles.detail}>
            <IoCallSharp fontSize={28} color='var(--primaryOrange)' />
            <h4>Get in Touch</h4>
            <p>+91 8886956636</p>
            <p>+91 7989002484</p>
          </div>
          <div className={styles.detail}>
            <FaMapLocationDot fontSize={28} color='var(--primaryOrange)' />
            <h4>Address</h4>
            <p>House No. 643/a, Candolim, Goa, 403515</p>
          </div>
          <div className={styles.detail}>
            <BsGlobeCentralSouthAsia fontSize={28} color='var(--primaryOrange)' />
            <h4>Social Media</h4>
            <div className={styles.media}>
              <a href="https://www.youtube.com/@18Startup_" rel='noopener noreferrer' title='Open Youtube Channel' aria-label="Open Youtube Channel"><FaYoutube fontSize={24}/></a>
              <a href="https://x.com/18startup_" rel='noopener noreferrer' title='Open X (Former Twitter)' aria-label="Open X (Former Twitter)"><FaXTwitter fontSize={24}/></a>
              <a href="https://instagram.com/18startup" rel='noopener noreferrer' title='Open Instagram' aria-label="Open Instagram"><FaInstagram fontSize={24}/></a>
              <a href="https://www.linkedin.com/company/18startup/?viewAsMember=true" rel='noopener noreferrer' title='Open LinkedIn' aria-label="Open LinkedIn"><FaLinkedin fontSize={24}/></a>
            </div>
          </div>
        </div>

        <div className={styles.form__main}>
          <ContactForm/>
        </div>

      </div>

      {/* Contact Details */}

      {/* Location */}

      <div className={styles.contact__map}>
        <h2>Check us over the map</h2>
        <iframe title='18startup location over map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.3053517415815!2d73.7640399!3d15.521752999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1bd00000001%3A0x20682c83b478aee6!2sbuild3%20-%20a%20co-living%2C%20co-working%20and%20community%20space%20(cohub)%20for%20founders%20and%20creators!5e0!3m2!1sen!2sin!4v1717334645872!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Location */}

    </div>
  )
}

export default Contactus;