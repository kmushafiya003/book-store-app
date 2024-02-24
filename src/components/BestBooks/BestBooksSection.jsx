import React from 'react';
import { bookData } from '../../data';
import { FaStar } from 'react-icons/fa';
import OrderModal from '../Navbar/OrderModal';
import { useState } from 'react';


const BestBooksSection = () => {

  const [isOpenModal , setIsOpenModal] = useState(false);

  const openModal = ()=> {

    setIsOpenModal(true);
    document.body.style.overflow = 'hidden' ;  //Disable Scrolling
  
  }

  return (
    <div className="py-16 w-full" >
      {/* ------------- best book container ----------------- */}

      <div className="md:w-11/12 xs:w-[80%] w-[85%] mx-auto pl-4 flex flex-col gap-y-10" >
        {/* ------------- upper part ---------------------- */}

        <div className="flex flex-col items-center gap-y-4" data-aos="fade-up">
          <h2 className="text-primary font-semibold text-[16px]">
            Trending Books
          </h2>
          <h1 className="dark:text-gray-50 dark:transition-all duration-300 font-bold text-3xl">
            Best Selling Books
          </h1>
          <p className="xmd:w-[50%] mx-auto text-center dark:text-gray-50 dark:transition-all transition-all duration-300 text-sm sm:text-[16px] text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            nostrum ex a maxime laboriosam quam, non aperiam fugit praesentium
            aliquid deserunt impedit odit ducimus animi pariatur excepturi
            possimus officiis cum tempore delectus facilis blanditiis maiores
            placeat.
          </p>
        </div>

        {/* ---------------- lower part (card section) --------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 md:gap-y-36 gap-y-12 mmd:gap-x-16  md:mt-24 mt-12 dark:text-white">
          {bookData.map((data) => (
            <div
            data-aos={data.id % 2 === 0 ? "fade-up" : "fade-down"}
              key={data.id}
            
              className="hover:bg-primary dark:hover:bg-primary dark:bg-gray-700 transiton-all duration-400 flex flex-col items-center gap-y-2 shadow-2xl md:pt-20 pt-6 md:pb-5 pb-8 px-4 rounded-lg  group cursor-pointer relative ]"
            >


              {/* ---------------- small screen books images ------------------------- */}

              <img src={data.image} alt={data.title} className='md:hidden  w-[200px] pb-3 object-fit ' />



              {/* --------- rating stars -------------- */}
              <p className="flex gap-x-2">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </p>

              {/* ------------- title of book ----------------- */}
              <h2 className="font-semibold group-hover:text-white transition-all duration-500 text-center md:text-lg text-2xl">{`${data.title}`}</h2>

              {/* ---------- description of book ------------------- */}
              <p className="text-center group-hover:text-white transition-all duration-500 text-sm">
                {`${data.description.slice(0, 100)}`}
              </p>

              {/* ------------ order now ----------- */}

              <div className="mt-4">
                <button className="flex items-center gap-x-2 text-white bg-primary group-hover:text-primary group-hover:bg-white font-semibold px-3 py-2 rounded-3xl dark:transition-all    transition-all duration-400"  onClick={()=> openModal()}>
                  Order Now
                </button>
              </div>

              {/* ---------------- Image of Book ----------------------- */}

              <img src={data.image} alt={data.title} className='hidden md:block w-[100px] md:absolute md:top-[-90px]  object-fit ' />
            </div>
          ))}
        </div>
      </div>

      {
      isOpenModal && <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    }
    </div>
  );
};

export default BestBooksSection;
