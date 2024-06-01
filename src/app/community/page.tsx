import React from 'react'
import Image from "next/image";
import { Metadata } from 'next';
import styles from "./page.module.css";

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
        <button type='button' title='Join Our Community'>Join our Community</button>
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