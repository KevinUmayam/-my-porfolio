import React from 'react';

const Slider = () => {
    return (
        <div className="relative w-1/2 mx-auto my-10 overflow-hidden rounded-lg shadow-lg perspective-500">
            {/* Slides */}
            <div className="relative">
                {/* Slide 1 */}
                <div className="relative h-64 bg-blue-500 flex items-center justify-center text-white text-xl font-bold transform rotateY(0deg) transform-origin left">
                    <div>
                        <div>Slide 1</div>
                        <div className="my-4">
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 1</a>
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 2</a>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="relative h-64 bg-blue-500 flex items-center justify-center text-white text-xl font-bold transform rotateY(-120deg) transform-origin left">
                    <div>
                        <div>Slide 2</div>
                        <div className="my-4">
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 1</a>
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 2</a>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="relative h-64 bg-blue-500 flex items-center justify-center text-white text-xl font-bold transform rotateY(-240deg) transform-origin left">
                    <div>
                        <div>Slide 3</div>
                        <div className="my-4">
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 1</a>
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 2</a>
                        </div>
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="relative h-64 bg-blue-500 flex items-center justify-center text-white text-xl font-bold transform rotateY(-360deg) transform-origin left">
                    <div>
                        <div>Slide 4</div>
                        <div className="my-4">
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 1</a>
                            <a href="#" className="px-4 py-2 bg-white rounded-full shadow-lg">Link 2</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Controls */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4">
                <button className="w-8 h-8 rounded-full bg-white shadow-lg focus:outline-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-white shadow-lg focus:outline-none ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default Slider;





