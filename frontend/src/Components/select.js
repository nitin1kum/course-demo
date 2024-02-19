import React, { useEffect, useRef, useState } from "react";
import "../Style/select.css"

// Icon component
const Icon = ({ isOpen }) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};

// CloseIcon component
const CloseIcon = () => {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
};

// CustomSelect component
const CustomSelect = ({ placeHolder, options, isMulti, isSearchable, onChange, align }) => {
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
        onChange({value : selectedValue, search : placeHolder})
        return selectedValue;
    };

    const removeOption = (option,e) => {
        return selectedValue.filter((o) => o.value !== e);
    };

    const onTagRemove = (e, option) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
    };

    const onItemClick = (option,e) => {
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

        return selectedValue.value === option.value;
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
        <div className="custom--dropdown-container">

            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                <div className={`dropdown-selected-value font-medium text-base capitalize whitespace-nowrap max-w-80% overflow-x-clip ${!selectedValue || selectedValue.length === 0 ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon isOpen={showMenu} />
                    </div>
                </div>
            </div>

            {
                showMenu && (
                    <div className={`dropdown-menu shadow-box alignment-${align}`}>
                        {
                            isSearchable && (
                                <div className="search-box">
                                    <input className="form-control" onChange={onSearch} value={searchValue} ref={searchRef} />
                                </div>
                            )
                        }
                        {
                            getOptions().map((option , e) => (
                                <div onClick={() => onItemClick(option ,e)} key={e} className={`dropdown-item capitalize text-base whitespace-nowrap ${isSelected(option ,e) && "selected"}`} >
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

export default CustomSelect;