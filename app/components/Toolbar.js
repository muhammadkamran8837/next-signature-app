// components/Toolbar.js
import React from 'react'

const Toolbar = ({ setPenColor, setPenWidth }) => {
  return (
    <div className='mb-4 flex flex-col items-center justify-center sm:flex-row'>
      <label htmlFor='penColor' className='mr-2'>
        Pen Color:
      </label>
      <input
        id='penColor'
        type='color'
        className='mb-2 mr-2 sm:mb-0'
        onChange={e => setPenColor(e.target.value)}
      />
      <label htmlFor='penWidth' className='mr-2'>
        Pen Width:
      </label>
      <input
        id='penWidth'
        type='number'
        className='rounded border border-gray-300 px-2 py-1'
        onChange={e => setPenWidth(e.target.value)}
      />
    </div>
  )
}

export default Toolbar
