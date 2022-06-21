import React from 'react'
import './Buhne.css'
import search from '../../assets/search.svg'
import point from '../../assets/point.svg'
import bg from '../../assets/bg.png'
const Buhne = () => {
  
  return (
    <div className='relative w-full flex flex-col mt-[4em] md:flex'>
        <img className='px-[10%] m-auto' src={bg} alt="" />
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex flex-col text-white">
          <h1 className='flex mb-[1em]'>Direkter Zugang zu Kandidaten <br />
              aus Tax und Audit</h1>
          <form className='gap-5 justify-center items-center md:flex flex '>
              <label class="relative md:flex flex">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={search} alt="search" />
                  </span>
                  <input
                      class="w-[300px] caret-[#1A3580] text-black bg-white placeholder:font-italitc border border-slate-300 placeholder-[#1A3580]  py-2 pl-10 pr-10 focus:outline-none"
                      placeholder="Jobtitel oder Skills" type="text" required/>
              </label>
              <label class="relative md:flex">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={point} alt="point" />
                  </span>
                  <input
                      class="w-[300px] caret-[#1A3580] text-black bg-white placeholder:font-italic border border-slate-300 py-2 pl-10 pr-4 focus:outline-none placeholder-[#1A3580]"
                      placeholder="Standort oder 5-stellige PLZ" type="text" required/>
              </label>
              <button type='submit' className='bg-[#0B2776] py-[10px] px-[25px] text-white justify-center items-center' id="send">Kandidaten suchen</button>
          </form>
          <div className="mt-[75px] flex-col md:flex">
            <span className='flex justify-center mb-[20px]'>Beliebteste Suchergebnisse</span>
            <div className="justify-center gap-10 md:flex m-auto">
                <a className='links' href="#">Steuerberater</a>
                <a className='links' href="#">Steuerfachangestellte</a>
                <a className='links' href="#">Wirtschaftsprüfer</a>
                <a className='links' href="#">Prüfungsleiter</a>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Buhne