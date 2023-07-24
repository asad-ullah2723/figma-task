import React from 'react';
import SliderImage from './Slider';

const TextAndSlides = () => {
    return (
        <div className="main-container">
            <div className="text-container">
                <div className="text-div">
                    <h1 style={{fontSize: '35px'}}>What is Wright Message?</h1>
                    <p style={{fontSize: '30px'}}>
                        Lorem ipsum dolor is simply dummy textof the printing and typesetting industry.
                    </p>
                    <button>Get Started</button>
                </div>
            </div>

            <div className="image-container" style={{overflow:"hidden"}}>
                <SliderImage />
            </div>
        </div>
    );
};

export default TextAndSlides;
