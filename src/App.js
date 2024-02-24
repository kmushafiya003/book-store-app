import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import BestBooksSection from './components/BestBooks/BestBooksSection';
import Library from './components/Library/Library';
import Download from './components/Download/Download';
import TopBooks from './components/TopBooks/TopBooks';
import Testimonals from './components/Testimonals/Testimonals';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';




function App() {

  useEffect(()=> {
    AOS.init({

      once:true,
      duration:900,
      easing: "ease-out-sine",
      delay: 100,

    });

    AOS.refresh();

  }, []);
  



  return (
    <div className=" overflow-x-hidden  bg-gray-100 dark:bg-gray-900 dark:text-white dark:transition-bg duration-500 flex flex-col ">
      <Navbar />
      <HeroSection />
      <BestBooksSection />
      <Library />
      <Download />
      <TopBooks />
      <Testimonals />
      <Footer />
 
    </div>
  );
}

export default App;
