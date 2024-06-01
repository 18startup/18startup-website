'use client';
import React, { useState } from 'react'
import styles from "./page.module.css"

const voices: {
    id: number,
    name: string,
    description: string,
    youtube: {
        title: string,
        video: string
    }
}[] = [
    {
        id: 1,
        name: 'Vamika Singhal',
        description: "Let's here what Vamika wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/cOGqsSnd4O0?si=ptMpnUDJI6o_shmn'
        }
    },
    {
        id: 2,
        name: 'Aditya Varma',
        description: "Let's here what Aditya wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/jHX2QOZUJYU?si=lyOpntR6fUsKZ-Wr'
        }
    },
    {
        id: 3,
        name: 'Brinda Jallapuram',
        description: "Let's here what Brinda wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/i56ohtLz4X0?si=oLpMsA5kssYfDrUh'
        }
    },
    {
        id: 4,
        name: 'Jugal Hemnani',
        description: "Let's here what Jugal wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/L3UQM8b7NSY?si=hUqcslJOqyTiuU0w'
        }
    },
    {
        id: 5,
        name: 'Anvitha Sri',
        description: "Let's here what Anvitha wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/4U9Vup_XOtM?si=MYk7_ZP7qo0xxwh9'
        }
    },
    {
        id: 6,
        name: 'Pratyush Gaikwad',
        description: "Let's here what Pratyush wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/_ZrRbfDavhw?si=wdzzRJ3mv2IkFJYA'
        }
    },
    {
        id: 7,
        name: 'Satya Pavan',
        description: "Let's here what Satya wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/4IW75b6QIpE?si=rEhjzqHqFtDMxche'
        }
    },
    {
        id: 8,
        name: 'Karthik Nagpuri',
        description: "Let's here what Karthik wants to say about 18startup.",
        youtube: {
            title: '18startup',
            video: 'https://www.youtube.com/embed/qiGxEQLLRbU?si=X4NpQXNB-36xeGHT'
        }
    },
]

const Voices = () => {

    const [currentVoiceSlice, setCurrentVoiceSlice] = useState(0);
    const [totalSlices] = useState(voices.length);

    return (
        <>
            <div className={styles.more__voices}>

                {
                    voices.map((voice) => {
                        return (
                            <div key={voice.id} style={{ transform: `translateX(-${100 * currentVoiceSlice}%)` }} className={`${styles.flex__row} ${styles.voices__main}`}>
                                <div className={`${styles.flex__col} ${styles.voices__details}`}>
                                    <h3>Meet {voice.name}</h3>
                                    <p className={styles.para}>{voice.description}</p>
                                    <a href="https://tally.so/r/wvylB0" target='_blank' rel='noopener noreferrer' title='Join our Community'>Join our Community</a>
                                </div>
                                <iframe width="480" height="270" src={voice.youtube.video} title={voice.youtube.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        )
                    })
                }

            </div>

            <div className={styles.voices__toggle}>
                {
                    Array.from({length: totalSlices}).map((_, index) => {
                        return (
                            <button type='button' className={`${currentVoiceSlice === index ? styles.active__slice : ''}`} onClick={() => {setCurrentVoiceSlice(index)}} title={`Toggle Slide - ${index + 1}`} key={index}>{index + 1}</button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Voices;