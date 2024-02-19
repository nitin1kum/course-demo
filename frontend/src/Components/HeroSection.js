import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className="hero-section h-fit lg:h-[800px] w-full flex flex-col justify-center lg:flex-row lg:justify-between sm:p-6 pt-25 lg:p-12 mb-20 z-0 ">
            <div className='h-min lg:h-full flex flex-col justify-center w-full lg:w-1/2 items-center px-3 sm:px-6 py-4 mt-32  lg:mt-0'>
                <div className="hero-heading py-8 relative w-full">
                    <h1 className='text-5xl sm:text-6xl relative z-10 font-semibold w-full lg:w-4/5 text-white'>Find best course to study</h1>
                    <div className='absolute top-0 z-0 opacity-10 whitespace-nowrap flex justify-start items-center overflow-hidden left-0 font-bold text-white h-full w-full text-start text-[100px] sm:text-[150px]'>Home</div>
                </div>
                <div className='sm:text-lg text-base  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, eaque! At nisi ipsa, dolores distinctio ad nobis illo, dolore error ut dignissimos, quis odio. Aliquam?</div>
                <div className="application-form flex sm:flex-row flex-col gap-4 sm:gap-0 justify-start w-full my-10">
                    <button className='px-6 py-3 w-48 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-2 border-blue-600 mr-4 text-white font-medium'>Application Form</button>
                    <Link to="/courses"><button className='px-6 py-3 w-48 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-2 border-blue-600 mr-4 text-white font-medium'>Courses</button></Link>
                </div>
            </div>
            <div className="hero-image w-full sm:w-[600px] lg:h-full h-min m-auto  lg:w-4/5 xl:w-1/2">
                <img className='h-full w-full object-contain' src="images/—Pngtree—online course learning progress vector_5752823.png" alt="" />
            </div>
        </div >
    )
}

export default HeroSection