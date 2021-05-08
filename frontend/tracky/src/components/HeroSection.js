import React from 'react'
import Hero from './Hero';
import img from '../img_man.jpg'

const HeroSection = () => {
    return (
        <div className="min-h-screen max-h-screen max-w-screen-xlg ml-auto mr-auto flex justify-center items-center flex-col lg:flex-row">
            <Hero />
            <img src={img} alt="A Cool img" className="" />
        </div>
    )
}

export default HeroSection
