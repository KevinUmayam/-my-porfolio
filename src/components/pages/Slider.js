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
                    <div className="flex items-center sm:flex-row flex-col ">
                        <p className="sm:pr-6 text-white sm:flex items-center sm:space-x-5 ">
                            <span className=" items-center sm:space-x-5">
                                <TbSocial className=" invisible sm:visible h-8 w-8 mr-4 text-white " /></span>
                            App : 5-6-7-8
                        </p>
                        <div className="text-custom-color text-2xl invisible sm:visible">|</div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/KevinUmayam/5-6-7-8"
                            className="sm:pl-6 text-custom-color  
                            opacity-90
                            hover:opacity-100 
                            text-base
                            hover:text-lg
                            duration-1000
                            hover:duration-100
                            ">Github   repo link</a>
                    </div>
                );
            case 1:
                return (
                    <div className="flex items-center sm:flex-row flex-col ">
                        <p className="sm:pr-6 text-white sm:flex items-center sm:space-x-5 ">
                            <span className=" items-center sm:space-x-5">
                                <TbSocial className=" invisible sm:visible h-8 w-8 mr-4 text-white " /></span>
                            App : AirDnD
                        </p>
                        <div className="text-custom-color text-2xl invisible sm:visible">|</div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/KevinUmayam/airDND-1"
                            className="sm:pl-6 text-custom-color  
                            opacity-90
                            hover:opacity-100 
                            text-base
                            hover:text-lg
                            duration-1000
                            hover:duration-100
                            ">Github   repo link</a>
                    </div>
                ); case 2:
                return (
                    <div className="flex items-center sm:flex-row flex-col ">
                        <p className="sm:pr-6 text-white sm:flex items-center sm:space-x-5 ">
                            <span className=" items-center sm:space-x-5">
                                <TbSocial className=" invisible sm:visible h-8 w-8 mr-4 text-white " /></span>
                            App : Weather Dashboard
                        </p>
                        <div className="text-custom-color text-2xl invisible sm:visible">|</div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/KevinUmayam/Weather-App"
                            className="sm:pl-6 text-custom-color  
                            opacity-90
                            hover:opacity-100 
                            text-base
                            hover:text-lg
                            duration-1000
                            hover:duration-100
                            ">Github   repo link</a>
                    </div>
                ); case 3:
                return (
                    <div className="flex items-center sm:flex-row flex-col ">
                        <p className="sm:pr-6 text-white sm:flex items-center sm:space-x-5 ">
                            <span className=" items-center sm:space-x-5">
                                <TbSocial className=" invisible sm:visible h-8 w-8 mr-4 text-white " /></span>
                            App : Fit-Food
                        </p>
                        <div className="text-custom-color text-2xl invisible sm:visible">|</div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/KevinUmayam/Fit-Food"
                            className="sm:pl-6 text-custom-color  
                            opacity-90
                            hover:opacity-100 
                            text-base
                            hover:text-lg
                            duration-1000
                            hover:duration-100
                            ">Github   repo link</a>
                    </div>
                ); case 4:
                return (
                    <div className="flex items-center sm:flex-row flex-col ">
                        <p className="sm:pr-6 text-white sm:flex items-center sm:space-x-5 ">
                            <span className=" items-center sm:space-x-5">
                                <TbSocial className=" invisible sm:visible h-8 w-8 mr-4 text-white " /></span>
                            App : Team Genrator
                        </p>
                        <div className="text-custom-color text-2xl invisible sm:visible">|</div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/KevinUmayam/Team_Profile_Generator"
                            className="sm:pl-6 text-custom-color  
                            opacity-90
                            hover:opacity-100 
                            text-base
                            hover:text-lg
                            duration-1000
                            hover:duration-100
                             ">Github   repo link</a>
                    </div>
                );
            default:
                break;
        }
    };
    return (
        <div className="bg-black h-full pb-28">
            <div >
                <div className="grid gap-8 items-start justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1
                                bg-custom-color rounded-lg blur opacity-75
                                group-hover:opacity-100 transition duration-1000
                                group-hover:duration-200
                            "></div>
                        <button className=" relative px-7 sm:py-4 pb-4 bg-black rounded-lg leading-none ">
                            {renderInfo()}
                        </button>
                    </div>
                </div>
            </div>

            <div className=' max-w-[1400px] h-[500px] w-full m-auto bg-black px-4 relative group pb-10 '>
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex]})`
                    }}
                    className='  mt-8 w-2/3 h-full rounded-2xl bg-center
                bg-cover duration-500 m-auto
                '
                ></div>
                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full pl-6 pr-10 pt-8 pb-8 bg-custom-color blur-sm text-white cursor-pointer 
            '></div>
                <BiLeftArrow className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 pr-3  bg-black text-white cursor-pointer " onClick={previousSlide} size={55} />

                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full pl-6 pr-10 pt-8 pb-8 bg-custom-color blur-sm text-white cursor-pointer'>

                </div>
                <BiRightArrow className='hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 pl-3 bg-black text-white cursor-pointer' onClick={nextSlide} size={55} />

                <div className='flex justify-center text-stone-100 w-fit m-auto mt-8 
            border-custom-color border-4 border-double rounded-full bg-black 
            '>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer '

                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div >
        </div>

    );
};

export default ProjectSlider;





