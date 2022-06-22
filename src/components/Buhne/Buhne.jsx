import React from 'react'
import search from '../../assets/search.svg'
import point from '../../assets/point.svg'
import bg from '../../assets/bg.png'
const Buhne = () => {
  const apply = {
    borderRadius: '40px',
    '&:hover': {
      backgroundColor: 'red',
      color: 'red'
    }
  }
  return (
    <div className=' md:mx-[3em] mx-[1em] bg m-auto bg-center h-[500px] bg-auto bg-no-repeat flex justify-center items-center text-xs md:text-tiny lg:text-base '>
      <div className='text-white '>
      <h1 className='flex mb-[1em]'>Direkter Zugang zu Kandidaten <br />aus Tax und Audit</h1>
        <form className='mb-[2em] container m-auto gap-5 justify-center items-center  md:flex md:justify-center sm:justify-center text-xs md:text-tiny lg:text-base'>
              <label class="relative lg:flex flex">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={search} alt="search" />
                  </span>
                  <input
                      class=" md:mb-0 mb-[3px] lg:w-[320px] caret-[#1A3580] text-xs md:text-tiny lg:text-base text-black bg-white placeholder:font-italitc border border-slate-300 placeholder-[#1A3580]  py-2 pl-10 pr-10 focus:outline-none"
                      placeholder="Jobtitel oder Skills" type="text" required/>
              </label>
              <label class="relative md:flex">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={point} alt="point" />
                  </span>
                  <input
                      class="lg:w-[320px] caret-[#1A3580] text-xs md:text-tiny lg:text-base text-black bg-white placeholder:font-italitc border border-slate-300 placeholder-[#1A3580]  py-2 pl-10 pr-10 focus:outline-none"
                      placeholder="Standort oder 5-stellige PLZ" type="text" required/>
              </label>
              <button style={apply} type='submit' className=' md:mt-0 mt-[10px] bg-[#0B2776] py-[4px] px-[25px] text-white justify-center items-center flex' id="send">Kandidaten suchen</button>
          </form>
        <p className='flex  justify-center mb-[20px]'>Beliebteste Suchergebnisse</p>
        <div className='md:flex  justify-center gap-[1em] text-center'>
            <a className='links flex md:mb-0 mb-[3px]' href="#">Steuerberater</a>
            <a className='links flex md:mb-0 mb-[3px]' href="#">Steuerfachangestellte</a>
            <a className='links flex md:mb-0 mb-[3px]' href="#">Wirtschaftsprüfer</a>
            <a className='links flex' href="#">Prüfungsleiter</a>
        </div>
      </div>
    </div>
  )}

export default Buhne