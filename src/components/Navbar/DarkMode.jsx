import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import { PiSunBold } from 'react-icons/pi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMode } from '../../redux/slices/darkModeSlice';
// import { useSelector } from 'react-redux';

const DarkMode = () => {
  const dispatch = useDispatch();
  // const {themeMode} = useSelector((state) => state.mode);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      dispatch(setMode("dark"));

      

    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      dispatch(setMode("light"));
     
    }
  }, [theme]);

  return (
    <div className="flex items-center ">
      <span className={`text-2xl hover:text-blue-600 cursor-pointer transition-all duration-300
      ${theme === "dark" ? "hidden" : "flex"}
      `} onClick={()=> setTheme("dark")}>
        <MdOutlineDarkMode />
      </span>
      <span className={`text-2xl text-white  hover:text-yellow-400 cursor-pointer transition-all duration-300
      ${theme === "dark" ? "flex" : "hidden"}
      `} onClick={()=> setTheme("light")}>
        <PiSunBold />
      </span>
    </div>
  );
};

export default DarkMode;
