import React, { useRef } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import TextAndSlides from './Components/TextAndSlides';
import WhyChoose from './Components/WhyChoose';
import Testimonial from './Components/testimonial';
import Contact from './Components/contact';
import Footer from './Components/footer';
import PricingSection from './Components/PricingSection';
import SliderImage from './Components/Slider';

function App() {

  return (
    <>
      <NavBar />
      <TextAndSlides />
      <WhyChoose />
      <PricingSection/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
