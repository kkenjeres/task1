import React, { useState } from 'react'
import nvReply from '../../assets/nvReply.svg'
import Path from '../../assets/Path.svg'
const Navbar = () => {

    
    const navbar = {
      display: 'flex',
      justifyContent: 'space-between',
      marginRight: '135px',
      marginLeft: '135px',
      marginTop: '26px'
    }
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
    <div style={navbar} className='navbar flex items-center'>
        <img style={logo} src={nvReply} alt="Reply" id='logo'/>
        
          <div className='flex'>
            <div className='flex items-center text-center mr-[1em]'>
              <img className='mr-[.5em]' src={Path} alt="arrow" />
              <a href='#'>Arbeitgeber</a>
            </div>
            <button className='hovered px-[1em] border border-solid border-[#2563EB] rounded-full '>Anmelden</button>
          </div>

    </div>
  )
}

export default Navbar