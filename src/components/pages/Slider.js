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

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className=' max-w-[1400px] h-[780px] w-full m-auto pt-16 px-4 relative group'>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex]})`
                }}
                className='w-2/3 h-2/3 rounded-2xl bg-center
                bg-cover duration-500 m-auto  group '
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[37%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full pl-6 pr-10 pt-8 pb-8 bg-custom-color blur-sm text-white cursor-pointer
            '></div>
            <BiLeftArrow className="hidden group-hover:block absolute top-[37%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 pr-3  bg-black text-white cursor-pointer" onClick={previousSlide} size={55} />

            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[37%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full pl-6 pr-10 pt-8 pb-8 bg-custom-color blur-sm text-white cursor-pointer'>

            </div>
            <BiRightArrow className='hidden group-hover:block absolute top-[37%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 pl-3 bg-black text-white cursor-pointer' size={55} />
        </div >
    );
};

export default ProjectSlider;





