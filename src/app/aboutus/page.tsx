import React from 'react'
import Image from 'next/image';
import { Metadata } from 'next';
import styles from "./page.module.css";

// Assets
import hero1 from "../../../public/objects/about-hero1.jpg";
import hero2 from "../../../public/objects/about-hero2.jpg";
import hero3 from "../../../public/objects/about-hero3.jpg";
import hero4 from "../../../public/objects/about-hero4.jpg";
import featured1 from "../../../public/objects/about-featured1.png";
import featured2 from "../../../public/objects/about-featured2.jpeg";
import vision1 from "../../../public/objects/about-vision1.jpg";
import vision2 from "../../../public/objects/about-vision2.jpg";
import member1 from "../../../public/objects/about-team1.jpeg";
import member2 from "../../../public/objects/about-team2.jpeg";
import member3 from "../../../public/objects/about-team3.jpeg";
import partner1 from "../../../public/objects/about-partner1.png";
import partner2 from "../../../public/objects/about-partner2.png";
import partner3 from "../../../public/objects/about-partner3.png";

// Components
import StatCounter from '@/components/StatCounter/StatCounter';

export const metadata: Metadata = {
  title: "About Us | 18startup",
  description: "At 18startup, we guide first-time entrepreneurs to move from the ideation stage to execution.",
};

const Aboutus = () => {
  return (
    <div className={styles.aboutus__center}>

      {/* Hero */}

      <section className={styles.aboutus__hero}>
        <div className={styles.hero__images}>
          <Image src={hero1} alt='Aboutus' width={148} height={296} placeholder='blur' />
          <Image src={hero2} alt='Aboutus' width={148} height={296} placeholder='blur' />
          <Image src={hero3} alt='Aboutus' width={148} height={296} placeholder='blur' />
          <Image src={hero4} alt='Aboutus' width={148} height={296} placeholder='blur' />
        </div>
        <MainTitle t1='Welcome to' t2='18startup!' />
        <p>We&#39;re more than just a program; we&#39;re here to help you dive into the exciting realm of startups. Picture yourself learning from the very founders who transformed their ideas into remarkable success stories.</p>
      </section>

      {/* Hero */}

      {/* Featured on */}

      <section className={styles.aboutus__fetaures}>
        <MainTitle t1='Featured' t2='On' type='subhead' />
        <div className={styles.feature__images}>
          <div className={styles.image}>
            <Image src={featured1} alt='Feature' width={180} height={90} />
          </div>
          <div className={styles.image}>
            <Image src={featured2} alt='Feature' width={180} height={90} />
          </div>
        </div>
      </section>

      {/* Featured on */}

      {/* Our Vision */}

      <section className={styles.aboutus__vision}>
        <div className={styles.vision__details}>
          <MainTitle t1='Our' t2='Vision' align='left' type='subhead' />
          <p>Picture yourself developing skills that not only distinguish you from others but also push you toward the achievements you&#39;ve always envisioned.</p>
          <p>We aim to improve your entrepreneurship abilities and set the stage for your success in the start-ups world. Your journey towards success starts with us.</p>
        </div>
        <div className={styles.vision__images}>
          <Image src={vision1} alt='Our Vision' width={148} height={296} placeholder='blur' />
          <Image src={vision2} alt='Our Vision' width={148} height={296} placeholder='blur' />
        </div>
      </section>

      {/* Our Vision */}

      {/* What & Why */}

      <section className={styles.aboutus__whatwhy}>
        <div className={styles.whatwhy__content}>
          <h1>Why</h1>
          <h2>18startup?</h2>
          <p>We don&#39;t just teach entrepreneurship skills, we&#39;re your partners in crafting a career of innovation and success.</p>
          <p>Through our founder-led approach to learning, hands-on mentorship, and a thriving community, we empower you to develop a wide range of skills that will make you shine in the world of entrepreneurship.</p>
        </div>
        <div className={styles.whatwhy__content}>
          <h1>What</h1>
          <h2>drives 18startup?</h2>
          <p>At 18startup, we believe entrepreneurship isn&#39;t just a venture, it&#39;s a career path waiting to be explored.</p>
          <p>Our goal is to enhance your entrepreneurial skills and open doors for a future where your abilities shape your career achievements.</p>
        </div>
      </section>

      {/* What & Why */}

      {/* Team */}

      <section className={styles.aboutus__team}>
        <MainTitle t1='Meet our' t2='Team' type='subhead' />
        <div className={styles.team__main}>
          <div className={styles.team}>
            <Image src={member1} alt='Prakash Balasubramanian' placeholder='blur' width={180} height={210} />
            <h3><a href="https://www.linkedin.com/in/prakash-balasubramanian-iyer/" target='_blank' rel='noopener noreferrer' title='Prakash Balasubramanian - LinkedIn Profile'>Prakash Balasubramanian</a></h3>
            <p>Co-founder & CEO</p>
          </div>
          <div className={styles.team}>
            <Image src={member2} alt='Surishetti Teja' placeholder='blur' width={180} height={210} />
            <h3><a href="https://www.linkedin.com/in/surishettiteja/" target='_blank' rel='noopener noreferrer' title='Surishetti Teja - LinkedIn Profile'>Surishetti Teja</a></h3>
            <p>Co-founder & COO</p>
          </div>
          <div className={styles.team}>
            <Image src={member3} alt='Mohammed Zeeshan' placeholder='blur' width={180} height={210} />
            <h3><a href="https://www.linkedin.com/in/zeethisside/" target='_blank' rel='noopener noreferrer' title='Mohammed Zeeshan - LinkedIn Profile'>Mohammed Zeeshan</a></h3>
            <p>Co-founder & CBO</p>
          </div>
        </div>
      </section>

      {/* Team */}

      {/* Stats */}

      <section className={styles.aboutus__stats}>
        <MainTitle t1='Impact' t2='so far' type='subhead' />
        <p>18startup is on a mission to impact 1,00,000 entrepreneurs. We are on a journey to empower college students and first-time startup founders to learn while building a startup.</p>
        <div className={styles.stats__main}>
          <div className={styles.stat}>
            <Image src="/assets/stats1.svg" alt='Community' width={48} height={48} />
            <h3><StatCounter stat={2000} />+</h3>
            <p>Community</p>
          </div>
          <div className={styles.stat}>
            <Image src="/assets/stats2.svg" alt='Impacted' width={48} height={48} />
            <h3><StatCounter stat={50} />+</h3>
            <p>Entrepreneurs Impacted</p>
          </div>
          <div className={styles.stat}>
            <Image src="/assets/stats3.svg" alt='Mentors' width={48} height={48} />
            <h3><StatCounter stat={30} />+</h3>
            <p>Mentors</p>
          </div>
          <div className={styles.stat}>
            <Image src="/assets/stats4.svg" alt='Startup events' width={48} height={48} />
            <h3><StatCounter stat={10} />+</h3>
            <p>Startup Events</p>
          </div>
        </div>
      </section>

      {/* Stats */}

      {/* Partners */}

      <section className={styles.aboutus__partners}>
        <MainTitle t1='18startup' t2='Partners' type='subhead' />
        <div className={styles.partner__images}>
          <div className={styles.image}>
            <Image src={partner1} alt='Partner' width={180} height={90} />
          </div>
          <div className={styles.image}>
            <Image src={partner2} alt='Partner' width={180} height={90} />
          </div>
          <div className={styles.image}>
            <Image src={partner3} alt='Partner' width={180} height={90} />
          </div>
        </div>
      </section>

      {/* Partners */}

    </div>
  )
}

export default Aboutus;

const MainTitle = ({t1, t2, align="center", type="head"}: {t1: string, t2: string, align?: 'left' | 'center', type?: 'head' | 'subhead'}) => {
  return type === 'head' ? (
    <h1 className={styles.main__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h1>
  ) : (
    <h2 className={styles.sub__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h2>
  )
}