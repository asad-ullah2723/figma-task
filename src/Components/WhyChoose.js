import React from 'react';
import './WhyChoose.css'; // Make sure to create a corresponding CSS file for this component
import PricingSection from './PricingSection';
import { AiTwotoneSetting } from 'react-icons/ai';
const WhyChoose = () => {
    return (
        <>
            <div className='main-divv'>
                <img className='rightsideimage' src='Group428.png' alt='Group428' />
                <img className='leftsideimage' src='Group428.png' alt='Group428' />
                <img className='leftsideimage2' src='Group428.png' alt='Group428' />
                <center>
                    <h1 style={{ color: "#337FFF", marginTop:'50px' }}>Why Choose Us?</h1>
                </center>

                <div className="why-choose-container">
                    <div className="cart">
                        <div className="cart-rotate" >
                            <div className="cart-content" >
                                <center >
                               <div style={{color:"yellow", fontSize:"50px"}}> <AiTwotoneSetting/></div>
                                    <h3 style={{ textDecoration: 'underline', textUnderlineOffset: '10px', textDecorationColor: 'blue' }}>Highly Secured</h3>
                                    <p>Lorem ipsum dolor is simply dummy textof the printing and typesetting industry.</p>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="cart2">
                        <div className="cart-rotate" >
                            <div className="cart-content" >
                                <center >
                                <div style={{color:"green", fontSize:"50px"}}> <AiTwotoneSetting/></div>
                                    <h3 style={{ textDecoration: 'underline', textUnderlineOffset: '10px', textDecorationColor: 'blue' }}>Trust Worthy</h3>
                                    <p>Lorem ipsum dolor is simply dummy textof the printing and typesetting industry.</p>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="cart-rotate" >
                            <div className="cart-content" >
                                <center >
                                <div style={{color:"pink", fontSize:"50px"}}> <AiTwotoneSetting/></div>
                                    <h3 style={{ textDecoration: 'underline', textUnderlineOffset: '10px', textDecorationColor: 'blue' }}>Performance</h3>
                                    <p>Lorem ipsum dolor is simply dummy textof the printing and typesetting industry.</p>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <PricingSection /> */}

            </div>
        </>
    );
};

export default WhyChoose;
