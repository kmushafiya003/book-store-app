import React from 'react';
import LightLogo from '../../images/Read-It-light.png';
import DarkLogo from '../../images/Read-It-dark.png';
import { useSelector } from 'react-redux';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { MdArrowRight } from 'react-icons/md';
import { ImportantLinks } from '../../data';
import { Genres } from '../../data';
import { location } from '../../data';
import { Link } from 'react-router-dom';
import { CiAt } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const { themeMode } = useSelector((state) => state.mode);

  return (
    <div className="py-12  bg-white dark:bg-gray-950 dark:text-gray-300 text-gray-800">
      <div className="w-11/12 mx-auto flex flex-col gap-y-6 px-4 ">
        {/* -------------- upper part--------- */}

        <div className="flex flex-col mmd:flex-row mmd:gap-x-10 gap-y-10 pt-4 pb-8">
          {/* ----------------- left part / upper-one ------------------- */}

          <div className="flex flex-col mmd:items-start items-center gap-y-4 xlg:w-[35%] mmd:w-[40%]" data-aos="fade-right">
            {/* ----------- logo ------------------ */}

            <img
              src={themeMode === 'light' ? LightLogo : DarkLogo}
              alt="logo"
              className="w-40 "
            />

            {/* ----------- description ------------- */}

            <p className="md:text-[16px] text-sm text-center mmd:text-left  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              nesciunt voluptas cumque fugit consequatur repudiandae aspernatur
              aut vitae molestiae dolorum.
            </p>

            {/* -------------- city/state ------------------ */}

            <div className="flex gap-x-2 items-center">
              <span>
                <FaTelegramPlane />
              </span>
              <p className="text-[16px]">Mumbai, Maharashtra</p>
            </div>

            {/* -------------- phone ------------------ */}

            <div className="flex gap-x-2 items-center">
              <span>
                <MdPhoneAndroid />
              </span>
              <p className="text-[16px]">+91 1234567891</p>
            </div>

            {/* ------------- icon groups ----------------- */}

            <div className="flex gap-x-3 items-center text-2xl text-gray-900 dark:text-gray-300">
              <FaInstagram className="hover:text-instagram tranisition-all duration-300 cursor-pointer" />
              <FaFacebook className="hover:text-facebook tranisition-all duration-300 cursor-pointer" />
              <IoLogoWhatsapp className="hover:text-whatsapp tranisition-all duration-300 cursor-pointer" />
            </div>
          </div>

          {/* ------------------- right part / bottom-one  ---------------------------- */}

          <div className="mmd:w-[60%] flex gap-y-8 xs:gap-y-0 gap-x-16 flex-wrap xs:flex-nowrap xs:gap-x-20 xlg:gap-x-36 xlg:justify-center mmd:justify-start xs:justify-center px-4  pt-6 " >
            {/* --------------- Imp Links ------------------- */}

            <div className="flex flex-col gap-y-4 " data-aos="fade-down">
              <h2 className="font-semibold mmd:text-lg text-[16px]">Important Links</h2>

              <div className="flex flex-col gap-y-2">
                {ImportantLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="flex gap-1 items-center hover:text-primary transition-all duration-300 mmd:text-[16px] text-sm"
                  >
                    <MdArrowRight className="text-2xl" />
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* ----------------- Genres --------------------------- */}

            <div className="flex flex-col gap-y-4" data-aos="fade-up">
              <h2 className="font-semibold mmd:text-lg text-[16px]">Genres</h2>

              <div className="flex flex-col gap-y-2">
                {Genres.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="flex gap-1 items-center hover:text-primary transition-all duration-300 mmd:text-[16px] text-sm"
                  >
                    <MdArrowRight className="text-2xl" />
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* -------------------- Location ------------ -------------- */}

            <div className="flex flex-col gap-y-4" data-aos="fade-down">
              <h2 className="font-semibold mmd:text-lg text-[16px]">Location</h2>

              <div className="flex flex-col gap-y-2">
                {location.map((city, index) => (
                  <p
                    key={index}
                    
                    className="flex gap-1 items-center hover:text-primary transition-all duration-300 mmd:text-[16px] text-sm cursor-pointer"
                  >
                    <MdArrowRight className="text-2xl" />
                    {city}
                    
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --------------- underline ---------------------- */}

        <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-800"></div>

        {/* ------------- lower part ------------------- */}

        <div className='py-8 flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row justify-center items-center text-sm font-semibold' data-aos="fade-left">

          <p className='hidden sm:flex items-center gap-x-1  '> <span><CiAt /></span>Copyright 2024 , All rights reserved || Made with  <FaHeart className='text-heart' />by Mushafiya </p>

          <p className='flex sm:hidden gap-x-1 items-center '><span><CiAt /></span>Copyright 2024 , All rights reserved</p>
          <p className='flex sm:hidden gap-x-1 items-center '>Made with  <FaHeart className='text-heart' />by Mushafiya </p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
