import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-header h-[500px] bg-banner relative ">
        <div className="bgcover absolute h-full w-full bg-gradient-to-r from-blue-700 to-sky-600 opacity-80"></div>
        <div className='w-full relative z-10 h-full flex flex-col justify-center items-start px-2 sm:px-20 py-4'>
          <div className="hero-heading py-8 relative w-1/2">
            <h1 className='text-6xl relative z-10 font-semibold w-4/5 text-white'>Contact</h1>
            <div className='absolute top-0 z-0 opacity-10 left-0 font-bold flex items-center  text-white h-full w-full text-center  text-[80px] sm:text-[100px]'>Contact</div>
          </div>
          <div className='text-sm sm:text-base lg:text-lg sm:w-1/2 lg:w-1/3  text-white'>We enable individuals worldwide to pursue education abroad and reach for the highest quality of learning opportunities.</div>
        </div>
      </div>
      <div className="location w-full h-full ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7333.853634739661!2d77.4105249!3d23.2093375!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708088847339!5m2!1sen!2sin" className='h-[500px] w-[95%] lg:w-[80vw] m-auto my-20 border-black rounded-2xl border-2 shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.59)]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-info my-20 w-[95%] pb-20 sm:w-4/5 m-auto flex flex-col lg:grid lg:grid-cols-2 gap-10">
        <div className="info shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.59)] rounded-3xl px-6">
          <h1 className='text-2xl sm:text-4xl font-medium py-6 my-10 border-b-[1px] border-gray-600'>Keep In Touch</h1>

          <div className="phone py-6">
            <h2 className='text-base sm:text-xl flex font-medium justify-start items-center gap-6'><BsFillTelephoneFill className='text-blue-700'/>Mobile</h2>
            <p className='text-gray-500 text-sm sm:text-base ml-10 py-2 font-medium'>+91565455454</p>
          </div>
          <div className="email py-6">
            <h2 className='text-base sm:text-xl flex font-medium justify-start items-center gap-6'><MdEmail className='text-blue-700'/>Email</h2>
            <p className='text-gray-500 text-sm sm:text-base ml-10 py-2 font-medium'>mk3529@gmail.com</p>
          </div>
          <div className="address py-6">
            <h2 className='text-base sm:text-xl flex font-medium justify-start items-center gap-6'><FaMap className='text-blue-700'/>Address</h2>
            <p className='text-gray-500 text-sm sm:text-base ml-10 py-2 font-medium'>+Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusda
            </p>
          </div>
        </div>
        <div className="contact bg-gradient-to-b from-white to-gray-100 rounded-3xl shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.59)]  px-4">
          <h2 className='ttext-2xl sm:text-4xl font-medium py-6  sm:my-10 border-b-[1px] border-gray-600'>Leave A Message</h2>
          <form action="" className='flex flex-col items-center'>
            <div className='flex sm:flex-row flex-col gap-6 w-full my-3'>
              <input className='w-full py-3 sm:py-6 rounded-full px-4 outline-none border-none text-lg font-medium text-gray-600' placeholder='Your Email' type="email" name='email' id='email'/>
              <input className='w-full py-3 sm:py-6 rounded-full px-4 outline-none border-none text-lg font-medium text-gray-600' placeholder='Name' type="text" name='name' id='name' />
            </div>
            <input className='w-full py-3 sm:py-6 rounded-full px-4 my-3 outline-none border-none text-lg font-medium text-gray-600' placeholder='Subject' type="text" name='subject' id='subject'/>
            <textarea className='w-full py-3 sm:py-6 max-h-48 rounded-3xl my-3 px-4 outline-none border-none text-lg font-medium text-gray-600' placeholder='Message' name="message" id="message"></textarea>
            <button type="submit" className='px-6 my-3  py-3 w-48 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-2 flex justify-center border-blue-600 mr-4 text-white font-medium'>Submit Now</button>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Contact