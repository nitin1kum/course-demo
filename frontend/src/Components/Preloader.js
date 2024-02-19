import React from 'react'

const Preloader = () => {
    return (
        <div className='fixed z-[9999] flex w-screen h-screen justify-center items-center bg-indigo-950'>
            <div className="container m-auto">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
            </div>
        </div>
    )
}

export default Preloader