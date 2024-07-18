// components/SignaturePad.js
import React, { useRef, useEffect, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'

const SignaturePad = ({ penColor, penWidth }) => {
  const sigCanvas = useRef({})
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  useEffect(() => {
    updateCanvasDimensions()
    window.addEventListener('resize', updateCanvasDimensions)
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions)
    }
  }, [])

  const updateCanvasDimensions = () => {
    const width = window.innerWidth < 768 ? window.innerWidth * 0.9 : 1000
    const height = window.innerWidth < 768 ? 300 : 400
    setCanvasWidth(width)
    setCanvasHeight(height)
  }

  const clearCanvas = () => {
    sigCanvas.current.clear()
  }

  const downloadImage = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataURL
    link.download = 'signature.png'
    link.click()
  }

  return (
    <div className='mx-auto my-4 flex flex-col items-center justify-center'>
      <SignatureCanvas
        ref={sigCanvas}
        penColor={penColor}
        canvasProps={{
          width: canvasWidth,
          height: canvasHeight,
          className: 'border border-gray-300 mt-4'
        }}
        minWidth={penWidth}
      />
      <div className='mt-4 space-x-4'>
        <button
          className='rounded bg-red-500 px-4 py-2 font-bold text-white'
          onClick={clearCanvas}
        >
          Clear
        </button>
        <button
          className='rounded bg-green-500 px-4 py-2 font-bold text-white'
          onClick={downloadImage}
        >
          Download
        </button>
      </div>
    </div>
  )
}

export default SignaturePad
