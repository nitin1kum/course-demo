import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import data from '../Data/FilterData.js'
import Loader from './BasicLoader.js'
import "../Style/select.css"
import axios from "axios"
import { Link } from 'react-router-dom';

let filterValue = {
    intake: "",
    course: "",
    country: "",
    multiplier: 1
}

const onChange = (e) => {
    if (e.search === "Courses") {
        filterValue.course = e.value
    }
    if (e.search === "Country") {
        filterValue.country = e.value
    }
    if (e.search === "Intake") {
        filterValue.intake = e.value
    }
}

const Icon = ({ isOpen }) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};


const CloseIcon = () => {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
};


const CustomSelect = ({ placeHolder, options, isMulti, isSearchable, align }) => {
    // State variables using React hooks
    const [showMenu, setShowMenu] = useState(false); // Controls the visibility of the dropdown menu
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null); // Stores the selected value(s)
    const [searchValue, setSearchValue] = useState(""); // Stores the value entered in the search input
    const searchRef = useRef(); // Reference to the search input element
    const inputRef = useRef(); // Reference to the custom select input element

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeHolder;
        }
        if (isMulti) {
            return (
                <div className="dropdown-tags">
                    {
                        selectedValue.map((option, index) => (
                            <div key={`${option}-${index}`} className="dropdown-tag-item">
                                {option}
                                <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close" >
                                    <CloseIcon />
                                </span>
                            </div>
                        ))
                    }
                </div>
            );
        }
        onChange({ value: selectedValue, search: placeHolder })
        return selectedValue;
    };

    const removeOption = (option, e) => {
        return selectedValue.filter((o) => o.value !== e);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
    };

    const onItemClick = (option, e) => {
        let newValue;
        if (isMulti) {
            if (selectedValue.findIndex((o) => o.value === option) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
    };
    const isSelected = (option) => {
        if (isMulti) {
            return selectedValue.filter((o) => o.value === option.value).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue === option;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter(
            (option) =>
                option.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        );
    };

    return (
        <div className="custom--dropdown-container m-auto relative lg:w-max w-full">

            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input lg:w-[200px] w-full">
                <div className={`dropdown-selected-value font-medium text-base capitalize whitespace-nowrap max-w-80% overflow-x-clip ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon isOpen={showMenu} />
                    </div>
                </div>
            </div>

            {
                showMenu && (
                    <div className={`dropdown-menu shadow-box left-1/2 -translate-x-1/2 lg:w-[480px] w-full sm:w-fit min-w-[300px]`}>
                        {
                            isSearchable && (
                                <div className="search-box ">
                                    <input className="form-control" onChange={onSearch} value={searchValue} ref={searchRef} />
                                </div>
                            )
                        }
                        {
                            getOptions().map((option, e) => (
                                <div onClick={() => onItemClick(option, e)} key={e} className={`dropdown-item capitalize text-base whitespace-nowrap ${isSelected(option, e) && "select"}`} >
                                    {option}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
}

const Filter = () => {

    const [results, setResults] = useState(false);
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [multiplier, setMultiplier] = useState(1)

    async function filter() {
        if (filterValue.intake.length && filterValue.country.length && filterValue.course.length) {
            setResults(true);
            setIsLoading(true)
            setResult([])
            await axios.get(`http://localhost:8000/api/filter`, {
                params: filterValue
            }).then((res) => {
                setResult(res.data)
            })
            setIsLoading(false)
        }
    }

    return (
        <div className="filter-courses flex flex-col items-center justify-center relative">
            <div className="filter-tags-container bg-white relative z-20 lg:flex lg:flex-row grid w-[95%] sm:w-4/5 sm:grid-cols-2 grid-cols-1 px-6 justify-center sm:gap-10 gap-4 xl:w-4/5 lg:w-[95%] mt-4 py-4 shadow-box rounded-lg">
                <CustomSelect
                    placeHolder="Country"
                    options={data.Country}
                    isMulti={false}
                    isSearchable={true}
                    align="left"
                />
                <CustomSelect
                    placeHolder="Courses"
                    options={data.courses}
                    isMulti={false}
                    isSearchable={true}
                    align="right"
                /><CustomSelect
                    placeHolder="Intake"
                    options={data.intake}
                    isMulti={false}
                    isSearchable={true}
                    align="right"
                />
                <button className='py-2 w-52 lg:w-32 m-auto items-center border-2 border-black rounded-lg bg-sky-500 text-white cursor-pointer' onClick={e => {
                    filter();
                    setMultiplier(1);
                }}>Filter</button>
            </div>
            <div className={results ? "filter-results bg-white scroll mt-16 w-[95%] sm:w-4/5 h-fit overflow-x-clip border-2 rounded-lg border-black  px-4 relative py-4" : "hidden"}>
                <div className="pagination  absolute bottom-4 right-4 font-medium text-sm sm:text-base py-1 sm:py-2 px-2 sm:px-4 bg-yellow-400">{result.length > 5 * multiplier ? 5 * multiplier : result.length}/{result.length}</div>
                <div className="close-result absolute top-4 right-4 font-medium text-3xl cursor-pointer border-[1px] hover:border-black" onClick={e => setResults(false)}><IoMdClose /></div>
                {isLoading ? <Loader /> : ""}
                {
                    result.length === 0 && !isLoading ?
                        <div className='w-full text-center text-xl font-bold py-12 flex items-center justify-center'>No data to show</div>
                        :
                        <ol type='1' className='list-decimal max-h-[600px] overflow-y-scroll px-2 sm:px-4 mt-6 sm:mt-10 bg-white'>
                            {
                                (result.map((data, index) => {
                                    return (
                                        index < 5 * multiplier ?
                                        
                                            (<Link to={"/course"} state={{data : data._id}}>
                                                <li className='py-2 font-medium  lg:px-6 transition-all gap-2 duration-200 cursor-pointer my-2 hover:bg-gray-200 flex sm:flex-row flex-col justify-between  items-start sm:items-center w-full text-base border-dashed border-b-[1px] border-gray-200'>
                                                    <div>
                                                        <h1 className='text-sm sm:text-lg lg:text-xl font-bold'>{data.Course_Name}</h1>
                                                        <p className=' text-[10px] leading-6 sm:text-sm lg:text-base'>{data.Institute_Name}</p>
                                                    </div>
                                                    <div className='text-xs sm:text-base flex sm:flex-col lg:flex-row gap-2 justify-center items-center whitespace-nowrap'>Fees : <span>{data.Yearly_Tuition_Fees}</span></div>
                                                </li>
                                            </Link>)
                                            :
                                            ""
                                    )
                                }))
                            }
                        </ol>
                }

                <div className='flex justify-center'>
                    <span className={result.length > 0 ? ' py-2 sm:py-3 px-4 sm:px-8 hover:bg-gray-500 hover:text-white transition-all duration-200 mt-10 bg-gray-200 text-base sm:text-lg font-medium cursor-pointer' : "hidden"} onClick={e => setMultiplier(multiplier + 1)} >Show More</span>
                </div>
            </div>
        </div>
    )
}

export default Filter