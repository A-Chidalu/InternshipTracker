import React from 'react'

const Hero = () => {
    return (
        <div className="mb-2 ml-4">
            <div className="mb-2.5">
                <h1 className="text-6xl lg:text-8xl lg:text-left font-inter font-bold text-center">Track your internships</h1>
                <h1 className="text-6xl lg:text-8xl lg:text-left font-inter font-bold text-red-500 text-center">like its nothing.</h1>
            </div>
            <div className="flex justify-center lg:justify-start">
                <span className="mr-2 bg-red-500 rounded-lg hover:bg-red-700 px-3 py-2 font-inter font-bold text-white lg:text-4xl cursor-pointer">Get Started</span>
                <span className="border-gray-500 border-2 rounded-lg px-3 py-2 font-inter font-bold text-black lg:text-4xl cursor-pointer hover:bg-gray-200">Learn More</span>
            </div>
        </div>
    )
}

export default Hero
