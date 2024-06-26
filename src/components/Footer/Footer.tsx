'use client';
import React from 'react';
import styles from "./Footer.module.css";

// Nextjs
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// React Icons
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {

  const pathname = usePathname();

  return (
    <footer className={styles.app__footer}>
      <div className={styles.footer__center}>

        <div className={styles.footer__left}>

          <div className={styles.footer__menu}>
            <h4>Menu</h4>
            <Link tabIndex={pathname === '/' ? -1 : 0} href="/" className={`${pathname === '/' ? styles.active__menu : ''}`} title='Home' aria-label='Home'>Home</Link>
            <Link tabIndex={pathname.includes('/blogs') ? -1 : 0} href="/blogs" className={`${pathname.includes('/blogs') ? styles.active__menu : ''}`} title='Blogs' aria-label="Blogs">Blogs</Link>
            <Link tabIndex={pathname === '/program' ? -1 : 0} href="/program" className={`${pathname === '/program' ? styles.active__menu : ''}`} title='Program' aria-label='Program'>Program</Link>
            <Link tabIndex={pathname === '/community' ? -1 : 0} href="/community" className={`${pathname === '/community' ? styles.active__menu : ''}`} title='Community' aria-label='Community'>Community</Link>
          </div>

          <div className={styles.footer__menu}>
            <h4>Others</h4>
            <Link href="/privacypolicy" title="Privacy Policy" aria-label="Privacy Policy">Privacy Policy</Link>
            <Link href="/terms" title='Terms & Conditions' aria-label='Terms & Conditions'>Terms & Conditions</Link>
          </div>

          <div className={styles.footer__menu}>
            <h4>Contact us</h4>
            <a href="mailto: info@18startup.com" title='Send Mail' aria-label='Send Mail'>info@18startup.com</a>
            <a href="tel: +918886956636" title="Call Us" aria-label="Call Us">+91 8886956636</a>
            <a href="tel: +917989002484" title="Call Us" aria-label="Call Us">+91 7989002484</a>
          </div>

        </div>

        <div className={styles.footer__right}>

          <div className={styles.social__media}>
            <a href="https://www.youtube.com/@18Startup_" rel='noopener noreferrer' title='Open Youtube Channel' aria-label="Open Youtube Channel"><FaYoutube fontSize={24}/></a>
            <a href="https://x.com/18startup_" rel='noopener noreferrer' title='Open X (Former Twitter)' aria-label="Open X (Former Twitter)"><FaXTwitter fontSize={24}/></a>
            <a href="https://www.linkedin.com/company/18startup/?viewAsMember=true" rel='noopener noreferrer' title='Open LinkedIn' aria-label="Open LinkedIn"><FaLinkedin fontSize={24}/></a>
            <a href="https://instagram.com/18startup" rel='noopener noreferrer' title='Open Instagram' aria-label="Open Instagram"><FaInstagram fontSize={24}/></a>
          </div>

          <p>Antah Prerna Education Private Limited, Office Address: 55, Raju Naidu Road, Tatabad, Coimbatore – 641012</p>

        </div>

      </div>

      <p>&copy; 2024 Antah Prerna Education Private Limited | All rights reserved</p>

    </footer>
  )
}

export default Footer;