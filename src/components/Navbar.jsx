import React from 'react'
import nvReply from '../assets/nvReply.svg'
import Path from '../assets/Path.svg'
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div  className='flex navbar mt-[1em] justify-between items-center  px-[3em] text-xs md:text-tiny lg:text-base md:px-[7.5em]'>
        <img src={nvReply} alt="Reply" id='logo'/>
        <div className='flex items-center'>
          <div className='underline hover:underline-offset-4 cursor-pointer  items-center text-center mr-[1em] hidden md:flex'>
            <img className='mr-[.5em]' src={Path} alt="arrow" />
            <span >Arbeitgeber</span>
          </div>
          <button className='hovered px-[1em] border border-solid border-[#2563EB] rounded-full '>Anmelden</button>
          <div className='ml-[1em] md:hidden'>
            <AiOutlineMenu />
          </div>
        </div>
    </div>
  )
}

export default Navbar