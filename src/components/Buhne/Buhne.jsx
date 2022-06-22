import React from 'react'
import './Buhne.css'
import search from '../../assets/search.svg'
import point from '../../assets/point.svg'
import bg from '../../assets/bg.png'
const Buhne = () => {
  return (
    <div className=' mx-[3em] bg m-auto bg-center h-[500px] bg-auto bg-no-repeat flex justify-center items-center text-xs md:text-tiny lg:text-base '>
      {/* <div className=" max-h-[80%] g:flex flex-col md:flex text-white">
        <h1 className='flex mb-[1em]'>Direkter Zugang zu Kandidaten <br />aus Tax und Audit</h1>
        <form className='m-auto lg:flex gap-5 justify-center items-center md:flex '>
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
      </div> */}
      <div className='text-white'>
        <form className='container m-auto  gap-5 justify-center items-center  md:flex md:justify-center sm:justify-center text-xs md:text-tiny lg:text-base'>
              <label class="relative lg:flex flex">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={search} alt="search" />
                  </span>
                  <input
                      class="md:w-[300px] caret-[#1A3580] text-xs md:text-tiny lg:text-base text-black bg-white placeholder:font-italitc border border-slate-300 placeholder-[#1A3580]  py-2 pl-10 pr-10 focus:outline-none"
                      placeholder="Jobtitel oder Skills" type="text" required/>
              </label>
              <label class="relative md:flex">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={point} alt="point" />
                  </span>
                  <input
                      class="md:w-[300px] caret-[#1A3580] text-xs md:text-tiny lg:text-base text-black bg-white placeholder:font-italic border border-slate-300 py-2 pl-10 pr-4 focus:outline-none placeholder-[#1A3580]"
                      placeholder="Standort oder 5-stellige PLZ" type="text" required/>
              </label>
              <button type='submit' className='bg-[#0B2776] py-[10px] px-[25px] text-white justify-center items-center' id="send">Kandidaten suchen</button>
          </form>
        <p className='flex justify-center mb-[20px]'>Beliebteste Suchergebnisse</p>
        <div className='md:flex justify-center  gap-[1em]'>
            <a className='links flex' href="#">Steuerberater</a>
            <a className='links flex' href="#">Steuerfachangestellte</a>
            <a className='links flex' href="#">Wirtschaftsprüfer</a>
            <a className='links flex' href="#">Prüfungsleiter</a>
        </div>
      </div>
    </div>
  )}

export default Buhne