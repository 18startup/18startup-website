'use client';
import React, { useState } from 'react';
import styles from "./Navbar.module.css";

// Nextjs
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// React Icons
import { FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

// Custom Hooks
import useClickoutside from '@/hooks/useClickoutside';

const Navbar = () => {

  const pathname = usePathname();
  const [smallMenuActive, setSmallMenuActive] = useState<boolean>(false);

  const navbarMenuRef = useClickoutside(setSmallMenuActive);

  return (
    <nav className={styles.app__navbar} ref={navbarMenuRef}>
      <div className={styles.navbar__center}>
        
        <div className={styles.navbar__left}>
          <Link href="/">
            <Image src="/assets/logo.svg" alt='18startup Logo' width={170} height={72} />
          </Link>
        </div>

        <div className={`${styles.navbar__menu} ${smallMenuActive ? styles.menu__active : ''}`}>
          <Link onClick={() => {setSmallMenuActive(false)}} tabIndex={pathname === '/' ? -1 : 0} href="/" className={`${pathname === '/' ? styles.active__menu : ''}`} title='Home' aria-label="Home">Home</Link>
          <Link onClick={() => {setSmallMenuActive(false)}} tabIndex={pathname === '/aboutus' ? -1 : 0} href="/aboutus" className={`${pathname === '/aboutus' ? styles.active__menu : ''}`} title='About us' aria-label="About us">About us</Link>
          <Link onClick={() => {setSmallMenuActive(false)}} tabIndex={pathname === '/community' ? -1 : 0} href="/community" className={`${pathname === '/community' ? styles.active__menu : ''}`} title='Community' aria-label="Community">Community</Link>
          <Link onClick={() => {setSmallMenuActive(false)}} tabIndex={pathname === '/program' ? -1 : 0} href="/program" className={`${pathname === '/program' ? styles.active__menu : ''}`} title='Program' aria-label="Program">Program</Link>
          <Link onClick={() => {setSmallMenuActive(false)}} tabIndex={pathname === '/contactus' ? -1 : 0} href="/contactus" className={`${pathname === '/contactus' ? styles.active__menu : ''}`} title='Contact us' aria-label="Contact us">Contact us</Link>
        </div>

        <div className={styles.navbar__right}>
          <a href="https://x.com/18startup_" rel='noopener noreferrer' title='Open X (Former Twitter)' aria-label="Open X (Former Twitter)"><FaXTwitter fontSize={24}/></a>
          <a href="https://www.linkedin.com/company/18startup/?viewAsMember=true" rel='noopener noreferrer' title='Open LinkedIn' aria-label="Open LinkedIn"><FaLinkedin fontSize={24}/></a>
          <a href="https://instagram.com/18startup" rel='noopener noreferrer' title='Open Instagram' aria-label="Open Instagram"><FaInstagram fontSize={24}/></a>
          <a href="https://api.whatsapp.com/send?phone=918639260889&text=Hello" rel='noopener noreferrer' title='Chat with us via Whatsapp' aria-label="Chat with us via Whatsapp"><FaWhatsapp fontSize={24}/></a>
        </div>

        <button type='button' className={`${styles.smallmenu__button} ${smallMenuActive ? styles.menu__active : ''}`} title='Menu Toggle Button' aria-label='Menu Toggle Button' onClick={() => {setSmallMenuActive(!smallMenuActive)}}>
          <div role='none'></div>
          <div role='none'></div>
          <div role='none'></div>
        </button>

      </div>
    </nav>
  )
}

export default Navbar;