import { Link } from 'react-router-dom'
import ins1 from '../assets/ins1.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { features } from '../Data';

export const Inspirations = () => {
    return (
        <div className='bg-FCF8F3 mt-6'>
            <div className='container py-6 grid grid-cols-1 md:grid-cols-3 '>
                <div className='flex flex-col justify-center px-6 md:px-0 mb-2 md:mb-0'>
                    <h1 className='color-3A3A3A font-bold text-xl md:text-4xl mb-2 '>50+ Beautiful rooms <br />inspiration</h1>
                    <p className='text-xs md:text-base color-898989 mb-4'>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
                    <Link className='bg-color w-40  text-xs  py-2 text-center text-white'>Explore More</Link>
                </div>
                <div className='flex justify-center relative'>
                    <img src={ins1} alt="" className='w-full  md:w-404 md:h-582' />
                    <div className=' absolute bottom-10 left-2 md:left-20  bg-white-transparent h-28 md:h-32 px-4 md:px-6 flex flex-col justify-center'>
                        <p className='mb-2 color-616161'>01 ---- Bed Room</p>
                        <h1 className='text-sm md:text-xl font-semibold color-3A3A3A'>Inner Peace</h1>
                    </div>
                    <div className='absolute bottom-10 right-20 md:right-48  bg-color px-4 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>

                    </div>

                </div>
                <div className='inspirations mt-2 md:mt-0'>
                    <Swiper
                        loop={true}
                        grabCursor={true}
                        spaceBetween={-40}
                        slidesPerView={1}
                        effect='slide'
                        speed={1000}
                        freeMode={true}
                     
                        autoplay={{
                            delay: 3000, // Delay between slide transitions in milliseconds
                            disableOnInteraction: false, // Autoplay continues even after user interaction
                        }}
                        breakpoints={{
                            320: {
                              slidesPerView: 1,
                              spaceBetween:10
                            }
                           
                          }}
                        pagination={{
                            clickable: true,
                        }}


                        modules={[Pagination, Navigation]}
                        className=' w-60 md:w-full h-full rounded-lg mb-20 px-6 lg:px-10'
                    >
                        {
                            features.map((item, index) => (
                                <SwiperSlide className='' key={index}>
                                    <img src={item.img} alt="" className='h-4/5 ' />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    )
}
