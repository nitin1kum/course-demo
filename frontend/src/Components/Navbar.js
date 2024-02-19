import React, { useEffect, useRef, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import axios from 'axios'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { RxCrop, RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { GiTrashCan } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

    const [navBg, setNavBg] = useState(true)
    const [cartHide, setCartHide] = useState(true)
    const [ham, setHam] = useState(false)
    const [show, setShow] = useState(true)
    let scrollPos = 0;
    const navigate = useNavigate()

    async function searchBox(e) {
        let data = []
        let value = document.getElementById('search-box1').value + document.getElementById('search-box2').value;
        setTimeout(async () => {
            if (value.length > 0) {
                await axios.get(`https://course-demo.onrender.com/api/search?q=${value}`).then((res) => {
                    data = res.data
                })
                document.getElementById('search-box1').value = "";
                document.getElementById('search-box2').value = "";
                navigate("/search", { state: { id: 1, data: data, value: value } })
            }
            else {
                alert("No query entered.")
            }
        }, 500);

    }

    const handleKey = (e) => {
        if (e.keyCode === 13) {
            searchBox();
        }
    }

    const handeClick = (e) => {
        const pos = e.currentTarget;
        if (scrollPos > pos.scrollY) {
            setShow(true)
        }
        else if (scrollPos < pos.scrollY) {
            setShow(false)
        }
        scrollPos = window.scrollY
    }

    useEffect(() => {
        window.addEventListener("scroll", e => {
            if (window.scrollY < 10) {
                setNavBg(true)
            }
            else {
                setNavBg(false)
            }
            handeClick(e)
        })
        return (() => {
            window.removeEventListener('scroll', (e) => handeClick(e))
        })
    }, [navBg])

    return (
        <>
            <div className={navBg ? `navbar flex justify-between px-6 lg:pt-12 lg:py-0 py-3 fixed top-0 z-50 w-full transition-all duration-300 ease-linear bg-gradient-to-r lg:from-transparent lg:to-transparent from-blue-800 to-sky-600 text-white items-center` :
                "navbar flex justify-between bg-gradient-to-r px-6 lg:py-6 py-3 fixed top-0 z-50 w-full transition-all duration-300 ease-linear from-blue-800 to-sky-600 text-white items-center"}>
                <div className="logo h-16">
                    <img className='h-full w-full object-contain' src="images/logo.jpg" alt="" />
                </div>
                <ul className='nav-items hidden lg:flex lg:gap-6 xl:gap-8 items-center font-semibold cursor-pointer'>
                    <li className='hover:text-red-600 text-[18px] text-white transition-all duration-200'><Link reloadDocument to={"/"}>Home</Link></li>
                    <li className='hover:text-red-600 text-[18px] text-white transition-all duration-200'><Link reloadDocument to={"courses"}>Courses</Link></li>
                    <li className='hover:text-red-600 text-[18px] text-white transition-all duration-200'><Link reloadDocument to={"about"}>About Us</Link></li>
                    <li className='hover:text-red-600 text-[18px] text-white  transition-all duration-200'><Link reloadDocument to={"contact"}>Contact Us</Link></li>
                    <li className='hover:text-red-600 text-[18px] text-white  transition-all duration-200'><Link reloadDocument to={"faqs"}>Faqs</Link></li>
                </ul>
                <div className='flex justify-center items-center gap-6'>
                    <div className="search-bar hidden relative xl:w-80 lg:w-72  h-min cursor-pointer border-2 border-black bg-white rounded-lg lg:flex justify-start gap-2 items-center">
                        <input type="text" className='px-4 py-2 w-full text-black outline-none rounded-lg font-medium' onKeyDown={e => handleKey(e)} id='search-box1' />
                        <GrSearch className=' h-full w-6 text-black mr-2' onClick={e => searchBox()} />
                    </div>
                    <div className='flex gap-6 items-center justify-center'>
                        <i className='hover:rotate-[360deg] hover:text-yellow-400 transition-all duration-200 ease-linear cursor-pointer' onClick={e => setCartHide(false)}><BsCart3 className='text-2xl ' /></i>
                        <div className="ham-cross relative lg:hidden text-2xl font-black" onClick={e => setHam(!ham)}>
                            {!ham ? <RxHamburgerMenu /> : <RxCross1 />}
                        </div>
                    </div>
                </div>

            </div>
            <div className={show ? 'w-full to-blue-800 top-[59.2px] z-50 fixed from-sky-600 transition-all lg:hidden duration-500 ease-in bg-gradient-to-r py-2' : "w-full to-blue-800 transition-all duration-500 ease-in top-0 z-10 fixed lg:hidden from-sky-600 bg-gradient-to-r py-2"}>
                <div className="search-bar w-[95%] sm:w-96 m-auto relative h-min cursor-pointer border-2 border-black bg-white rounded-lg flex justify-start gap-2 items-center">
                    <input type="text" className='px-4 py-2 w-full  text-black outline-none rounded-lg font-medium' onKeyDown={e => handleKey(e)} id='search-box2' />
                    <GrSearch className=' h-full w-6 text-black mr-2' onClick={e => searchBox()} />
                </div>
            </div>
            <ul className={ham ? 'nav-items flex flex-col overflow-hidden max-h-screen transition-all duration-500 ease-in-out lg:hidden gap-8 py-8 top-[59.2px] fixed w-full z-50 items-center bg-gradient-to-r from-blue-800 to-sky-600 font-semibold cursor-pointer' :
                'nav-items flex flex-col lg:hidden max-h-0 overflow-hidden gap-8 py-0 transition-all duration-500 ease-in-out top-[59.2px] fixed w-full z-50 items-center bg-gradient-to-r from-blue-800 to-sky-600 font-semibold cursor-pointer'}>
                <li className='hover:text-red-600 text-[18px] text-white transition-all duration-200'><Link reloadDocument to={"/"}>Home</Link></li>
                <li className='hover:text-red-600 text-[18px] text-white transition-all duration-200'><Link reloadDocument to={"courses"}>Courses</Link></li>
                <li className='hover:text-red-600 text-[18px] text-white transition-all duration-200'><Link reloadDocument to={"about"}>About Us</Link></li>
                <li className='hover:text-red-600 text-[18px] text-white  transition-all duration-200'><Link reloadDocument to={"contact"}>Contact us</Link></li>
                <li className='hover:text-red-600 text-[18px] text-white  transition-all duration-200'><Link reloadDocument to={"faqs"}>Faqs</Link></li>
            </ul>
            <div
                className={
                    cartHide
                        ? " scale-x-0 z-[999] opacity-0 overflow-hidden w-screen h-screen origin-right fixed top-0 right-0 flex justify-end transition-all duration-400 "
                        : "h-screen opacity-100 z-[999] origin-right scale-x-100 cart-sidebar w-screen fixed top-0 transition-all duration-400 right-0 flex justify-end"
                }
            >
                <div
                    className="bg-black bg-opacity-60 h-full w-full absolute"
                    onClick={() => {
                        setCartHide(!cartHide);
                    }}
                ></div>
                <div className="h-full w-96 cart-popup self-end bg-white z-50 pt-10 relative ">
                    <div className="close-result absolute top-4 right-4 font-medium text-3xl cursor-pointer border-[1px] hover:border-black" onClick={e => setCartHide(true)}><IoMdClose /></div>
                    <ul className="px-3 pl-6">
                        <li className="flex justify-between my-6">
                            <div className='flex justify-start gap-4'>
                                <img
                                    className="w-16 h-16 object-cover"
                                    src="images/college.jpg"
                                    alt=""
                                />
                                <div>
                                    <h2 className="text-base font-medium">
                                        Bsc jjh hjbgjs sjnkjs
                                    </h2>
                                    <span className="text-sm font-medium text-gray-400">inlsd dkhk dkjjhkd</span>
                                    <p className="text-xs font-medium text-gray-500 leading-5">Fees : <span className='text-black'>2000</span></p>
                                </div>
                            </div>
                            <div>
                                <GiTrashCan className='text-black text-2xl' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar