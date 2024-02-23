import React from 'react'
import { topBookData } from '../../data'
import { FaStar } from 'react-icons/fa';



const BooksSection = () => {

 

  return (
    <div className='grid xmd:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center px-4 gap-x-8 md:gap-y-20 gap-y-12 '>
      {
        topBookData.map((data) => (
          <div key={data.id} className='flex flex-col items-center gap-y-3 py-3 px-3 bg-gray-50 dark:bg-gray-700 shadow-md rounded-md cursor-pointer  dark:hover:scale-105 dark:transition-all transition-all duration-200 hover:shadow-xl hover:scale-105 ' >

            <img src={data.image} alt={data.title} className='w-[150px] rounded-lg' data-aos="fade-up" />

            <h2 className='text-lg lg:text-xl font-semibold text-center'>{data.title}</h2>
            <p className='text-sm italic text-gray-600 dark:text-gray-400'>{data.author || "Anonymous"} </p>
            <div className='flex items-center gap-x-2'>

              <FaStar className='text-yellow-500'/>
              {data.rating}


            </div>



          </div>
        ))
      }

    </div>
  )
}

export default BooksSection