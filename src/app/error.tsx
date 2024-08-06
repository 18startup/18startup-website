'use client';
import React from 'react'
import Link from 'next/link';

const Error = ({ error, reset }: { error: Error & { digest?: string, message: string }, reset: () => void }) => {
  return (
    <div className="error__center">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" fill="#DD2F2F"></path></g></svg>
      <h1>Error occured!</h1>
      <p>{error.message ? error.message : 'Haha'}</p>
      <div className='error__options'>
        <Link href="/" title='Back to Home page' aria-label='Back to Home Page'>Back to Home</Link>
        <button type='button' title='Try again' onClick={() => {reset()}}>Try again</button>
      </div>
    </div>
  )
}

export default Error;