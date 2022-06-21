import React from 'react'
import './Testimonial.css'
import bgStripes from '../../assets/bgStripes.svg'
import Carousel from '../Carousel'
const Testimonial = () => {
  return (
    <div className=' my-[100px]'>
        {/* <img className='object-scale-down' src={bgStripes} alt="" /> */}
        <p className='subtitle flex justify-center mb-[1em]'>Was unsere Kunden sagen</p>
        <p className='content flex justify-center'>ONE HIRING User sind sich einig - die Recruiting Plattform ist der Go-To-Place für Unternehmen auf der Suche nach qualifizierten Kandidaten aus dem Finanzumfeld.</p>
        <Carousel />
    </div>
  )
}

export default Testimonial