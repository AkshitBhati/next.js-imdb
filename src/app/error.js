"use client"

import React, { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error)
    }, [error])
    
  return (

    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again later</h1>
        <button onClick={() => reset()} className='hover:text-amber-500'>Try again</button>      
    </div>
  )
}
