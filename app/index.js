'use client'
import React, { useState } from 'react'
import Toolbar from './components/Toolbar'
import SignaturePad from './components/SignaturePad'

const Home = () => {
  const [penColor, setPenColor] = useState('black')
  const [penWidth, setPenWidth] = useState(3)

  return (
    <div>
      <Toolbar setPenColor={setPenColor} setPenWidth={setPenWidth} />
      <SignaturePad penColor={penColor} penWidth={penWidth} />
    </div>
  )
}

export default Home
