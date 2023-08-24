import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Feature = () => {
  return (
    <div className=" container mt-10">
      <h1 className="text-center font-semibold lg:text-4xl ">Browse The Range</h1>
      <p className="mt-4 text-center text-zinc-400 text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque nam rerum animi ab</p>

      <div className='flex gap-10  mt-10 lg:mt-20 justify-center flex-col lg:flex-row px-6'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          breakpoints={{
            768:{
              slidesPerView:2,
              spaceBetween:20
            },
            1024:{
              slidesPerView:3,
              spaceBetween:20
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
         
          className="mySwiper"
        >
          <SwiperSlide>
    
          <img src={feature1} alt="" className='h-60' />
          <h1 className='text-center mt-2 font-semibold text-xl'>Dining</h1>
     
          </SwiperSlide>
          <SwiperSlide>
         
          <img src={feature2} alt=""  className='h-60'/>
          <h1 className='text-center mt-2 font-semibold text-xl'>Living</h1>
       
          </SwiperSlide>
          <SwiperSlide>
        
          <img src={feature3} alt=""  className='h-60' />
          <h1 className='text-center mt-2 font-semibold text-xl' >Bedroom</h1>
       
          </SwiperSlide>

        </Swiper>

        
     
      
      </div>
    </div>
  )
}
