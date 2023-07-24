import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const SliderImage = () => {
    const images = [
        { url: "slider1.png" },
        { url: "slider2.png" },
        { url: "slider3.png" },
    ];
    return (
        <div style={{ width: '100%', overflow:"hidden", position:"relative"}}>
            <SimpleImageSlider
                autoPlay={true}
                loop={false}
                slideDuration={1}
                autoPlayDelay={1.2}
                bgColor={{ backgroundColor: 'none' }}
                showNavs={false}
                width={600}
                height={504}
                images={images}
                showBullets={true}
              
            />
        </div>
    );
};

export default SliderImage;
