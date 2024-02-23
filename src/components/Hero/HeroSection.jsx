import React from 'react';
import { useState } from 'react';
// import Book1 from '../../images/assets/books/book1.jpg';
import Book2 from '../../images/assets/books/book2.jpg';
// import Book3 from '../../images/assets/books/book3.jpg';
import Vector from '../../images/assets/website/blue-pattern.png';
import { bookData } from '../../data';
import OrderModal from '../Navbar/OrderModal';

const HeroSection = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  };

  

  const [book, setBook] = useState(bookData[1].image);
  const [title, setTitle] = useState(bookData[1].title);
  const [author, setAuthor] = useState(bookData[1].author);
  const [description, setDescription] = useState(bookData[1].description);
  const [isOpenModal , setIsOpenModal] = useState(false);

  const openModal = ()=> {

    setIsOpenModal(true);
    document.body.style.overflow = 'hidden' ;  //Disable Scrolling
  
  }

  return (
    <div
      className="overflow-x-hidden w-[100%] pt-24 min-h-[700px] bg-gray-200 dark:bg-gray-900 dark:transition-all dark:duration-500 tranistion-all duration-500 flex items-center "
      style={bgImage}
    >
      {/* ------------------  content container -------------------- */}

      <div className="w-11/12 mx-auto  flex md:flex-row flex-col gap-y-16 mmd:gap-y-0 md:justify-between pl-4 mt-10 pb-6">

        {/* ----------------- left part / upper part----------------------- */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-[50%] sm:gap-y-8 gap-y-6 ">
          <div className="flex flex-col items-center  md:gap-y-5 gap-y-3 dark:text-gray-50 dark:trainstion-all dark:duration-300 fade-anime py-6">
            <h1 className="sm:text-5xl xxs:text-4xl text-3xl font-semibold md:w-[450px] text-center md:text-left ">
              {title}{' '}
            </h1>
            <p className="text-right md:text- md:pr-8  text-primary font-semibold">
              by {author || 'Anonymous'}
            </p>
            <p className="mt-4 text-sm font-[500]">{description}</p>
          </div>

          {/* ------------ Order button ------------- */}

          <div>
            <button className="flex items-center gap-x-2 text-white font-semibold px-3 py-2 rounded-3xl blue-gradient border border-white hover:border dark:border dark:border-black dark:hover:border-white dark:transition-all dark:duration-500   hover:border-blue-700 transition-all duration-400" onClick={()=> openModal()}>
              Order Now
            </button>
          </div>
        </div>

        {/* ---------------------- right part / bottom part -------------------------------- */}

        <div className=" md:w-[40%] flex mmd:flex-row flex-col mmd:justify-between gap-y-10 mmd:gap-y-0 items-center">
          {/* ------------- book display part ------------- */}
          <div className="md:w-[60%]">
            <img
              src={book}
              alt="books"
              className="hidden md:block scale-anime"
              loading="lazy"
            />
            <img
              src={Book2}
              alt="books"
              className="md:hidden scale-anime h-[400px]"
              loading="lazy"
            />
          </div>

          {/* ---------- book choosing part ------------------- */}

          <div className="hidden border-box mmd:w-[30%]  max-h-[500px]  md:flex mmd:flex-col gap-x-5 mmd:gap-x-0 flex-row items-center gap-y-4 py-2 mmd:px-0 px-2 bg-gray-200">
            {bookData.slice(0,3).map((data) => (
              <img
              key={data.id}
                src={data.image}
                alt={data.title}
                className={`xlg:w-[100px] xmd:w-[80px] sm:w-[70px] xsm:w-[60px] w-[50px] cursor-pointer hover:scale-90 transition-all duration-300 object-fit h-full
              ${
                title === data.title ? 'border-4 border-primary' : 'border-none'
              }
              `}
                onClick={() => {
                  setBook(data.image);
                  setTitle(data.title);
                  setAuthor(data.author);
                  setDescription(data.description);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {
      isOpenModal && <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    }
    </div>
  );
};

export default HeroSection;
