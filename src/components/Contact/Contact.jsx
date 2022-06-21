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
    <div className='relative h-[300px]'>
        <p className='subtitle flex justify-center'>Finden Sie Ihre Wunschkandidaten mit wenigen Klicks noch heute.</p>
        <button style={btn} className="block m-auto mt-8">Kandidaten finden</button>
    </div>
  )
}

export default Contact