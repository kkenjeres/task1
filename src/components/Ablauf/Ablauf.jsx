import React from 'react'
import './Ablauf.css'
import Handy from '../../assets/Handy.svg'


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

    // const mobileBlock = {
    //   background: "#F6F6F6",
    //   height: '448px',
    //   width: '970px',
    // }

    const title = {
      color: "#0B2776",
      textTransform: 'uppercase'
    }

    
  return (
    <div className='mt-[10em] text-xs md:text-tiny lg:text-base'>
        <p className='title flex justify-content: center'>
        In nur wenigen Klicks zu passenden Kandidaten
        </p>
        <div className="m-auto lg:flex px-[4em] gap-20  " >
              {
                data.map(({id, title, image, content }) => {
                  return (
                    <div className='flex-col w-[25%] w-[100%]'>
                        <img className='m-auto md:object-scale-down object-contain w-auto mb-[2em]' src={image}
                          alt={title}
                        />
                        <p className='subtitle mb-[1em]'>{title}</p>
                        <p>{content}</p>
                        <div>

                        </div>
                    </div>
                  )
                })
              }
        </div>
        <div className='aspect-w-auto  max-w-[980px] mx-auto h-[448px] bg-[#F6F6F6] relative m-auto flex justify-center items-center mt-[10em]'  >
          <span className='text-lg' style={title}>Mobile sind <br />wir ganz <br /> weit vorn</span>
          <img className='absolute left-20 -top-10  ' src={Handy} alt="" />
        </div>
    </div>
  )
}

export default Kandidaten