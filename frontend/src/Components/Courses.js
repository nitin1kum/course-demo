import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import axios from 'axios'
import { MdGridView } from "react-icons/md";
import { CiGrid2H } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { LiaSave } from "react-icons/lia";
import ReactPaginate from 'react-paginate';
import Loader from './BasicLoader';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    const [save, setSave] = useState(false)
    return (
        <div className='h-fit sm:h-full w-full flex flex-col justify-between bg-white rounded-lg shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.59)] hover:shadow-[0px_30px_41px_-31px_rgba(0,0,0,0.20)] transition-all duration-300 hover:scale-95'>
            <div className='flex gap-3 lg:gap-6 m-3 lg:m-6 min-h-[250px]'>
                <img className='w-16 lg:w-20 h-16 lg:h-20 object-cover' src="https://oeshighschool.com/wp-content/uploads/2021/12/Dec-Blog-Post-2.png" alt="" />
                <div className="course-information">
                    <h2 className="course-name max-h-20 lg:max-h-24 overflow-clip text-xl lg:text-2xl font-medium">{props.data.Course_Name}</h2>
                    <p className='institute-name pt-6 text-[15px] font-bold'>{props.data.Institute_Name}</p>
                    <p className='full_adress pt-1 text-sm font-medium'>{props.data.Full_Address}</p>
                    <p className='aplication-deadline pt-1 text-sm font-medium'>Deadline :- <span className='text-sky-600'>{props.data.Application_Deadline}</span></p>
                    <div className='ranking font-bold py-2 lg:py-4 text-sm'>{props.data.Ranking}</div>
                    <a className='hover:text-sky-600 text-red-500' target='_blank' href={'http://' + props.data.Website_Link}>Visit site...</a>
                </div>
            </div>
            <div>
                <div className="fees py-3 font-bold  text-xl text-center bg-gray-300 my-2">
                    {props.data.Yearly_Tuition_Fees}
                </div>
                <div className='flex px-6 text-base lg:text-lg py-2 justify-between items-center'>
                    <p className='cursor-pointer text-red-500'><Link to={"/course"} state={{ data: props.data._id }}>More...</Link></p>
                    <div className='cursor-pointer text-xl' onClick={e => setSave(!save)}>{save ? <IoMdSave /> : <LiaSave />}</div>
                </div>
            </div>
        </div>
    )
}

const Courses = () => {
    const [data, setdata] = useState([])
    const [grid, setGrid] = useState(3);
    const [sorting, setSorting] = useState("Alphabetically (a - z)");
    const [showSort, setshowSort] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 9;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);
    useEffect(() => {
        setTotalPages(1200)
    }, [])
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const takeData = (e) => {
        setSorting(e)
        if (sorting === "Alphabetically (a - z)") {
            let array = data;
            array.sort((a, b) => a.Country.localeCompare(b.Country));
            setdata(array)
        }
        if (sorting === "Alphabetically (z - a)") {
            let array = data;
            array.sort((a, b) => b.Country.localeCompare(a.Country));
            setdata(array)
        }
        if (sorting === "Newest") {
            let array = data;
            array.sort((a, b) => b.Application_Deadline.localeCompare(a.Application_Deadline));
            setdata(array)
        }
        if (sorting === "Oldest") {
            let array = data;
            array.sort((a, b) => a.Application_Deadline.localeCompare(b.Application_Deadline));
            setdata(array)
        }
    }

    async function fetchData() {
        setIsLoading(true)
        await axios.get(`https://course-demo.onrender.com/api/courses`, {
        }).then((res) => {
            try {
                setdata(res.data)
                setTotalPages(Math.ceil(res.data.length / itemsPerPage))
            }
            catch(err){
                console.log(err)
            }
        })
        setIsLoading(false)
    }

    useEffect(() => {
        document.getElementsByClassName("previous-button")[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
      </svg>`;
        document.getElementsByClassName("next-button")[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M10.59 16.59L12 18l6-6-6-6-1.41 1.41L15.17 12z"/>
      </svg>`;
        fetchData()
    }, [])



    return (
        <div className='courses-page min-h-screen bg-gradient-to-br from-pink-50 to-white'>
            <div className={showSort ? "blank-screen absolute inset-0 w-screen h-screen z-10" : "hidden"} onClick={e => {
                setshowSort(false);
            }}></div>
            <div className="contact-header h-[500px] bg-banner relative mb-20">
                <div className="bgcover absolute h-full w-full bg-gradient-to-r from-blue-700 to-sky-600 opacity-80"></div>
                <div className='w-full relative z-10 h-full flex flex-col justify-center items-start px-2 sm:px-20 py-4'>
                    <div className="hero-heading py-8 relative w-1/2">
                        <h1 className='text-6xl relative z-10 font-semibold w-4/5 text-white'>Courses</h1>
                        <div className='absolute top-0 z-0 opacity-10 left-0 font-bold flex items-center  text-white h-full w-full text-center text-[90px] sm:text-[100px]'>Course</div>
                    </div>
                    <div className='text-sm sm:text-base lg:text-lg sm:w-1/2 lg:w-1/3  text-white'>We enable individuals worldwide to pursue education abroad and reach for the highest quality of learning opportunities.</div>
                </div>
            </div>
            <Filter />
            <div className="header mt-5  flex justify-center items-center">
                <div className='flex justify-between lg:flex-row flex-col gap-6 items-start sm:items-center w-[95%] sm:w-4/5 shadow-box py-2 px-4 rounded-lg bg-white'>
                    <p className='text-lg font-medium'>Showing 1–9 of 23213 courses</p>
                    <div className='flex sm:flex-row flex-col gap-6'>
                        <div className="customize-grid hidden  sm:flex w-min bg-sky-600 items-center rounded-md px-[2px]  text-white text-xl cursor-pointer">
                            <i className={grid === 3 ? 'py-2 px-3 bg-white text-black rounded-md' : 'py-2 px-3 '} onClick={e => setGrid(3)}><MdGridView /></i>
                            <i className={grid === 1 ? 'py-2 px-3 bg-white text-black rounded-md' : 'py-2 px-3 '} onClick={e => setGrid(1)}><CiGrid2H /></i>
                        </div>
                        <div className="sorting relative">
                            <p className='border-[1px] border-black px-4 py-2 flex items-center gap-3 cursor-pointer font-medium w-64 justify-between' onClick={e => setshowSort(!showSort)}>{sorting}<IoIosArrowDown /></p>
                            <ul className={showSort ? 'absolute mt-6 bg-white z-50 shadow-box border-[1px] border-black py-2 w-full' : "hidden"}>
                                <li className='hover:bg-gray-200 px-2 cursor-pointer' onClick={e => { takeData("Newest"); setshowSort(false) }}>Newest</li>
                                <li className='hover:bg-gray-200 px-2 cursor-pointer' onClick={e => { takeData("Oldest"); setshowSort(false) }}>Oldest</li>
                                <li className='hover:bg-gray-200 px-2 cursor-pointer' onClick={e => { takeData("Alphabetically (a - z)"); setshowSort(false) }}>Alphabetically (a - z)</li>
                                <li className='hover:bg-gray-200 px-2 cursor-pointer' onClick={e => { takeData("Alphabetically (z - a)"); setshowSort(false) }}>Alphabetically (z - a)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-card flex justify-center">
                {isLoading ? <Loader /> :
                    <div className={`card-container lg:w-[95%] xl:w-4/5 sm:w-4/5 w-[95%] gap-6 sm:gap-4 lg:gap-10 lg:grid-cols-${grid} sm:grid-cols-${grid - 1} grid my-10`}>
                        {subset.map((data, index) => {
                            return (
                                <CourseCard data={data} />
                            )
                        })}
                    </div>
                }
            </div>
            <div className='pagination mt-20'>
                <ReactPaginate
                    pageCount={totalPages}
                    onPageChange={handlePageChange}
                    breakClassName={"current"}
                    previousLinkClassName={"previous-button"}
                    nextLinkClassName={"next-button"}
                    pageRangeDisplayed={1}
                    marginPagesDisplayed={1}
                />
            </div>
        </div>
    )
}

export default Courses