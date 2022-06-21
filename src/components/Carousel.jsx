import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";


const Carousel = () => {
  const shadow = {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
  }
  return (
    <div className="relative lg:flex">
      <AiOutlineLeft
            className="absolute left-0 text-[2em] inset-y-1/2 text-black cursor-pointer"
          />
        <div className="flex container gap-5 m-auto mt-[3em] ">
        {CarouselData.map(({position, author, image, content, index }) => {
                        return (
                        <div style={shadow} className="p-[1em]" key={index}
                        >
                            <img className="mb-[2em]" src={image}
                            alt=''
                            />
                            <div className="align-baseline flex-col justify-space">
                              <p className="mb-[1em]">{content}</p>
                              <p className="mb-[.85em] font-bold">{author}</p>
                              <p>{position}</p>
                            </div>
                        </div>
                        )
                    })
                    }
        </div>
        <AiOutlineRight
            className="absolute right-0 text-[2em] inset-y-1/2 text-black cursor-pointer"
          />
    </div>
  )
}

export default Carousel

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentSlide: 0,
//       paused: false,
//     };
//   }

//   nextSlide = () => {
//     let newSlide =
//       this.state.currentSlide === CarouselData.length - 1
//         ? 0
//         : this.state.currentSlide + 1;
//     this.setState({ currentSlide: newSlide });
//   };

//   prevSlide = () => {
//     let newSlide =
//       this.state.currentSlide === 0
//         ? CarouselData.length - 1
//         : this.state.currentSlide - 1;
//     this.setState({ currentSlide: newSlide });
//   };

//   setCurrentSlide = (index) => {
//     this.setState({ currentSlide: index });
//   };

//   render() {
//     return (
//       <div className="m-auto flex justify-center relative md:flex mt-[3em]">
//         <div className=" flex overflow-hidden ">
//           <AiOutlineLeft
//             onClick={this.prevSlide}
//             className="absolute left-0 text-[2em] inset-y-1/2 text-black cursor-pointer"
//           />

//           <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
//             <div className="flex container">
                // {CarouselData.map(({position, author, image, content, index }) => {
                //         return (
                //         <div className="border-2 border-sky-500 bg-gray-200" key={index}
                //         >
                //             <img className="mb-[1em]" src={image}
                //             alt=''
                //             />
                //             <p className="mb">{content}</p>
                //             <p>{author}</p>
                //             <p>{position}</p>
                //         </div>
                //         )
                //     })
                //     }
//             </div>

//             {/* {CarouselData.map((slide, content ,author, index) => {
//               return (
//                 <div>
//                     <p>{content}</p>
//                     <p>{author}</p>
//                     <img
//                       src={slide.image}
//                       alt="This is a carousel slide"
//                       key={index}
//                       className={
//                         index === this.state.currentSlide
//                           ? "block w-full h-auto object-cover"
//                           : "hidden"
//                       }
//                     />

//                 </div>
//               );
//             })} */}
//           </Swipe>
//           <AiOutlineRight
//             onClick={this.nextSlide}
//             className="absolute right-0 text-[2em] inset-y-1/2 text-black cursor-pointer"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;