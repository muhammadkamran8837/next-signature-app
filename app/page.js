import React from 'react'
import Home from '.'

export default function page() {
  return (
    <section className='py-5'>
      <div className='container flex h-full flex-col items-center justify-center'>
        <h1 className='pb-5 text-xl font-bold'>Signature application</h1>
        <Home />
      </div>
    </section>
  )
}
