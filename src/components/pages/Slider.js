import React, { useState } from "react";
import image1 from '../pages/assets/5-6-7-8.jpeg'
import image2 from '../pages/assets/AirDnD.jpeg'
import image3 from '../pages/assets/WeatherApp.jpeg'
import image4 from '../pages/assets/fit-food.jpeg'
import image5 from '../pages/assets/teamGen.jpeg'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import { RxDotFilled } from 'react-icons/rx'
import { TbSocial } from 'react-icons/tb'

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

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const renderInfo = () => {
        switch (currentIndex) {
            case 0:
                return (

                    <div className=" px-7 py-4 bg-slate-500">

                        <button className="px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 ">

                            <p className="pr-6 flex items-center space-x-5">
                                <span className=" flex items-center space-x-5">
                                    <TbSocial className="h-8 w-8 mr-4 text-custom-color" /></span>
                                App : 5-6-7-8
                            </p>
                            <a className="pl-6 text-custom-color">Github repo link</a>
                        </button>
                    </div>

                );
            case 1:
                return (<div className="text-white">airdnd</div>);
            default:
                break;
        }
    };
    return (
        <div className=' max-w-[1400px] h-[500px] w-full m-auto  px-4 relative group '>
            <div className="text-white">

                {renderInfo()}
            </div>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex]})`
                }}
                className='w-2/3 h-full rounded-2xl bg-center
                bg-cover duration-500 m-auto
                '
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[53%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full pl-6 pr-10 pt-8 pb-8 bg-custom-color blur-sm text-white cursor-pointer 
            '></div>
            <BiLeftArrow className="hidden group-hover:block absolute top-[53%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 pr-3  bg-black text-white cursor-pointer " onClick={previousSlide} size={55} />

            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[53%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full pl-6 pr-10 pt-8 pb-8 bg-custom-color blur-sm text-white cursor-pointer'>

            </div>
            <BiRightArrow className='hidden group-hover:block absolute top-[53%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 pl-3 bg-black text-white cursor-pointer' onClick={nextSlide} size={55} />

            <div className='flex top-4 justify-center text-stone-100 w-fit m-auto mt-8
            border-custom-color border-4 border-double rounded-full
            '>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div >

    );
};

export default ProjectSlider;





