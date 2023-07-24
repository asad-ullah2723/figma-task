import React, { useState } from 'react';
import 'animate.css';
import './PricingSection.css';

const PricingSection = () => {
  const [activeButton, setActiveButton] = useState('Monthly');

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);

    if (buttonId === "Monthly") {
      const element = document.querySelector('.priceCart-monthly');
      element.classList.add('animate__animated', 'animate__slideInRight');
      // const element2 = document.querySelector('.priceCart-yearly');
      // element2.classList.add('animate__animated', 'animate__fadeOutRight');
    } else {
      // const element = document.querySelector('.priceCart-monthly');
      // element.classList.add('animate__animated', 'animate__fadeOutRight');
      const element2 = document.querySelector('.priceCart-yearly');
      element2.classList.add('animate__animated', 'animate__fadeInRight');
    }


  };



  return (
    <>
      <div className='main-div'>
        <center className='first-div'>
          <div className="button-group">
            <div className='group-button'>
              <button
                className={`custom-button ${activeButton === 'Monthly' ? 'active' : ''}`}
                onClick={() => handleClick('Monthly')}
              >
                Monthly
              </button>
              <button
                className={`custom-button ${activeButton === 'Yearly' ? 'active' : ''}`}
                onClick={() => handleClick('Yearly')}
              >
                Yearly
              </button>
            </div>
          </div>
          <h2 style={{ color: "blue" }}>save 50%</h2>
          <div style={{ position: "relative" }}>
            <h1 className='bordered-text'>Our</h1>
            <h1 className='pricing'>Pricing</h1>
          </div>
        </center>
        <center className='second-div'>
          <div className='priceCart-monthly' style={{ display: activeButton === "Monthly" ? "flex" : "none" }}>
            <div className='top'>
              <img src='Vector21.png' alt="Vector21" width={'100%'} height={'100%'} />
              <img src='Vector20.png' alt="Vector20" width={'76px'} height={'77px'} style={{ position: 'absolute', top: "110px", right: "3px" }} />
              <img src='Group77.png' alt="Group77" width={'143px'} height={'143px'} style={{ position: 'absolute', top: "91px", right: "60px" }} />
              <p style={{ position: "absolute", textAlign: "center", top: "5px", left: "30%", color: "white" }}>Monthly Plan</p>
              <p style={{ position: "absolute", textAlign: "center", top: "118px", left: "40%", color: "white" }}>£ 20/<br />Month</p>
            </div>
            <div className='bottom'>
              <ul>
                <li>loren Ipsen</li>
                <li>loren Ipsen</li>
                <li>loren Ipsen</li>
                <li>loren Ipsen</li>
              </ul>
            </div>
            <center className='buttomclass'>
              <button>Buy Now</button>
            </center>
          </div>
          <div className='priceCart-yearly' style={{ display: activeButton === "Yearly" ? "flex" : "none" }}>
            <div className='top'>
              <img src='Vector21.png' alt="Vector21" width={'100%'} height={'100%'} />
              <img src='Vector20.png' alt="Vector20" width={'76px'} height={'77px'} style={{ position: 'absolute', top: "110px", right: "3px" }} />
              <img src='Group77.png' alt="Group77" width={'143px'} height={'143px'} style={{ position: 'absolute', top: "91px", right: "60px" }} />
              <p style={{ position: "absolute", textAlign: "center", top: "5px", left: "30%", color: "white" }}>Yearly Plan</p>
              <p style={{ position: "absolute", textAlign: "center", top: "118px", left: "40%", color: "white" }}>£ 10/<br />Month</p>
            </div>
            <div className='bottom'>
              <ul>
                <li>loren Ipsen</li>
                <li>loren Ipsen</li>
                <li>loren Ipsen</li>
                <li>loren Ipsen</li>
              </ul>

            </div>
            <center className='buttomclass'>
              <button>Buy Now</button>
            </center>
          </div>
        </center>
      </div>
    </>
  );
};

export default PricingSection;
