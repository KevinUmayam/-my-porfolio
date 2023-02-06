import React from 'react';
import image1 from '../pages/assets/5-6-7-8P1.png'
import image2 from '../pages/assets/AirDnD.jpeg'
import image3 from '../pages/assets/WeatherApp-P3.jpeg'
import image4 from '../pages/assets/fit-foodP2.jpeg'
import image5 from '../pages/assets/teamgen.jpeg'

const projectSlider = () => {
    const slides = [{ src: { image1 } }, { src: { image2 } }, { src: { image3 } }, { src: { image4 } }, { src: { image5 } }]

    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${image1})` }}
                className='w-2/3 h-2/3 rounded-2xl bg-center bg-cover duration-500'
            ></div>
        </div>
    );
};

export default projectSlider;





