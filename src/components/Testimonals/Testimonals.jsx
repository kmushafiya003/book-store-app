import React from 'react';
import { testimonalData } from '../../data';
import { BiSolidQuoteAltRight } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import {  Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';


const Testimonals = () => {
  return (
    <div className="pt-20 pb-16 ">
      <div className="w-11/12 mx-auto flex flex-col xmd:gap-y-24 md:gap-y-16 gap-y-12 items-center">
        {/* -------------- upper part ------------------ */}

        <div className="flex flex-col gap-y-2 items-center " data-aos="fade-down">
          <p className="text-primary font-semibold">What our customers say</p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Testimonial
          </h1>

          <p className="text-gray-700 dark:text-gray-300 dark:transition-all duration-300 text-sm text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni
            corporis iure cumque suscipit non accusamus distinctio autem saepe
            vitae.
          </p>
        </div>

        {/* --------------------- card slider section ----------------- */}

        <div className='w-11/12  mx-auto' >
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
        }}
        className="w-full "
      >
          {
            testimonalData.map((data)=> (
              <SwiperSlide key={data.id}>
                <div className='py-8 sm:px-5 xs:px-8 px-5  bg-blue-300 rounded-lg flex flex-col gap-y-2 relative' data-aos="fade-up">
                  <img src={data.image} alt={data.name} className='w-16 h-16 rounded-full object-cover aspect-square' />

                  <p><BiSolidQuoteAltRight className=' absolute top-4 right-4 text-4xl text-gray-600'/></p>
                 <p className='text-gray-800  xmd:text-[16px] text-sm'>
                  {data.description}

                 </p>
                 <h2 className='text-lg font-bold dark:text-gray-900 dark:transition-all duration-300'>{data.name}</h2>
                </div>
              </SwiperSlide>
            ))
          }
         
          
          </Swiper>
        </div>

      
      </div>
    </div>
  ); 
};

export default Testimonals;
