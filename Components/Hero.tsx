"use client"
import React from "react"
import { CustomButton } from "."



const Hero = () => {


    const handleScrool = () => {
        console.log("e");
        
    }

    return (
        <div className="hero">
            <div className='flex-1 pt-36 padding-x'>
                <h1 className="hero_title">
                    Find, book or rent a car - quickly and easily!
                </h1>

                <p className="hero_subtitle">
                    Streamline your car rental experience tiwh our effortless booking proccess.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles='bg-primary-blue 
                    text-white rounded-full mt-10'
                    handleClick={handleScrool}
                />
            </div>
        </div>
    )
}

export default Hero