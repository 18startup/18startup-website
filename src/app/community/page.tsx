import React from 'react'
import Image from "next/image";
import { Metadata } from 'next';
import styles from "./page.module.css";

// Assets
import enroll from "../../../public/objects/program-enroll.jpg";

// Types
import { CommunityEventType } from '@/types';
import { communityEvents } from '@/constants';

export const metadata: Metadata = {
  title: "Community | 18startup",
  description: "Join the 18startup community where founders, investors, mentors, and aspiring entrepreneurs collaborate.",
};

const Community = () => {
  return (
    <div className={`${styles.flex__col} ${styles.community__center}`}>

      {/* Hero */}

      <section className={`${styles.community__hero} ${styles.flex__col}`}>
        <MainTitle t1='18startup' t2='Community' align='center' />
        <p className={styles.para}>Join our vibrant community of over <span>2000 entrepreneurs</span> and connect with like-minded individuals.</p>
        <a href="https://tally.so/r/wvylB0" rel='noopener noreferrer' target='_blank' title='Join Our Community'>Join our Community</a>
      </section>

      {/* Hero */}

      {/* Events */}

      <section className={`${styles.flex__col} ${styles.community__events}`} id='events'>
        <MainTitle t1='Explore the' t2='Events' align='center' type='subhead' />
        <div className={`${styles.events__main} ${styles.flex__col}`}>
          {
            communityEvents.map((eventDetails) => {
              return (
                <EachEvent key={eventDetails.id} {...eventDetails} />
              )
            })
          }
        </div>
      </section>

      {/* Events */}

      {/* Enrollment */}

      <section className={styles.program__enrollment}>
        <div className={styles.enrollment__details}>
          <MainTitle t1='Never miss any' t2='opportunity' align='left' type='subhead' />
          <p>Join our vibrant WhatsApp community and connect with entrepreneurs across India. Also, all updates regarding the above-mentioned events will be shared within the WhatsApp community.</p>
          <a href='https://tally.so/r/wvylB0' rel='noopener noreferrer' target='_blank' title='Join our Community'>Join our Community</a>
        </div>
        <Image src={enroll} width={400} height={224} placeholder='blur' alt='Enroll Now' />
      </section>

      {/* Enrollment */}

    </div>
  )
}

export default Community;

const MainTitle = ({t1, t2, align="center", type="head"}: {t1: string, t2: string, align?: 'left' | 'center', type?: 'head' | 'subhead'}) => {
  return type === 'head' ? (
    <h1 className={styles.main__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h1>
  ) : (
    <h2 className={styles.sub__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h2>
  )
}

const EachEvent = ({img, title, description}: CommunityEventType) => {
  return (
    <article className={`${styles.flex__row} ${styles.each__event}`}>
      <Image src={img} alt={title} placeholder='blur' width={300} height={200}/>
      <div className={`${styles.flex__col} ${styles.event__details}`}>
        <h3>{title}</h3>
        <p className={styles.para}>{description}</p>
      </div>
    </article>
  )
}