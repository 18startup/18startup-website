'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "./page.module.css";

// Asstes
import founderled from "../../../public/objects/home-foundedled.jpg"
import vibrantcommunity from "../../../public/objects/home-vibrantcomm.jpg";
import experientiallearning from "../../../public/objects/home-expirentiallearning.jpg"

const Approach = () => {

    const [currentApproach, setCurrentApproach] = useState(1);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentApproach((current) => current === 3 ? 1 : current + 1);
        }, 8000);

        return () => clearInterval(interval);

    }, [currentApproach]);
    
    return (
        <>
            <div className={`${styles.flex__col} ${styles.approach__details}`}>
                <h3 className={`${currentApproach === 1 ? styles.approach__active : ''}`} role='button' onClick={() => {setCurrentApproach(1)}}>Experiential Learning</h3>
                {currentApproach === 1 && <p className={styles.para}>We believe in execution, which leads to the success of your <span>startup</span></p>}
                <h3 className={`${currentApproach === 2 ? styles.approach__active : ''}`} role='button' onClick={() => {setCurrentApproach(2)}}>Founder-Led Learing</h3>
                {currentApproach === 2 && <p className={styles.para}>We believe in execution, which leads to the success of your <span>startup</span></p>}
                <h3 className={`${currentApproach === 3 ? styles.approach__active : ''}`} role='button' onClick={() => {setCurrentApproach(3)}}>Vibrant Community</h3>
                {currentApproach === 3 && <p className={styles.para}>We believe in execution, which leads to the success of your <span>startup</span></p>}
            </div>

            <Image src={currentApproach === 1 ? experientiallearning : currentApproach === 2 ? founderled : vibrantcommunity} width={480} height={270} placeholder='blur' alt='Approach' />
        </>
    )
}

export default Approach