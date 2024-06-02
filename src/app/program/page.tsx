import React from 'react'
import Image from 'next/image';
import { Metadata } from 'next';
import styles from "./page.module.css";

// Assets
import hero1 from "../../../public/objects/program-hero1.jpg";
import hero2 from "../../../public/objects/program-hero2.jpg";
import hero3 from "../../../public/objects/program-hero3.jpg";
import fellowship from "../../../public/objects/program-fellowship.jpg";
import enroll from "../../../public/objects/program-enroll.jpg";

// Components
import Faq from '@/components/Faq/Faq';

export const metadata: Metadata = {
  title: "Programs | 18startup",
  description: "At 18startup, we empower first-time founders with essential resources to fuel their startup journey.",
};

const Program = () => {
  return (
    <div className={styles.program__center}>
      
      {/* Hero */}

      <section className={styles.program__hero}>

        <MainTitle t1='Who is an' t2='18startup Entrepreneur?' align='center' type='head' />

        <div className={styles.hero__main}>
          <div className={styles.block}>
            <Image src={hero1} alt='Strong business acumen' width={320} height={180} placeholder='blur' />
            <p>Strong business acumen</p>
          </div>
          <div className={styles.block}>
            <Image src={hero2} alt='Execution abilities' width={320} height={180} placeholder='blur' />
            <p>Execution abilities</p>
          </div>
          <div className={styles.block}>
            <Image src={hero3} alt='Driving by innovation' width={320} height={180} placeholder='blur' />
            <div className={styles.block__more}>
              <p>Driven by innovation</p>
              <p>Highly networked individual</p>
            </div>
          </div>
        </div>

      </section>

      {/* Hero */}

      {/* Fellowship */}

      <section className={styles.program__fellowship}>
        <MainTitle t1='18startup' t2='Fellowship Program' type='subhead' align='center' />
        <div className={styles.fellowship__main}>
          <Image src={fellowship} width={400} height={224} placeholder='blur' alt='Fellowship Program'/>
          <p>Embark on a thrilling 14-week adventure! Gain essential skills, mentorship, and financial support for startup success. Founder-led, project-based learning with pathways for problem identification and a vibrant community will help you in your startup journey.</p>
        </div>
      </section>

      {/* Fellowship */}

      {/* Journey */}

      <section className={styles.program__journey}>
        <MainTitle t1='Journey with' t2='18startup' type='subhead' align='center' />
        <div className={styles.journey__main}>
          <div className={styles.journey}>
            <span>1</span>
            <p>Get into execution mode</p>
          </div>
          <div className={styles.journey}>
            <span>2</span>
            <p>Access to domain mentors/experts</p>
          </div>
          <div className={styles.journey}>
            <span>3</span>
            <p>Get possible market connections</p>
          </div>
          <div className={styles.journey}>
            <span>4</span>
            <p>Build prototype with technical credits</p>
          </div>
          <div className={styles.journey}>
            <span>5</span>
            <p>Access to investment/investors</p>
          </div>
        </div>
      </section>

      {/* Journey */}

      {/* Curriculum */}

      <section className={styles.program__curriculum}>
        <MainTitle t1="Here's your" t2='Curriculum' align='center' type='subhead' />
        <div className={styles.curriculum__main}>

          <div className={styles.curriculum}>
            <p>Bootcamp <span>4 Days</span></p>
            <Image src="/objects/curriculum/bootcamp.svg" alt='Bootcamp' width={280} height={280} />
          </div>
          <Image src="/objects/illustrations/arrow2.svg" alt='Next' width={144} height={144} />
          <div className={`${styles.flip} ${styles.curriculum}`}>
            <p>Problem validation <span>2<sup>nd</sup> to 5<sup>th</sup> week</span></p>
            <Image src="/objects/curriculum/problem.svg" alt='Problem Validation' width={280} height={280} />
          </div>
          <Image src="/objects/illustrations/arrow1.svg" alt='Next' width={144} height={144} />
          <div className={styles.curriculum}>
            <p>Solution & Product building <span>6<sup>th</sup> to 9<sup>th</sup> week</span></p>
            <Image src="/objects/curriculum/solution.svg" alt='Solution & Product building' width={280} height={280} />
          </div>
          <Image src="/objects/illustrations/arrow2.svg" alt='Next' width={144} height={144} />
          <div className={`${styles.flip} ${styles.curriculum}`}>
            <p>Traction <span>10<sup>th</sup> to 11<sup>th</sup> week</span></p>
            <Image src="/objects/curriculum/traction.svg" alt='Traction' width={280} height={280} />
          </div>
          <Image src="/objects/illustrations/arrow1.svg" alt='Next' width={144} height={144} />
          <div className={styles.curriculum}>
            <p>Pitch preparation <span>12<sup>th</sup> to 13<sup>th</sup> week</span></p>
            <Image src="/objects/curriculum/pitch.svg" alt='Pitch preparation' width={280} height={280} />
          </div>
          <Image src="/objects/illustrations/arrow2.svg" alt='Next' width={144} height={144} />
          <div className={`${styles.flip} ${styles.curriculum}`}>
            <p>Demo Day <span>14<sup>th</sup> week</span></p>
            <Image src="/objects/curriculum/demo.svg" alt='Demo Day' width={280} height={280} />
          </div>

        </div>
      </section>

      {/* Curriculum */}

      {/* Enrollment */}

      <section className={styles.program__enrollment}>
        <div className={styles.enrollment__details}>
          <MainTitle t1='Enroll Yourself' t2='Today' align='left' type='subhead' />
          <p>Embark on a 14-week inclusive journey where you will learn, build, and launch with the guidance of mentors and valuable market connections.</p>
          <a href='https://tally.so/r/w4xDQd' rel='noopener noreferrer' target='_blank' title='Apply Now'>Apply Now</a>
        </div>
        <Image src={enroll} width={400} height={224} placeholder='blur' alt='Enroll Now' />
      </section>

      {/* Enrollment */}

      {/* FAQs */}

      <section className={styles.program__faq}>
        <MainTitle t1='' t2='FAQs' align="center" type="subhead" />
        <Faq/>
      </section>

      {/* FAQs */}

    </div>
  )
}

export default Program;

const MainTitle = ({t1, t2, align="center", type="head"}: {t1: string, t2: string, align?: 'left' | 'center', type?: 'head' | 'subhead'}) => {
  return type === 'head' ? (
    <h1 className={styles.main__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h1>
  ) : (
    <h2 className={styles.sub__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h2>
  )
}