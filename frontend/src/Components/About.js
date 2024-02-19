import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="about-header h-[500px] bg-banner relative ">
        <div className="bgcover absolute h-full w-full bg-gradient-to-r from-blue-700 to-sky-600 opacity-80"></div>
        <div className='w-full relative z-10 h-full flex flex-col justify-center items-start px-2 sm:px-20 py-4'>
          <div className="hero-heading py-8 relative w-1/2">
            <h1 className='text-6xl relative z-10 font-semibold w-4/5 text-white'>About</h1>
            <div className='absolute top-0 z-0 opacity-10 left-0 font-bold flex items-center  text-white h-full w-full text-center text-[90px] sm:text-[100px]'>About</div>
          </div>
          <div className='text-sm sm:text-base lg:text-lg sm:w-1/2 lg:w-1/3  text-white'>We enable individuals worldwide to pursue education abroad and reach for the highest quality of learning opportunities.</div>
        </div>
      </div>
      <div className="about-site my-20 lg:grid gap-10 lg:grid-cols-2 w-[90%] m-auto">
        <img src="https://animationexplainers.com/wp-content/uploads/2022/04/Employee-Training.jpg" alt="" />
        <div className="our-story self-center">
          <h2 className='text-xl sm:text-2xl  font-medium text-gray-500'>Our Story</h2>
          <h1 className='text-3xl sm:text-6xl font-bold my-6'>Course Finder</h1>
          <p className='my-3 text-gray-600 text-sm sm:text-base'>Our platform simplifies the process of finding, applying, and getting accepted for studying abroad. We connect international students, recruitment partners, and academic institutions all in one place.</p>
          <p className='my-3 text-gray-600 text-sm sm:text-base'>We’ve established partnerships with over 1,500 primary, secondary, and post-secondary educational institutions. Collaborating with more than 6,500 recruitment partners, we aim to enhance diversity on campuses in Canada, the United States, the United Kingdom, Australia, and Ireland.</p>
          <p className='my-3 text-gray-600 text-sm sm:text-base'>We have online platform for international student recruitment, aiding over 800,000 students in their educational pursuits. Recognized for our rapid growth and innovation, </p>
          <Link to="/courses"><button className='px-6 sm:py-3 py-2 w-32 sm:w-48 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-4 my-6 border-blue-700 mr-4 text-white font-medium'>Contact</button></Link>
        </div>
      </div>
      <div className="counter bg-gray-100 text-gray-600 flex sm:flex-row flex-col items-center justify-around py-10">
        <div className='text-2xl flex flex-col gap-2 w-80 justify-center text-center'>
          <span className="courses w-full text-center text-4xl"></span>
          Total Courses
        </div>
        <div className=' text-2xl flex flex-col gap-2 w-80 justify-center text-center'>
          <span className="courses w-full text-center text-4xl"></span>
          Team Members
        </div>
        <div className=' text-2xl text-gray-600 flex flex-col gap-2 w-80 justify-center text-center'>
          <span className="users w-full text-center text-4xl"></span>
          Total Users
        </div>
      </div>
      <div className="what-we-do my-20 px-2 sm:px-6">
        <h1 className='text-4xl lg:text-6xl text-center font-bold  my-10'>What we do</h1>
        <div className='grid grid-rows-4 w-full sm:w-[600px] m-auto'>
          <p className='text-[15px] sm:text-xl lg:text-2xl border-4 border-gray-700 rounded-3xl px-2 sm:px-6 py-6 sm:py-10 transition-all duration-500 hover:scale-110 ease-in-out text-center font-semibold  my-4 w-full'>Assisting Students in Acheiving Success</p>
          <p className='text-[15px] sm:text-xl lg:text-2xl border-4 border-gray-700 rounded-3xl px-2 sm:px-6 py-6 sm:py-10 transition-all duration-500 hover:scale-110 ease-in-out text-center  font-semibold my-4  w-full'>Valuing Each Other's Well-being</p>
          <p className='text-[15px] sm:text-xl lg:text-2xl border-4 border-gray-700 rounded-3xl px-2 sm:px-6 py-6 sm:py-10 transition-all duration-500 hover:scale-110 ease-in-out text-center  font-semibold my-4 w-full'>Providing Exceptional Customer Experience</p>
          <p className='text-[15px] sm:text-xl lg:text-2xl border-4 border-gray-700 rounded-3xl px-2 sm:px-6 py-6 sm:py-10 transition-all duration-500 hover:scale-110 ease-in-out text-center font-semibold  my-4 w-full '>Taking Responsibility</p>
        </div>
      </div>
    </>
  )
}

export default About