import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Card = () => {
    const [open, setOpen] = useState(false)
    return(
        <div className={open ? 'faq-card p-3 sm:p-6 border-sky-600 border-[1px] rounded-xl my-6 w-[95%] sm:w-4/5 m-auto cursor-pointer' : "faq-card cursor-pointer p-3 sm:p-6 border-gray-400 border-[1px] rounded-xl my-6 sm:w-4/5 w-[95%] m-auto"} onClick={e => setOpen(!open)}>
            <div className={open ? "question text-sm sm:text-lg  font-bold flex justify-between items-center text-sky-600" : "question text-sm sm:text-lg  font-bold flex justify-between items-center"}>What is CourseFinder.ai?<FaChevronDown className={open ? 'rotate-180 transition-all duration-300 ease-in-out' : "rotate-0  transition-all duration-300 ease-in-out"} /></div>
            <div className={open ? "answer sm:text-base text-xs max-h-96 overflow-hidden pt-8 leading-8 transition-all duration-300 opacity-100 ease-in-out" : "max-h-0 sm:text-base text-xs pt-0 leading-8 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"}>coursefinder.ai is a user-friendly and comprehensive tech platform developed to simplify the entire student recruitment study abroad process.</div>
        </div>
    )
}

const Faqs = () => {
    return (
        <>
            <div className="course-header h-[500px] bg-banner relative">
                <div className="bgcover absolute h-full w-full bg-gradient-to-r from-blue-700 to-sky-600 opacity-80"></div>
                <div className='w-full relative z-10 h-full flex flex-col justify-center items-start px-2 sm:px-20 py-4'>
                    <div className="hero-heading py-8 relative w-1/2">
                        <h1 className='text-6xl relative z-10 font-semibold w-4/5 text-white'>Faqs</h1>
                        <div className='absolute top-0 z-0 opacity-10 left-0 font-bold flex items-center  text-white h-full w-full text-center text-[90px] sm:text-[100px]'>Faqs</div>
                    </div>
                    <div className='text-sm sm:text-base lg:text-lg sm:w-1/2 lg:w-1/3  text-white'>Frequently asked questions.</div>
                </div>
            </div>
            <div className="faqs-container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Faqs