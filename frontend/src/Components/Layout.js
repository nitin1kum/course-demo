import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Preloader from './Preloader'

const Layout = () => {

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 1000);
      window.scrollTo(0 , 0)
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => { window.removeEventListener('load', onPageLoad, false) };
    }
  }, []);


  return (
    <>
      <div className='preloader' id='preloader'>
        <Preloader />
      </div>
      <div className="layout content hidden" id='content'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout