'use client';
import React, { useState } from 'react';
import styles from "./Faq.module.css";

// React Icons
import { MdOutlineCancel } from "react-icons/md";

const faq: {
    id: number,
    ques: string,
    ans: string
}[] = [
    {
        id: 1,
        ques: "I'm not a student, can I apply?",
        ans: 'Yes, we believe that an entrepreneur should resemble a student who is continuously open to learning and consistently striving to improve. If you are a first-time startup founder or a student entrepreneur, you can apply for the fellowship.'
    },
    {
        id: 2,
        ques: 'What is the structure of the fellowship program?',
        ans: '1 Week bootcamp in Goa + 13 Weeks online program.'
    },
    {
        id: 3,
        ques: 'Can I join the fellowship, without coming to bootcamp?',
        ans: 'No. The bootcamp is themed around self discovery and founding team discovery. We believe that these are foundational skills that need personal interaction for effective grasping.'
    },
    {
        id: 4,
        ques: 'What is the fees for the fellowship?',
        ans: 'The Fellowship Course fee is Rs. 20,000/- exclusive of taxes.'
    },
    {
        id: 5,
        ques: 'What is the fees for bootcamp?',
        ans: 'The Bootcamp participation fee is currently Rs. 10,000/- exclusive of taxes. '
    },
    {
        id: 6,
        ques: 'How do I apply for financial aid?',
        ans: 'You will be automatically assessed for the aid if selected for the fellowship.'
    },
    {
        id: 7,
        ques: 'What is the nature of financial aid?',
        ans: 'We have 2 options for financial aid:<br><ol><li>Need-based scholarship for economically challenged students. This is provided by entrepreneurs who have instituted grants for helping promote entrepreneurship. If the candidate has merit and will not be able to join only because they cannot afford the fees, they shall be supported partially by such grants.</li><li>Staggered payment: The candidates have the option of paying the fees as below <ol><li>Rs. 10,000/- at the time of admission</li><li>Rs. 6,000/- at the end of bootcamp</li><li>Rs. 5,000/- at the end of 4th session</li></ol></li></ol>'
    },
]

const Faq = () => {

    const [selectedFaq, setSelectedFaq] = useState<number>(1);

    const updateSelection = (id: number) => {
        setSelectedFaq((current) => {
            if (current === id) {
                return id !== faq.length ? id + 1 : 1;
            } else {
                return id;
            }
        })
    }

    return (
        <div className={styles.faq__box}>
            {
                faq.map((item) => {
                    return (
                        <div className={`${styles.faq} ${selectedFaq === item.id ? styles.active : ''}`} role='button' key={item.id} >
                            
                            <div tabIndex={0} onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    updateSelection(item.id);
                                }
                            }} className={styles.ques} onClick={() => {
                                updateSelection(item.id);
                            }}>
                                <p>{item.ques}</p>
                                <span className={`${selectedFaq === item.id ? styles.active : ''}`}><MdOutlineCancel fontSize={17} /></span>
                            </div>
                            <div className={`${styles.ans} ${styles.shadow__center} ${selectedFaq === item.id ? styles.active : ''}`}>
                                {item.id !== 7 ? <p>{item.ans}</p> : <div dangerouslySetInnerHTML={{ __html: item.ans }}></div>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Faq