import React from 'react'
import BooksSection from './BooksSection'


const TopBooks = () => {


    

  return (
    <div className='pt-20 pb-7 ' >

        {/* ----------- container ----------------- */}
        

        <div className='w-11/12 mx-auto flex flex-col md:gap-y-24 gap-y-16 items-center' >

            {/* ------------------ heading / subheading ------------------- */}

            <div className='flex flex-col gap-y-2 items-center ' data-aos="fade-left" >

                <p className='text-primary font-semibold'>Tops Books for you</p>

                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Top Picks</h1>

                <p className='text-gray-700 dark:text-gray-300 dark:transition-all duration-300 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni corporis iure cumque suscipit non accusamus distinctio autem saepe vitae.</p>
                
            </div>


            {/* ----------------- Books ---------------------------------- */}

              <BooksSection />
        </div>
    </div>
  )
}

export default TopBooks