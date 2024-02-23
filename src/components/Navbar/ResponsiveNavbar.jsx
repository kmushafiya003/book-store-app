import React from 'react';
import { IoClose } from 'react-icons/io5';
import { navlinks } from '../../data';
import { droplist } from '../../data';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { IoCart } from 'react-icons/io5';
import OrderModal from './OrderModal';
import { useState } from 'react';



const ResponsiveNavbar = ({ isOpenMenu, setIsOpenMenu }) => {

  const [isOpenModal , setIsOpenModal] = useState(false);
  
  const openModal = ()=> {

    setIsOpenModal(true);
    document.body.style.overflow = 'hidden' ;  //Disable Scrolling
    
  
  }

  const closeMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = 'unset' ;  //Enable Scrolling
  }

  return (
    <>
    <div className="fixed sm:hidden z-[999] inset-0 grid place-items-center backdrop-blur-sm ">
      {/* ---------- responsive menu --------------- */}
      <div className="min-w-[200px] xs:w-[300px] xsm:w-[280px] xxs:w-[250px] bg-offwhite dark:bg-gray-700 absolute right-[5px] top-[10%] open-anime rounded-lg px-3 py-4">
        {/* ----------- close menu ---------- */}

        <div className="bg-yellow-300 relative mb-5 ">
          <IoClose
            className="absolute xs:right-5 right-3 xs:text-2xl text-xl cursor-pointer dark:text-white dark:tranisiton-all dark:duration-300"
            onClick={() => closeMenu()}
          />
        </div>

        {/* ----------- Navlinks ------------ */}

        <div className="flex flex-col gap-y-5 mt-6 items-center">
          {/* -------- links  ------------ */}

          {navlinks.map((link) => (
            <div
              key={link.id}
              className="text-[16px] dark:text-white dark:hover:text-primary dark:tranisiton-all dark:duration-300 font-semibold hover:text-primary transiiton-all duration-300"
            >
              <Link to={link.link}>{link.title}</Link>
            </div>
          ))}

             {/* ----------- quick links ----------------- */}
          <div className=" text-[16px] dark:text-white  dark:tranisiton-all dark:duration-300 font-semibold  transiiton-all duration-300 cursor-pointer text-center">
            <div className='relative'>
            Quick Links
            <span className='absolute'>
              <MdArrowDropDown className='text-3xl' />
            </span>
            </div>
           
            <div >
              {/* ----- list ------- */}

              <div className="flex transition-all text-gray-700  ml-20 py-3 text-sm  flex-col gap-y-2 rounded-md   left-[50%] top-[90%] text-left">
                {droplist.map((list) => (
                  <div
                    key={list.id}
                    className="hover:bg-lightblue dark:text-white dark:hover:text-black rounded-md py-1 font-semibold px-2 transition-all duration-200"
                  >
                    <Link to={list.link}>{list.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>


              {/* ------------ Order button ------------- */}

              <div>
            <button className="flex items-center gap-x-2 text-white font-semibold px-3 py-1 rounded-3xl blue-gradient border border-white hover:border dark:border dark:border-gray-700 dark:hover:border-white dark:transition-all dark:duration-500   hover:border-blue-700 transition-all duration-400" onClick={()=> openModal()} >
              Order
              <span>
                {' '}
                <IoCart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {
      isOpenModal && <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    }
    </>
  );
};

export default ResponsiveNavbar;
