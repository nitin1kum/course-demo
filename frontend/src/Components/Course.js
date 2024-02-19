import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from './BasicLoader';

const Course = () => {
    const location = useLocation();
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    async function getData(){
        setIsLoading(true)
        await axios.get(`https://course-demo.onrender.com/api/course/data/${location.state.data}`).then((res)=>{
            let data = res.data;
            let address  = data.Full_Address.split(",");
            address = address[address.length-1];
            data.Country = address;
            setData(data)
        })
        setIsLoading(false)
    }
    useEffect(() => {
        window.scrollTo(0,0);
      getData()
    }, [])
    
    return (
        <>
            <div className="course-header h-[500px] bg-banner relative">
                <div className="bgcover absolute h-full w-full bg-gradient-to-r from-blue-700 to-sky-600 opacity-80"></div>
                <div className='w-full relative z-10 h-full flex flex-col justify-center items-start px-4 lg:px-20 py-4'>
                    <div className="hero-heading py-8 relative w-1/2">
                        <h1 className='text-6xl relative z-10 font-semibold w-4/5 text-white'>Course</h1>
                        <div className='absolute top-0 z-0 opacity-10 left-0 font-bold flex items-center  text-white h-full w-full text-center text-[90px] lg:text-[100px]'>Course</div>
                    </div>
                    <div className='text-sm sm:text-base lg:text-lg sm:w-1/2 lg:w-1/3  text-white'>{data.Course_Name}</div>
                </div>
            </div>
            {isLoading ? <Loader /> : 
            <div className="course-detail flex flex-col lg:flex-row gap-10 py-20 px-0 sm:px-6  bg-opacity-60 ">
                <div className="college-interface lg:w-80 w-[95%] m-auto flex lg:flex-col flex-col sm:items-center sm:flex-row flex-shrink-0 rounded-xl overflow-hidden shadow-[0px_25px_50px_-31px_rgba(0,0,0,0.71)] bg-white h-max">
                    <img className='sm:w-1/2 lg:h-56 h-56 sm:h-fit lg:w-full object-cover sm:object-contain lg:object-cover' src="images/college.jpg" alt="" />
                    <div className='my-10 px-4'>
                        <h2 className='university text-xl py-2 font-bold'>{data.Institute_Name}</h2>
                        <p className="country text-sm font-medium py-1 text-gray-400">{data.Country}</p>
                        <p className="institute-website text-sm text-blue-600 font-medium underline"><a target='_blank' href={'http://'+data.Website_Link}>{data.Website_Link}</a></p>
                        <div className='bg-sky-50 my-4 py-3 px-2 rounded-xl'>
                            <h3 className='text-base lg:text-lg font-semibold'>Full Address</h3>
                            <p className='capitalize text-xs lg:text-sm text-gray-500 font-medium'>{data.Full_Address}</p>
                        </div>
                        <div className="ranking bg-sky-50 my-4 py-3 px-2 rounded-xl">
                            <h3 className="text-base lg:text-lg font-semibold">Ranking</h3>
                            <p className='text-xs lg:text-sm text-gray-500 font-medium'>{data.Ranking}</p>
                        </div>
                        <div className="remark bg-sky-50 my-4 py-3 px-2 rounded-xl text-xs font-medium text-gray-500">
                           {data.Remarks}
                        </div>
                    </div>
                </div>
                <div className="course-details w-full">
                    <div className="course-header mb-5">
                        <h2 className='font-semibold text-gray-600 px-6'>Course Details</h2>
                    </div>
                    <div className="info shadow-[0px_25px_50px_-31px_rgba(0,0,0,0.71)] pb-8 w-full rounded-xl">
                        <h1 className='text-xl mb-1 font-bold px-6'>{data.Course_Name}</h1>
                        <p className='w-full px-6 h-4 sm:h-fit break-before-auto text-xs sm:text-base overflow-clip '><a href={data.Course_Url} target='_blank' className='course-site text-blue-500 underline'>{data.Course_Url}</a></p>
                        <div className="fees flex sm:flex-row flex-col gap-4 justify-start sm:justify-between items-start sm:items-center my-3 sm:my-3 px-6">
                            <div className="application-fees flex gap-6 items-center">
                                <h3 className='text-sm font-medium text-gray-400'>Application Fees:</h3>
                                <p className='text-xl font-medium'>{data.Application_Fees}</p>
                            </div>
                            <div className="tution-fees flex gap-6 items-center">
                                <h3 className='text-sm font-medium text-gray-400'>Yearly Tutuion Fees:</h3>
                                <p className='text-xl font-medium'>{data.Yearly_Tuition_Fees}</p>
                            </div>
                        </div>
                        <div className="appliction-details grid grid-cols-3 gap-6 xl:flex justify-between my-3 border-t-[3px] py-6 px-6 border-gray-200">
                            <div className="intake">
                                <h3 className=' font-medium text-sm text-gray-400'>Intake</h3>
                                <p className='font-medium '>{data.Intakes}</p>
                            </div>
                            <div className="duration">
                                <h3 className=' font-medium text-sm text-gray-400'>Duration</h3>
                                <p className='font-medium '>{data.Duration}</p>
                            </div>
                            <div className="campus">
                                <h3 className=' font-medium text-sm text-gray-400'>Campus</h3>
                                <p className='font-medium '>{data.Campus}</p>
                            </div>
                            <div className="city">
                                <h3 className=' font-medium text-sm text-gray-400'>Country</h3>
                                <p className='font-medium '>{data.Country}</p>
                            </div>
                            <div className="deadline">
                                <h3 className=' font-medium text-sm text-gray-400 whitespace-nowrap'>Application Deadline</h3>
                                <p className='font-medium '>{data.Application_Deadline}</p>
                            </div>
                        </div>
                        <div className="test-eligibility rounded-lg border-2 overflow-hidden w-[95%] my-4 mx-auto border-gray-200">
                            <h2 className='bg-sky-200 px-2 sm:px-6 py-2 font-semibold'>Eligibility</h2>
                            <div className="test-container grid grid-cols-1 sm:grid-cols-3 grid-rows-2 gap-6 p-6">
                                <div>
                                    <h3 className=' font-medium text-sm text-gray-400'>IELTS Overall:</h3>
                                    <p className='font-medium '>{data.IELTS_Overall > 0 ? data.IELTS_Overall : "NA"}</p>
                                </div>
                                <div>
                                    <h3 className=' font-medium text-sm text-gray-400'>IELTS No Band Less Than:</h3>
                                    <p className='font-medium '>{data.IELTS_no_Band_Less_Than > 0 ? data.IELTS_no_Band_Less_Than : "NA"}</p>
                                </div>
                                <div>
                                    <h3 className=' font-medium text-sm text-gray-400'>TOEFL Overall:</h3>
                                    <p className='font-medium '>{data.TOEFL_Overall > 0 ? data.TOEFL_Overall : "NA"}</p>
                                </div>
                                <div>
                                    <h3 className=' font-medium text-sm text-gray-400'>TOEFL iBT No Bond Less Than:</h3>
                                    <p className='font-medium '>{data.TOEFL_iBT_No_Bond_Less_Than > 0 ? data.TOEFL_iBT_No_Bond_Less_Than : "NA"}</p>
                                </div>
                                <div>
                                    <h3 className=' font-medium text-sm text-gray-400'>PTE Overall:</h3>
                                    <p className='font-medium '>{data.PTE_Overall > 0 ? data.PTE_Overall : "NA"}</p>
                                </div>
                                <div>
                                    <h3 className=' font-medium text-sm text-gray-400'>PTE No Bond less Than:</h3>
                                    <p className='font-medium '>{data.PTE_No_Bond_Less_Than > 0 ? data.PTE_No_Bond_Less_Than : "NA"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="standardized-test rounded-lg border-2 w-[95%]  mx-auto overflow-hidden my-4  border-gray-200">
                            <h2 className='bg-sky-200 px-6 py-2 font-semibold' >Standarized Test Requirement</h2>
                            <div className="tests grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-6 p-6">
                                <div>
                                    <h2 className=' font-medium text-sm text-gray-400'>GRE Score:</h2>
                                    <p className='font-medium '>{"GRE_Score" in data ? (data.GRE_Score > 0 ? data.GRE_Score : "NA") : "NA"} </p>
                                </div>
                                <div>
                                    <h2 className=' font-medium text-sm text-gray-400'>GMAT Score:</h2>
                                    <p className='font-medium '>{"GMAT_Score" in data ? (data.GMAT_Score > 0 ? data.GMAT_Score : "NA") : "NA"}</p>
                                </div>
                                <div>
                                    <h2 className=' font-medium text-sm text-gray-400'>ACT Score:</h2>
                                    <p className='font-medium '>{"ACT_Score" in data ? (data.ACT_Score > 0 ? data.ACT_Score : "NA"): "NA"}</p>
                                </div>
                                <div>
                                    <h2 className=' font-medium text-sm text-gray-400'>SAT Score:</h2>
                                    <p className='font-medium '>{"GRE_Score" in data ? (data.SAT_Score > 0 ? data.SAT_Score : "NA") : "NA"}</p>
                                </div>
                                <div>
                                    <h2 className=' font-medium text-sm text-gray-400'>DET Score:</h2>
                                    <p className='font-medium '>{"DET_Score" in data ? (data.DET_Score > 0 ? data.DET_Score : "NA"): "NA"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="gpa rounded-lg border-2 overflow-hidden  w-[95%] my-4 mx-auto border-gray-200">
                            <h2 className='bg-sky-200 px-6 py-2 font-semibold'>Grade Point Average</h2>
                            <p className=' font-medium text-sm text-gray-400 p-6'>{data.GPA}.</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Course
