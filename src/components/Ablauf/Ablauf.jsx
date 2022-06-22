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
    // <div className="relative">
    //   <AiOutlineLeft
    //         className="absolute left-0 text-[2em] inset-y-1/2 text-black cursor-pointer"
    //       />
    //     <div className="md:flex container gap-5 m-auto mt-[3em] px-[3em]  ">
    //     {CarouselData.map(({position, author, image, content, index }) => {
    //                     return (
    //                     <div style={shadow} className="p-[1em] w-[100%] " key={index}
    //                     >
    //                         <img className="mb-[2em]" src={image}
    //                         alt=''
    //                         />
    //                         <div className="">
    //                           <p className="mb-[1em]">{content}</p>
    //                           <p className="mb-[.85em] font-bold">{author}</p>
    //                           <p>{position}</p>
    //                         </div>
    //                     </div>
    //                     )
    //                 })
    //                 }
    //     </div>
    //     <AiOutlineRight
    //         className="absolute right-0 text-[2em] inset-y-1/2 text-black cursor-pointer"
    //       />
    // </div>
    <div className='mt-[10em] text-xs md:text-tiny lg:text-base'>
        <p className='title flex justify-content: center'>
        In nur wenigen Klicks zu passenden Kandidaten
        </p>
        <div className="m-auto lg:flex px-[4em] gap-5  " >
              {
                data.map(({id, title, image, content }) => {
                  return (
                    <div className='flex-col md:w-[100%]'>
                        <img className='mb-[2em] lg:h-[125px] h-[80px]' src={image}
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
        <div className='m-auto lg:flex md:max-w-[980px] hidden h-[448px] bg-[#F6F6F6] relative flex justify-center items-center mt-[10em] '  >
          <span className='text-lg text-xs md:text-lg' style={title}>Mobile sind <br />wir ganz <br /> weit vorn</span>
          {/* <img className='absolute left-20 -top-10  ' src={Handy} alt="" /> */}
        <div class="flex flex-1 absolute -top-10 left-10 ">
          <img class="object-cover overflow-hidden" src={Handy} alt="image" />
        </div>
        </div>
    </div>
  )
}

export default Kandidaten