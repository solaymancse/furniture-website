import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { features } from '../Data';

export const Feature = () => {
  return (
    <div className=" container mt-10 ">
      <h1 className="text-center font-semibold lg:text-4xl color-3A3A3A">Browse The Range</h1>
      <p className="mt-4 text-center text-zinc-400 text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque nam rerum animi ab</p>

      <div className='flex  mt-10 lg:mt-20 flex-col lg:flex-row'>

        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={1}
          effect='slide'
          speed={1000}
          freeMode={true}
          Navigation={true}
          autoplay={{
            delay: 3000, // Delay between slide transitions in milliseconds
            disableOnInteraction: false, // Autoplay continues even after user interaction
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 48
            },
          }}

          modules={[Pagination]}
          className='w-60 lg:w-full lg:px-60 h-80 lg:h-full rounded-lg mb-20 px-6'
        >
          {
            features.map((item,index)=> (
              <SwiperSlide className='' key={index}>
          
                <img src={item.img} alt="" className='object-cover h-60 lg:h-full' />
                <h1 className='text-center mt-2 font-semibold text-sm'>{item.title}</h1>
  
            </SwiperSlide>
            ))
          }
        
        </Swiper>





      </div>
    </div>
  )
}
