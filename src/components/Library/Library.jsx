import React from 'react';
import LibraryImage from '../../images/assets/website/library.jpg';
import { GiSecretBook } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlinePayment } from 'react-icons/md';
import { MdLocalOffer } from 'react-icons/md';


const iconData = [
  {
    icon: <GiSecretBook />,
    title: 'Quality Books',
  },
  {
    icon: <TbTruckDelivery />,
    title: 'Fast Delivery',
  },
  {
    icon: <MdOutlinePayment />,
    title: 'Easy Payment method',
  },
  {
    icon: <MdLocalOffer />,
    title: 'Get Offers on Books',
  },
];



const Library = () => {



  return (
    <div className=" py-14 xmd:py-24 w-10/12 md:w-11/12 mx-auto flex xmd:flex-row flex-col gap-y-14 items-center  xmd:justify-between dark:text-white dark:transition-all duration-300">
      {/* -------------------- left part ---------------------------- */}

      <div className="xmd:w-[40%] drop-shadow-xl flex items-center " data-aos ="fade-right">
        <img src={LibraryImage} alt="library" className="shadow-lg " />
      </div>


      {/* ----------------------- right part --------------------------- */}

      <div className="xmd:w-[50%] md:w-[70%] sm:w-[80%] xs:w-[90%] w-[95%] mx-auto xmd:mx-0  flex flex-col gap-y-5 " data-aos ="fade-left">
        <h1 className="sm:text-4xl xs:text-3xl text-2xl font-semibold text-center xmd:text-left">Library at your fingertips</h1>

        <p className="md:text-[16px] text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          voluptate quia, veritatis quaerat consectetur, libero delectus placeat
          doloribus nemo inventore sunt maiores atque asperiores voluptas
          ducimus. Sint ratione aspernatur .
        </p>

  

        {/* ---------------------- Icons listing part -------------------- */}

        <div className="flex flex-col gap-y-4" >
          {iconData.map((data, index) => (
            <div className="flex gap-x-4 items-center" key={index}>
              {/* ------------- icons --------------- */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center
                ${
                  index === 1 ? "bg-purple-300" : index === 2 ? "bg-orange-300" : index === 3 ? "bg-green-300" : "bg-yellow-300"
                }
                 `}
              >
                {data.icon}
              </div>

              {/* ----------- title ------------------- */}

              <div className='font-semibold'>
                {data.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
