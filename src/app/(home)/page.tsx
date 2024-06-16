import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from "./page.module.css";

// Asstes
import hero1 from "../../../public/objects/home-hero1.jpg";
import hero2 from "../../../public/objects/home-hero2.jpg";
import logo from "../../../public/assets/favicon-icon.png";
import events from "../../../public/objects/home-events.jpg";
import bootcamp from "../../../public/objects/home-bootcamp.jpg";
import fellowship from "../../../public/objects/home-fellowship.png";

// Institutions-Assets
import IIT from "../../../public/objects/institutions/IIT.svg";
import BITS from "../../../public/objects/institutions/BITS.png";
import NIT from "../../../public/objects/institutions/NIT.png";
import ChristUniv from "../../../public/objects/institutions/ChristUniv.jpg";
import MallaReddy from "../../../public/objects/institutions/MallaReddy.png";
import JNTUH from "../../../public/objects/institutions/JNTUH.png";
import VIT from "../../../public/objects/institutions/VIT.png";
import SRM from "../../../public/objects/institutions/SRM.png";
import ISBR from "../../../public/objects/institutions/ISBR.jpg";
import VBIT from "../../../public/objects/institutions/VBIT.png";
import IARE from "../../../public/objects/institutions/IARE.jpg";
import MLR from "../../../public/objects/institutions/MLR.jpg";
import CMR from "../../../public/objects/institutions/CMR.jpg";
import Viacom from "../../../public/objects/institutions/Viacom.jpg";
import IIM from "../../../public/objects/institutions/IIMA.png";

// React Icons
import { IoFlag } from "react-icons/io5";
import { TbSettingsCog } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";
import { IoCheckmarkOutline } from "react-icons/io5";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";

// Components
import Voices from './Voices';
import Approach from './Approach';
import Faq from '@/components/Faq/Faq';
import StatCounter from '@/components/StatCounter/StatCounter';

export const metadata: Metadata = {
  title: "Home | 18startup",
  description: "Discover your cofounder and launch your startup in just 14 weeks with 18startup.",
};

const Home = () => {
  return (
    <div className={styles.home__center}>
      
       {/* Hero */}

      <section className={`${styles.home__hero} ${styles.flex__row}`}>
          <div className={styles.hero__details}>
            <MainTitle t1='Start building your' t2='startup while in college' align='left' type='head' />
            <p className={styles.para}>18startup equips aspiring entrepreneurs with the skills to transform their ideas into investable ventures, making them capable of success.</p>
            <a href="https://tally.so/r/w4xDQd" rel='noopener noreferrer' target='_blank' title='Apply Now'>Apply Now</a>
          </div>
      
          <div className={styles.diff__images}>
            <Image src={hero1} alt='18startup-Home' width={360} height={360} placeholder='blur' />
            <Image src={hero2} alt='18startup-Home' width={120} height={120} placeholder='blur' />
            <Image src={logo} alt='18startup' width={120} height={120}/>
          </div>

        </section>

      {/* Hero */}

      {/* Why 18startup? */}

      <section className={`${styles.home__why}`}>
        <div className={`${styles.flex__row} ${styles.why__main}`}>

          <div className={`${styles.flex__col} ${styles.why__details}`}>
            <MainTitle t1='Why' t2='18startup?' align='left' type='subhead' />
            <p className={styles.para}>With <span>founder-led learning, hands-on mentorship, and a vibrant community</span>, we transform your journey into a powerhouse of skills.</p>
            <Link href="/aboutus" title='Learn more'>Learn more</Link>
          </div>

          <iframe width="480" height="270" src="https://www.youtube.com/embed/vEfwA3qwcPA?si=wBOgUb2KjHYI4aaR" title="Why 18startup?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </div>
        <Image src="/assets/curve.svg" alt='Curve' width={700} height={120} />
      </section>

      {/* Why 18startup? */}

      {/* Before & After */}

      <section className={styles.home__way}>
        <div className={styles.way__box}>

          <div className={`${styles.way__before} ${styles.way}`}>
            <h3>Before</h3>
            <ul>
              <li><FaRegLightbulb fontSize={18} /><span>Stuck in the ideation Stage</span></li>
              <li><MdOutlineCancel fontSize={18} /><span>No Mentorship/Guidance</span></li>
              <li><MdOutlineCancel fontSize={18} /><span>No Market Connections</span></li>
              <li><MdOutlineCancel fontSize={18} /><span>No Prototype/MVP</span></li>
              <li><MdOutlineCancel fontSize={18} /><span>No Investor Connections</span></li>
            </ul>
            <Image src="/objects/illustrations/before.svg" alt='before' width={144} height={144} />
          </div>
          <div className={styles.way__stroke}></div>
          <div className={`${styles.way__before} ${styles.way}`}>
            <h3>After</h3>
            <ul>
              <li><TbSettingsCog fontSize={18} /><span>Get into execution mode</span></li>
              <li><IoFlag fontSize={18} /><span>Access to domain experts</span></li>
              <li><HiOutlineGlobeEuropeAfrica fontSize={18} /><span>Get possible market connections</span></li>
              <li><IoCheckmarkOutline fontSize={18} /><span>Build prototype with tech credits</span></li>
              <li><FaSackDollar fontSize={18} /><span>Access to investors/investments</span></li>
            </ul>
            <Image src="/objects/illustrations/after.svg" alt='after' width={144} height={240} />
          </div>

        </div>
      </section>

      {/* Before & After */}

      {/* Programs */}

      <section className={`${styles.flex__col} ${styles.home__programs}`}>
        <MainTitle t1='Explore our' t2='Programs' align='center' type='subhead' />
        <div className={`${styles.programs__main} ${styles.flex__col}`}>
          <div className={styles.program}>
            <div className={styles.program__details}>
              <h3>Startup Fellowship</h3>
              <p  className={styles.para}>Dive into a 14-week intensive startup program where you take your startup idea from the ideation stage to execution.</p>
              <Link href="/program" title='Read More'>Read More</Link>
            </div>
            <Image src={fellowship} alt='Startup Fellowship' width={420} height={236} placeholder='blur' />
          </div>
          <div className={styles.program}>
            <div className={styles.program__details}>
              <h3>Startup Bootcamp</h3>
              <p  className={styles.para}>Join us for the 4 days inclusive bootcamp in Goa, where you meet amazing startup folks like you.</p>
              <Link href="/program" title='Read More'>Read More</Link>
            </div>
            <Image src={bootcamp} alt='Startup Bootcamps' width={420} height={236} placeholder='blur' />
          </div>
          <div className={styles.program}>
            <div className={styles.program__details}>
              <h3>Startup Events</h3>
              <p  className={styles.para}>Dive into interactive startup events, where you get connected with like-minded people across India.</p>
              <Link href="/community" title='Read More'>Read More</Link>
            </div>
            <Image src={events} alt='Startup Events' width={420} height={236} placeholder='blur' />
          </div>
        </div>
      </section>

      {/* Programs */}

      {/* Entrepreneurs come from */}

      <section className={`${styles.flex__col} ${styles.home__from}`}>
        <MainTitle t1='Our community' t2='entrepreneurs come from' align='center' type='subhead' />
        <div className={`${styles.from__main}`}>
          <Image src={IIT} title='IIT' alt='IIT Kharagpur' width={90} height={90} />
          <Image src={BITS} title='BITS' alt='BITS Pilani Hyd' width={90} height={90} />
          <Image src={NIT} title='NIT' alt='NIT Tirchy' width={90} height={90} />
          <Image src={ChristUniv} title='Christ University' alt='ChristUniv' width={90} height={90} />
          <Image src={MallaReddy} title='Malla Reddy University' alt='MallaReddy' width={90} height={90} />
          <Image src={JNTUH} title='JNTUH' alt='JNTUH' width={90} height={90} />
          <Image src={VIT} title='VIT' alt='VIT' width={90} height={90} />
          <Image src={SRM} title='SRM' alt='SRM' width={90} height={90} />
          <Image src={ISBR} title='ISBR' alt='ISBR' width={90} height={90} />
          <Image src={VBIT} title='VBIT' alt='VBIT' width={90} height={90} />
          <Image src={IARE} title='IARE' alt='IARE' width={90} height={90} />
          <Image src={MLR} title='MLR' alt='MLR' width={90} height={90} />
          <Image src={CMR} title='CMR' alt='CMR' width={90} height={90} />
          <Image src={Viacom} title='Viacom' alt='Viacom' width={90} height={90} />
          <Image src={IIM} title='IIM' alt='IIM Banglore' width={90} height={90} />
          <Image src={IIT} title='IIT' alt='IIT Kharagpur' width={90} height={90} />
          <Image src={BITS} title='BITS' alt='BITS Pilani Hyd' width={90} height={90} />
          <Image src={NIT} title='NIT' alt='NIT Tirchy' width={90} height={90} />
          <Image src={ChristUniv} title='Christ University' alt='ChristUniv' width={90} height={90} />
          <Image src={MallaReddy} title='Malla Reddy University' alt='MallaReddy' width={90} height={90} />
          <Image src={JNTUH} title='JNTUH' alt='JNTUH' width={90} height={90} />
          <Image src={VIT} title='VIT' alt='VIT' width={90} height={90} />
          <Image src={SRM} title='SRM' alt='SRM' width={90} height={90} />
          <Image src={ISBR} title='ISBR' alt='ISBR' width={90} height={90} />
          <Image src={VBIT} title='VBIT' alt='VBIT' width={90} height={90} />
          <Image src={IARE} title='IARE' alt='IARE' width={90} height={90} />
          <Image src={MLR} title='MLR' alt='MLR' width={90} height={90} />
          <Image src={CMR} title='CMR' alt='CMR' width={90} height={90} />
          <Image src={Viacom} title='Viacom' alt='Viacom' width={90} height={90} />
          <Image src={IIM} title='IIM' alt='IIM Banglore' width={90} height={90} />
        </div>
      </section>

      {/* Entrepreneurs come from */}

      {/* Our Approach */}

      <section className={`${styles.home__approach}`}>
        <MainTitle t1='Our' t2='Approach' align='center' type='subhead' />
        <p className={styles.para}>Don&#39;t worry we are with you, we help you in turning passion into practical skills and fostering your evolution into confident startup builders.</p>
        <div className={`${styles.flex__row} ${styles.approach__main}`}>
          <Approach/>
        </div>
      </section>

      {/* Our Approach */}

      {/* Stats */}

      <section className={styles.home__stats}>
        <MainTitle t1='Impact' t2='so far' type='subhead' />
        <p className={styles.para}>18startup is on a mission to impact 1,00,000 entrepreneurs. We are on a journey to empower college students and first-time startup founders to learn while building a startup.</p>
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

      {/* Our community voices */}

      <section className={`${styles.home__voices}`}>
        <MainTitle t1='Our Community' t2='Voices' align='center' type='subhead' />
        <Voices/>
      </section>

      {/* Our community voices */}

      {/* FAQs */}

      <section className={styles.home__faq}>
        <MainTitle t1='' t2='FAQs' align="center" type="subhead" />
        <Faq/>
      </section>

      {/* FAQs */}

    </div>
  )
}

export default Home;

const MainTitle = ({t1, t2, align="center", type="head"}: {t1: string, t2: string, align?: 'left' | 'center', type?: 'head' | 'subhead'}) => {
  return type === 'head' ? (
    <h1 className={styles.main__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h1>
  ) : (
    <h2 className={styles.sub__title} style={{ textAlign: align }}>{t1} <span>{t2}</span></h2>
  )
}