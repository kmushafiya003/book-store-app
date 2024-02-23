import React from 'react';
import LightLogo from '../../images/Read-It-light.png';
import DarkLogo from '../../images/Read-It-dark.png';
import DarkMode from './DarkMode';
import { navlinks } from '../../data';
import { droplist } from '../../data';
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import { IoCart } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { HiMenu } from 'react-icons/hi';
import { useState } from 'react';
import ResponsiveNavbar from './ResponsiveNavbar';
import OrderModal from './OrderModal';

const Navbar = () => {
  const { themeMode } = useSelector((state) => state.mode);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden'; //Disable Scrolling
  };

  const openMenu = () => {
    setIsOpenMenu(true);
    document.body.style.overflow = 'hidden'; //Disable Scrolling
  };

  return (
    <>
      {/* // -------------------------- Navbar ------------------------ */}
      <div className="fixed top-0 right-0 z-[999] left-0 bg-white dark:bg-gray-950 dark:transition-all dark:duration-500 transition-all duration-500 shadow-lg py-1">
        {/* ------------ Navbar Container ---------------------- */}

        <div className="sm:w-11/12 w-[95%] mx-auto flex justify-between items-center">
          {/* -------- Logo ---------- */}

          <img
            src={themeMode === 'light' ? LightLogo : DarkLogo}
            alt="logo"
            className="w-40 "
          />

          {/* -----------Button and  Navlinks ------------ */}

          <div className=" flex items-center md:gap-x-6 gap-x-5 py-2 relative">
            {/* ----------- darkmode Button ----------------- */}
            <div>
              <DarkMode />
            </div>

            {/* ----------- Navlinks ------------ */}

            <div className="hidden sm:flex items-center md:gap-x-6 gap-x-4 md:text-[16px] text-sm">
              {navlinks.map((nav) => (
                <div
                  key={nav.id}
                  className="hover:text-primary dark:text-offwhite font-semibold transition-colors duration-300 anime"
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </div>
              ))}

              {/* ------------ dropdown -------------- */}

              <div className="group red-300  ">
                <p className="hover:text-primary dark:hover:text-primary dark:text-offwhite font-semibold transition-colors duration-300 cursor-pointer flex items-center  leading-9">
                  Quick Links
                  <span>
                    <MdArrowDropDown className="text-3xl group-hover:rotate-180 transition-all duration-700" />
                  </span>
                </p>

                {/* ----- list ------- */}

                <div className="hidden group-hover:flex hover:flex transition-all  absolute px-2 py-3  flex-col gap-y-2 rounded-md bg-offwhite dark:bg-gray-600 left-[50%] top-[90%]">
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

            {/* ------------------------- Menu Icon -------------- */}
            <span
              className="text-lg sm:hidden cursor-pointer hover:text-primary dark:text-white dark:tranisiton-all dark:duration-300"
              onClick={() => openMenu()}
            >
              <HiMenu />
            </span>

            {isOpenMenu && (
              <ResponsiveNavbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
            )}

            {/* ------------ Order button ------------- */}

            <div>
              <button
                className="hidden sm:flex items-center gap-x-2 text-white font-semibold px-3 py-1 rounded-3xl blue-gradient border border-white hover:border dark:border dark:border-black dark:hover:border-white dark:transition-all dark:duration-500   hover:border-blue-700 transition-all duration-400"
                onClick={() => openModal()}
              >
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

      {isOpenModal && (
        <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};

export default Navbar;
