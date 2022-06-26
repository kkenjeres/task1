import React from 'react'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'


function Footer() {
  return (
    <div>
        <div className="bg-footer text-white w-full pt-[3em] text-xs md:text-tiny lg:text-base">
        <div className='w-[80%] gap-10 mb-[3em] md:mb-[5em] md:flex m-auto '>
            <div className="items-center mb-[1em] text-center md:mb-0 md:text-left md:w-[100%] ">
                <div className="items-center flex justify-center md:flex md:justify-start">
                    <img className='mr-[1em] w-[25px] md:w-[42px]' src={phone} alt="phone" />
                    <p>+49 (0) 211 545 72 000</p>
                </div>
                    <p className='text-lg font-bold my-[1em] flex justify-center items-center md:justify-start md:flex md:items-center'>Leistungen</p>
                    <ul>
                        <li><a href="#">Referenzen</a></li>
                        <li><a href="#">Kandidatensuche</a></li>
                        <li><a href="#">Kundenportal</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
            </div>
            <div className="items-center  mb-[1em] text-center md:mb-0 md:text-left md:w-[100%] ">
                <div className="items-center flex justify-center md:flex md:justify-start">
                    <img className='mr-[1em] w-[25px] md:w-[42px]' src={email} alt="email" />
                    <p>info@onehiring.com</p>
                </div>
                    <p className='text-lg font-bold my-[1em] flex justify-center items-center md:justify-start md:flex md:items-center'>Über uns</p>
                    <ul>
                        <li><a href="#">THE BIG FOUR</a></li>
                        <li><a href="#">Elliot Browne</a></li>
                    </ul>
            </div>
            <div className="items-center text-center md:text-left md:w-[100%] md:flex md:flex-col-reverse">
                <ul>
                    <li><a href="#">Datenschutz</a></li>
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Cookie Richtlinien</a></li>
                    <li><a href="#">Allgemeine Geschäftsbedingungen</a></li>
                </ul>
            </div>
        </div>
        <p className='w-[80%] m-auto my-[2em] text-center md:text-left'>Copyright © 2021 ONE HIRING GmbH. All rights reserved.</p>
        <button className='bg-[#2563EB] block m-auto px-[4em] py-[.8em] text-white rounded-tl-[20px] rounded-tr-[20px] transition ease-in-out duration-300 border-[#2563EB] hover:bg-white hover:text-black' >Kandidaten per Mail</button>
    </div>
    </div>
  )
}

export default Footer