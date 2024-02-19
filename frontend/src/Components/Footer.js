import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="footer bg-gradient-to-br from-blue-600 to-blue-800 text-slate-200 relative mt-32 p-3 sm:p-6 sm:px-10 ">
                <div className="subscribe flex sm:flex-row flex-col sm:gap-0 gap-6 justify-between items-center py-6 lg:py-16 px-4 lg:px-10 xl:w-4/5 w-full sm:w-[95%] rounded-bl-3xl rounded-tr-3xl bg-gradient-to-br to-blue-600 from-blue-800 m-auto -translate-y-1/2">
                    <h2 className='text-2xl sm:text-4xl font-bold text-center sm:text-start'>Subscribe to our Newsleter</h2>
                    <div>
                        <form action="" className='flex lg:flex-row flex-col gap-6 lg:gap-0'>
                            <input  className='px-6 py-2 sm:py-4 text-lg w-64 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-2 border-blue-600 mr-4 text-white font-medium text-center placeholder-white outline-none' type="text" name="email" id="email" placeholder='Your Email' />
                            <button className='px-6 py-2 sm:py-4 text-lg w-64 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-2 border-blue-600 mr-4 text-white font-medium' type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
                <div className='footer-info sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-6 flex flex-col  sm:py-6'>
                    <div className='xl:w-1/2 lg:w-4/5 w-[95%] justify-self-center'>
                        <div className="logo text-3xl font-bold">coursefinder</div>
                        <p className='my-2 text-sm sm:text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam vero odit quia aut vel!</p>
                        <div className="contact-imf py-2 flex flex-col gap-2 cursor-pointer">
                            <div className="social-handles flex text-xl gap-4">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                            </div>
                            <div className=" hover:text-red-600 text-sm sm:text-base email my-2 flex items-center gap-2 "><MdOutlineMailOutline className='text-xl' />alorem@gmail.com</div>
                            <div className=" hover:text-red-600 text-sm sm:text-base telephonemy-2 flex items-center gap-2"><BsFillTelephoneFill />+95 6397251185</div>
                        </div>
                    </div>
                    <div className='information xl:w-1/2 lg:w-4/5 w-[95%] justify-self-center'>
                        <h1 className='font-bold text-2xl sm:text-3xl'>Information</h1>
                        <ul className=' list-disc list-inside py-2'>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>About</li>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>Courses</li>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>FAQ</li>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>Contact Us</li>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>Aplication Form</li>
                        </ul>
                    </div>
                    <div className="popular-courses xl:w-1/2 lg:w-4/5 w-[95%] justify-self-center">
                        <h1 className='font-bold text-2xl sm:text-3xl' >Popular Courses</h1>
                        <ul className=' list-disc list-inside py-2'>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>Data Science Fundamentals CS with Python and SQL</li>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>AWS Certified Developer - Associate 2020</li>
                            <li className='font-medium text-sm sm:text-base py-2 hover:text-red-500 transition-all duration-200 cursor-pointer'>How to Draw From Beginner to Master</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-section text-center border-t-[1px] mt-3 text-xs sm:text-base border-black py-2">
                    Copyright @ {new Date().getFullYear()} Edison by Merkulov
                </div>
            </div>
        </>
    )
}

export default Footer