import React from 'react'
import lines from '../assets/lines.svg'


const Contact = () => {
  return (
    <div className='relative h-[337px] flex justify-end items-end'>
      <img className='w-[150px] md:w-[250px]' src={lines} alt="lines" />
      <div className='absolute w-full h-full flex flex-col items-center justify-center '>
        <p className='subtitle'>Finden Sie Ihre Wunschkandidaten mit wenigen Klicks noch heute.</p>
        <button className="p-[10px] mt-8 bg-[#03DAC5] border border-solid border-[#03DAC5] rounded-full transition ease-in-out duration-300 hover:bg-white hover:text-black text-white "
          >Kandidaten finden
        </button>
      </div>
  </div>
  )
}
export default Contact