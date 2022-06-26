import React from 'react'
import Handy from '../assets/Handy.svg'


const Kandidaten = () => {
  const data = [
    {
        id:1,
        image: '/assets/image/search1.svg',
        title: 'Kandidaten suchen',
        content: 'Besuchen Sie unsere Recruiting-Plattform und finden Sie passende Kandidaten für Ihre Vakanzen.'
    },
    {
        image: '/assets/image/ID.svg',
        title: 'Kandidaten anfragen',
        content: 'Signalisieren Sie Interesse an Ihren Wunschkandidaten und fragen ein erstes Kennenlernen kostenlos und unverbindlich an.'
    },
    {
        image: '/assets/image/Bitmap.svg',
        title: 'Bewerbungsgespräch',
        content: 'Gerne koordinieren wir ein erstes Kennenlernen mit unseren Kandidaten und bereiten Sie auf das Gespräch optimal vor.'
    },
    {
        image: '/assets/image/ID.svg',
        title: 'Mitarbeiter einstellen',
        content: 'Wir unterstützen Sie bei jedem einzelnen Schritt auf dem Weg zur Vertragsunterschrift mit Ihren Wunschkandidaten.'
    }
  ]

  return (
    <div className='mt-[3em] m-auto w-[70%] text-xs md:mt-[10em] md:text-tiny lg:text-base md:w-[80%] md:m-auto '>
      <p className='title flex text-tiny justify-center mb-[2em] font-bold md:mb-[3em] md:text-lg'>In nur wenigen Klicks zu passenden Kandidaten</p>
      <div className="gap-10 mb-[3em] md:flex md:mb-[10em]" >
        {
          data.map(({index, title, image, content}) => {
          return (
            <div className='items-center text-center md:text-left md:w-[100%] mb-[2em] md:mb-0' key={index}>
              <img className='mb-[2em] h-[80px] m-auto lg:h-[125px]' src={image}
                alt={title}
              />
              <p className='subtitle mb-[1em]'>{title}</p>
              <p>{content}</p>
            </div>
          )})
        }
      </div>
      <div className='
      relative hidden bg-[#F6F6F6] 
      md:max-w-[90%] md:h-[448px] md:flex md:justify-center md:items-center md:m-auto md:mb-[6em]'>
        <span className='text-[#0B2776] uppercase md:text-base lg:text-lg'>Mobile sind <br />wir ganz <br /> weit vorn</span>
        <div className="md:absolute md:-top-20 md:left-10 md:w-[140px] lg:w-[100%]">
          <img src={Handy} alt="Handy" />
        </div>
      </div>
    </div>
  )
}

export default Kandidaten