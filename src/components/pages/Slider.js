import React, { useState } from "react";
import image1 from '../pages/assets/5-6-7-8.jpeg'
import image2 from '../pages/assets/AirDnD.jpeg'
import image3 from '../pages/assets/WeatherApp.jpeg'
import image4 from '../pages/assets/fit-food.jpeg'
import image5 from '../pages/assets/teamGen.jpeg'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'


const ProjectSlider = () => {
    const slides = [image1, image2, image3, image4, image5];
    const [currentIndex, setCurrentIndex] = useState(0);


    const previousSlide = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const prevSlide = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div> <h1 className='flex justify-center text-center mb-6'>Project Display</h1></div>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex]})`
                }}
                className='w-2/3 h-2/3 rounded-2xl bg-center bg-cover duration-500 m-auto '
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BiLeftArrow onClick={previousSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BiRightArrow size={30} />
            </div>
        </div >
    );
};

export default ProjectSlider;





