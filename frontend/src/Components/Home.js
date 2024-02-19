import React, { useState } from 'react'
import Filter from './Filter'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaChevronDown, FaMap } from "react-icons/fa";
import HeroSection from './HeroSection';
import { Link,  useNavigate } from 'react-router-dom';
import axios from 'axios';

const FaqCard = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={open ? 'faq-card p-3 sm:p-6 border-sky-600 border-[1px] rounded-xl my-6 w-[95%] sm:w-4/5 m-auto cursor-pointer' : "faq-card cursor-pointer p-3 sm:p-6 border-gray-400 border-[1px] rounded-xl my-6 sm:w-4/5 w-[95%] m-auto"} onClick={e => setOpen(!open)}>
            <div className={open ? "question text-sm sm:text-lg  font-bold flex justify-between items-center text-sky-600" : "question text-sm sm:text-lg  font-bold flex justify-between items-center"}>What is CourseFinder.ai?<FaChevronDown className={open ? 'rotate-180 transition-all duration-300 ease-in-out' : "rotate-0  transition-all duration-300 ease-in-out"} /></div>
            <div className={open ? "answer sm:text-base text-xs max-h-96 overflow-hidden pt-8 leading-8 transition-all duration-300 opacity-100 ease-in-out" : "max-h-0 sm:text-base text-xs pt-0 leading-8 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"}>coursefinder.ai is a user-friendly and comprehensive tech platform developed to simplify the entire student recruitment study abroad process.</div>
        </div>
    )
}

const Home = () => {

    const navigate = useNavigate()
    async function recommended(e){
        let data = []
        await axios.get(`https://course-demo.onrender.comhttp://localhost:8000/search?q=${e}`).then((res) => {
            data = res.data
        })
        navigate("/search", { state: { id: 1, data: data, value: e } })
    }

    return (
        <>
            <HeroSection />
            <Filter />
            <div className="recommended my-20">
                <div className='text-3xl font-bold text-center w-full py-10  bg-gradient-to-b from-gray-100 to-white'>Recommended</div>
                <div className='recommended-country flex flex-col gap-10 px-3 sm:px-10  m-auto'>
                    <div onClick={e => recommended("uk")} className='cursor-pointer w-full sm:w-[500px] relative lg:w-[450px] xl:w-[500px] m-auto rounded-xl overflow-hidden shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.71)]'>
                        <p className='font-bold text-center absolute inset-0 h-full w-full flex justify-center z-10 items-center text-4xl  text-white'>United State</p>
                        <img className='w-full object-cover h-[150px] sm:h-64 hover:scale-95 rounded-xl brightness-75 transition-all duration-200 ease-in-out' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" alt="" />
                    </div>
                    <div className='flex lg:flex-row flex-col gap-10  justify-between'>

                        <div onClick={e => recommended("canada")} className=' cursor-pointer w-full sm:w-[500px] relative lg:w-[450px] xl:w-[500px] m-auto rounded-xl overflow-hidden shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.71)]'>
                            <p className='font-bold absolute inset-0 h-full w-full flex justify-center z-10 items-center text-4xl  text-white text-center'>Canada</p>
                            <img className='w-full brightness-75 object-cover h-[150px] sm:h-64 hover:scale-95 rounded-xl transition-all duration-200 ease-in-out' src="https://media.istockphoto.com/id/165028040/vector/canadian-flag-vector.jpg?s=612x612&w=0&k=20&c=UAovew36OC60VVtij55DGwpuRYm8l_c7JWdCnt5ZN7A=" alt="" />
                        </div>

                        <div onClick={e => recommended("china")} className=' cursor-pointer w-full sm:w-[500px] relative m-auto lg:w-[450px] xl:w-[500px] rounded-xl overflow-hidden shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.71)]'>
                            <p className='font-bold absolute inset-0 h-full w-full flex justify-center z-10 items-center text-4xl  text-white text-center'>China</p>
                            <img className='w-full brightness-75 object-cover h-[150px] sm:h-64 overflow-hidden rounded-xl hover:scale-95 transition-all duration-200 ease-in-out' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png" alt="" />
                        </div>

                    </div>

                </div>
            </div>
            <div className="about-section">
                <div className='text-3xl font-bold text-center w-full my-10 py-10  bg-gradient-to-b from-gray-100 to-white'>About Us</div>
                <div className="about-site my-20 flex flex-col lg:grid gap-10 lg:grid-cols-2 w-[90%] m-auto">
                    <img src="https://animationexplainers.com/wp-content/uploads/2022/04/Employee-Training.jpg" alt="" />
                    <div className="our-story self-center">
                        <h2 className='text-xl sm:text-2xl font-medium text-gray-500'>Our Story</h2>
                        <h1 className='text-3xl sm:text-6xl font-bold my-6'>Course Finder</h1>
                        <p className='my-3 text-gray-600 text-sm sm:text-base'>Our platform simplifies the process of finding, applying, and getting accepted for studying abroad. We connect international students, recruitment partners, and academic institutions all in one place.</p>
                        <p className='my-3 text-gray-600 text-sm sm:text-base'>We’ve established partnerships with over 1,500 primary, secondary, and post-secondary educational institutions. Collaborating with more than 6,500 recruitment partners, we aim to enhance diversity on campuses in Canada, the United States, the United Kingdom, Australia, and Ireland.</p>
                        <p className='my-3 text-gray-600 text-sm sm:text-base'>We have online platform for international student recruitment, aiding over 800,000 students in their educational pursuits. Recognized for our rapid growth and innovation, </p>
                        <Link to={"/contact"} reloadDocument><button className='px-6 sm:py-3 py-2 w-32 sm:w-48 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-4 my-6 border-blue-700 mr-4 text-white font-medium'>Contact</button></Link>
                    </div>
                </div>
                <div className="counter bg-gray-100 text-gray-600 flex sm:flex-row flex-col items-center gap-10 sm:gap-0 justify-around py-10">
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
            </div>
            <div className="faq-section my-20">
                <div className='text-3xl font-bold text-center w-full py-10  bg-gradient-to-b from-gray-100 to-white'>Faqs</div>
                <div className="faqs-container">
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                </div>
            </div>
            <div className="cotact-section my-20">
                <div className='text-3xl font-bold text-center w-full py-6 lg:py-10  bg-gradient-to-b from-gray-100 to-white'>Contact</div>
                <div className="contact-info lg:my-20 w-[95%] sm:w-4/5 m-auto flex flex-col lg:grid lg:grid-cols-2 gap-10">
                    <div className="info shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.59)] rounded-3xl px-6">
                        <h1 className='text-2xl sm:text-4xl font-medium py-4 sm:py-6 my-10 border-b-[1px] border-gray-600'>Keep In Touch</h1>
                        <div className="phone py-3 sm:py-6">
                            <h2 className='text-base sm:text-xl flex font-medium justify-start items-center gap-6'><BsFillTelephoneFill className='text-blue-700' />Mobile</h2>
                            <p className='text-gray-500 text-sm sm:text-base ml-10 py-2 font-medium'>+91565455454</p>
                        </div>
                        <div className="email py-3 sm:py-6">
                            <h2 className='text-base sm:text-xl flex font-medium justify-start items-center gap-6'><MdEmail className='text-blue-700' />Email</h2>
                            <p className='text-gray-500 ml-10 text-sm sm:text-base py-2 font-medium'>mk3529@gmail.com</p>
                        </div>
                        <div className="address py-3 sm:py-6">
                            <h2 className='text-base sm:text-xl flex font-medium justify-start items-center gap-6'><FaMap className='text-blue-700' />Address</h2>
                            <p className='text-gray-500 ml-10 text-sm sm:text-base py-2 font-medium'>+Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusda
                            </p>
                        </div>
                    </div>
                    <div className="contact bg-gradient-to-b mb-20 sm:mb-0 from-white to-gray-200 rounded-3xl shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.59)]  px-4">
                        <h2 className='text-2xl sm:text-4xl font-medium py-6  sm:my-10 border-b-[1px] border-gray-600'>Leave A Message</h2>
                        <form action="" className='flex flex-col items-center'>
                            <div className='flex sm:flex-row flex-col gap-6 w-full my-3'>
                                <input className='w-full py-3 sm:py-6 text-sm rounded-full px-4 outline-none border-none sm:text-lg font-medium text-gray-600' placeholder='Your Email' type="email" name='email' id='email' />
                                <input className='w-full py-3 sm:py-6 text-sm rounded-full px-4 outline-none border-none sm:text-lg font-medium text-gray-600' placeholder='Name' type="text" name='name' id='name' />
                            </div>
                            <input className='w-full py-3 sm:py-6 rounded-full px-4 my-3 outline-none border-none text-sm sm:text-lg font-medium text-gray-600' placeholder='Subject' type="text" name='subject' id='subject' />
                            <textarea className='w-full py-3 sm:py-6 max-h-56 rounded-3xl my-3 px-4 outline-none border-none text-sm sm:text-lg font-medium text-gray-600' placeholder='Message' name="message" id="message"></textarea>
                            <button type="submit" className='px-6 my-3 flex py-3 w-48 rounded-full bg-gradient-to-br hover:from-sky-400 transition-all duration-300 ease-in-out hover:to-blue-600 from-blue-700 to-sky-600 border-2 border-blue-600 mr-4 text-white font-medium'>Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home