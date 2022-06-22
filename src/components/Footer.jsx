import React from 'react'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'

const Footer = () => {
  return (
    <div class="flex flex-col bg-footer pt-[50px] text-white text-xs md:text-tiny lg:text-base ">
        <div className='m-auto gap-10 lg:gap-24 sm:flex '>
            <div className="col ">
                <div className="contact flex items-center">
                    <img className='mr-[1em]' src={phone} alt="phone" />
                    <p>+49 (0) 211 545 72 000</p>
                </div>
                    <p className='subtitle my-[1em]'>Leistungen</p>
                    <ul>
                    <li><a href="#">Referenzen</a></li>
                    <li><a href="#">Kandidatensuche</a></li>
                    <li><a href="#">Kundenportal</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
            <div className="col">
                <div className="contact flex items-center">
                    <img className='mr-[1em]' src={email} alt="email" />
                    <p>info@onehiring.com</p>
                </div>
                <p className='subtitle my-[1em]'>Über uns</p>
                <ul>
                    <li><a href="#">THE BIG FOUR</a></li>
                    <li><a href="#">Elliot Browne</a></li>
                </ul>
            </div>
            <div className="col flex flex-col-reverse">
                <ul>
                    <li><a href="#">Datenschutz</a></li>
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Cookie Richtlinien</a></li>
                    <li><a href="#">Allgemeine Geschäftsbedingungen</a></li>
                </ul>
            </div>
        </div>
        <span className='my-[2em] flex justify-center'>Copyright © 2021 ONE HIRING GmbH. All rights reserved.</span>
        <button className='bg-[#2563EB] block m-auto px-[4em] py-[.8em] text-white rounded-tl-[20px] rounded-tr-[20px] transition ease-in-out duration-300 border-[#2563EB] hover:bg-white hover:text-black' >Kandidaten per Mail</button>
    </div>
  )
}

export default Footer