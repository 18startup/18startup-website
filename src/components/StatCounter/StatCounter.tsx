'use client';
import React from 'react';

// Countup
import CountUp from 'react-countup';

const StatCounter = ({stat}: {stat: number}) => {
  return (
    <CountUp start={0} end={stat} enableScrollSpy={true} onCompleteCallback={() => {}} />
  )
}

export default StatCounter;