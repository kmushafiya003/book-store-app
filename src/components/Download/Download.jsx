import React from 'react'
import board from '../../images/assets/website/board.png'
import playstore from '../../images/assets/website/play_store.png'
import appstore from '../../images/assets/website/app_store.png'
import { Link } from 'react-router-dom'



const Download = () => {

    const bgImage = {
        backgroundImage : `url(${board})` ,
        backgroundPosition : 'center' , 
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        width : '100%',

    }



    
  return (
    <div className='w-[100%] flex  justify-center mt-6 '  style={bgImage}>

        <div className='flex flex-col items-center gap-y-6 py-8 px-2' data-aos="fade-right">

            {/* ------------------ heading -------------------- */}
        <h1 className='text-white font-semibold sm:text-3xl xs:text-2xl text-xl' >
            Read Books at Your Fingertips
        </h1>

        {/* ----------------- stores ----------------------- */}

        <div className='flex sm::gap-x-5 xs:gap-x-3 gap-x-2' >

         <Link to="/">
         <img src={playstore} alt="playstore" className='xmd:w-[250px] sm:w-[200px] xmd:h-[100px] sm:h-[80px] w-[160px] h-[60px]'  />
         </Link>
         <Link to="/">
         <img src={appstore} alt="appstore" className='xmd:w-[250px] sm:w-[200px] xmd:h-[100px] sm:h-[80px] w-[160px] h-[60px]' />
         </Link>
       


        </div>

        </div>
    </div>
  )
}

export default Download