import React from 'react'
import search from '../assets/search.svg'
import point from '../assets/point.svg'
import bg from '../assets/bg.png'


const Buhne = () => {
  return (
    <div className='text-white mx-[1em] flex justify-center items-center text-xs md:text-tiny lg:text-base'>
      <img className='w-full h-[500px]' src={bg} alt="bgImage" />
      <div className='absolute w-[50%] md:w-[80%]'>
        <h1 className='text-white mb-[10px]'>Direkter Zugang zu Kandidaten <br />aus Tax und Audit</h1>
        <form className='gap-5 text-xs md:flex md:justify-between md:text-tiny lg:text-base'>
          <label className="relative w-full flex lg:flex">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img src={search} alt="search" />
            </span>
            <input
              class="w-full mb-[3px] text-black bg-white caret-[#1A3580] text-xs md:text-tiny lg:text-base  placeholder:font-italitc border border-slate-300 placeholder-[#1A3580]  py-2 pl-10  focus:outline-none md:mb-0"
              placeholder="Jobtitel oder Skills" type="text" required/>
          </label>
          <label class="relative w-full flex lg:flex">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <img src={point} alt="point" />
            </span>
            <input
              class=" w-full text-black bg-white caret-[#1A3580] text-xs md:text-tiny lg:text-base placeholder:font-italitc border border-slate-300 placeholder-[#1A3580]  py-2 pl-10  focus:outline-none"
              placeholder="Standort oder 5-stellige PLZ" type="text" required/>
          </label>
          <button type='submit' className='rounded-full w-full items-center  md:mt-0 mt-[10px] bg-[#0B2776] py-[4px] px-[25px] text-white justify-center  flex' id="send">Kandidaten suchen</button>
        </form>
       <p className='flex justify-center mb-[1em] mt-[2em]'>Beliebteste Suchergebnisse</p>
       <div className='justify-between text-center gap-5 md:flex'>
         <a className='links flex justify-center w-full md:mb-0 mb-[3px]' href="#">Steuerberater</a>
         <a className='links flex justify-center w-full md:mb-0 mb-[3px]' href="#">Steuerfachangestellte</a>
         <a className='links flex justify-center w-full md:mb-0 mb-[3px]' href="#">Wirtschaftsprüfer</a>
         <a className='links flex justify-center w-full md:mb-0 mb-[3px]' href="#">Prüfungsleiter</a>
       </div>
      </div>
    </div>
  )}
export default Buhne