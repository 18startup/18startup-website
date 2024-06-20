'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "./page.module.css";

// Assets
import hero1 from "../../../public/objects/about-hero1.jpg";
import hero2 from "../../../public/objects/about-hero2.jpg";
import hero3 from "../../../public/objects/about-hero3.jpg";
import hero4 from "../../../public/objects/about-hero4.jpg";

const Hero = () => {

    const [initialPic, setInitialPic] = useState(0);
    const [translate] = useState(-100);

    useEffect(() => {

        const interval = setInterval(() => {
            
            if (window.innerWidth <= 500) {
                setInitialPic((prev) => prev === 3 ? 0 : prev + 1);
            } else {
                setInitialPic(0)
            }

        }, 2000);

        return () => clearInterval(interval);

    }, []);

  return (
    <div className={styles.hero__images}>
        <Image src={hero1} style={{ transform: `translateX(${initialPic*translate}%)` }} alt='Aboutus' width={148} height={296} placeholder='blur' />
        <Image src={hero2} style={{ transform: `translateX(${initialPic*translate}%)` }} alt='Aboutus' width={148} height={296} placeholder='blur' />
        <Image src={hero3} style={{ transform: `translateX(${initialPic*translate}%)` }} alt='Aboutus' width={148} height={296} placeholder='blur' />
        <Image src={hero4} style={{ transform: `translateX(${initialPic*translate}%)` }} alt='Aboutus' width={148} height={296} placeholder='blur' />
    </div>
  )
}

export default Hero