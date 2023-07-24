import React from "react";
import TestimonialSlider from "./testimonialSliders";
import './testimonial.css';
export default function Testimonial() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(testimonial-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          overflow:"hidden",
          
        }}
      >
        <div
          className="tmein-div"
        >
          <div
           className="ttext"
          >
            Testimonial
          </div>
          <div style={{ display:"flex", flexDirection:"row",paddingTop:"30px"
           }}>
            <div  className="tone-div">Thay Trust Us!</div>
            <div  style={{ width:"80%"}}>
            
              <TestimonialSlider/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
