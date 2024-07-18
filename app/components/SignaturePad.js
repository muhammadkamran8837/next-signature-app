// components/SignaturePad.js
import React, { useRef } from 'react'
import SignatureCanvas from 'react-signature-canvas'

const SignaturePad = ({ penColor, penWidth }) => {
  const sigCanvas = useRef({})

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
          width: 1000,
          height: 400,
          className: 'border border-gray-300 mt-4'
        }}
        minWidth={penWidth}
      />
      <div className='mt-4 space-x-4'>
        <button
          className='rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
          onClick={clearCanvas}
        >
          Clear
        </button>
        <button
          className='rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
          onClick={downloadImage}
        >
          Download
        </button>
      </div>
    </div>
  )
}

export default SignaturePad
