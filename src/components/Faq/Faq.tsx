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
        ans: 'Yes.'
    },
    {
        id: 2,
        ques: 'What is the structure of the fellowship program?',
        ans: '1 Week bootcamp in Goa + 13 Weeks online program.'
    },
    {
        id: 3,
        ques: 'Can I join the fellowship, without coming to bootcamp?',
        ans: 'No.'
    },
    {
        id: 4,
        ques: 'What is the fees for the fellowship?',
        ans: 'Rs. 20,000/-'
    },
    {
        id: 5,
        ques: 'What is the fees for bootcamp?',
        ans: 'Rs. 8,000/-'
    },
    {
        id: 6,
        ques: 'How do I apply for financial aid?',
        ans: 'You will be automatically assessed for the aid if selected for the fellowship.'
    },
    {
        id: 7,
        ques: 'What is the nature of financial aid?',
        ans: 'Need-based scholarship & Payment in installments.'
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
                                <p>{item.ans}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Faq