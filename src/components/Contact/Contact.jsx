import React from 'react'
import lines from '../../assets/lines.svg'
const Contact = () => {

    const btn = {
        background: '#03DAC5',
        borderRadius: '40px',
        padding: '10px',
        color: '#fff',
    }
  return (
    <div className='relative h-[300px] text-xs md:text-tiny lg:text-base'>
        <p className='subtitle flex justify-center'>Finden Sie Ihre Wunschkandidaten mit wenigen Klicks noch heute.</p>
        <button style={btn} className="block m-auto mt-8">Kandidaten finden</button>
        <div className='flex flex-1 rounded-2xl  flex-shrink shadow-md sm:flex-row'>
          {/* <img className='object-contain overflow-hidden rounded-tl-2xl rounded-bl-2xl' src={lines} alt="lines" /> */}
        </div>
       
    </div>
  )
}

export default Contact