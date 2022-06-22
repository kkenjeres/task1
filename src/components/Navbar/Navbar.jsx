import React, { useState } from 'react'
import nvReply from '../../assets/nvReply.svg'
import Path from '../../assets/Path.svg'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {

    
    // const navbar = {
    //   justifyContent: 'space-between',
    //   marginRight: '135px',
    //   marginLeft: '135px',
    //   marginTop: '26px'
    // }
    const dropdownMenu = {
    }
    const logo = {
      height: '55px',
      width: '55px',
    }
    const ss = {
      display: 'flex'
    }
    

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div  className='flex navbar md:px-[7.5em] mt-[1em] justify-between items-center  px-[3em] text-xs md:text-tiny lg:text-base'>
        <img style={logo} src={nvReply} alt="Reply" id='logo'/>
        <div className='flex items-center'>
          <div className='flex items-center text-center mr-[1em] hidden md:flex'>
            <img className='mr-[.5em]' src={Path} alt="arrow" />
            <a href='#'>Arbeitgeber</a>
          </div>
          <button className='hovered px-[1em] border border-solid border-[#2563EB] rounded-full '>Anmelden</button>
          <div className='md:hidden ml-[1em]'>
            <AiOutlineMenu />
          </div>
        </div>
    </div>
  )
}

export default Navbar