import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection';
import SectionBreak from '../assets/SectionBreak';
import loopVideo from '../assets/Videos/Loop.mp4';
import ServiceSection from '../assets/Section';
import PastEventsHackathon2024 from '../assets/PastEventsHackathon2024';
import ImageHorizontalCard from '../assets/ImageCard';
import Footer from  '../assets/Footer';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import echo3d from '../assets/Pictures/Echo3d.webp';
import geogebra from '../assets/Pictures/Geogebra.png';
import nasaa from '../assets/Pictures/NASAA.png';
import SSD from '../assets/Pictures/SSD.png';
import Digipen from '../assets/Pictures/Digipen.png';
import Banner from '../assets/banner';

const PastEvents = () => {
    const [count, setCount] = useState(0)
  const ref = useRef(null)
  const doSomething = () => {
    console.log('scrolling');
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

    return ( 
        <div className="bg-[#191516] h-[100vh] w-[100vw] overflow-x-hidden">
                    <Header />
                    <Banner />
                    <VideoSection videos = {[loopVideo]} isHero = {false} element={<h1 className="z-10 text-white font-Poppins font-[200] tracking-[0.2em] text-[2em] md:text-[4em] mb-[1vh]">PAST <span className='biggerTextGlow'>WAFORGE EVENTS</span></h1>} />
                    <SectionBreak />
                    
                    <PastEventsHackathon2024 id="hackathons"/>
                    <SectionBreak />
                    
                    <section className="h-fit bg-black flex flex-col justify-center items-center pb-[14vh] pt-[4vh]">
                      <div className="bg-[#000000a3] h-full w-full">
                        <div className="relative flex flex-col justify-center items-center">
                          <h1 className="text-white text-3xl md:text-6xl font-Poppins font-light tracking-[0.2em] mt-20 text-center">WAFORGE 2024 SPONSORS</h1>
                          <ImageHorizontalCard title="" extraStyle="h-[650px] w-[90vw] md:h-[600px] md:w-[1500px]" Element1={
                            <div className="m-4 p-10 pb-32 flex flex-col justify-center items-center bg-black rounded-xl">
                              <div className="flex flex-col md:flex-row justify-center items-center">
                                <img src={echo3d} className="w-[80%] md:w-[20vw] m-4 rounded-[10px]" />
                                <img src={nasaa} className="w-[80%] md:w-[20vw] m-4 rounded-[10px]" />
                                <img src={SSD} className="w-[80%] md:w-[20vw] m-4 rounded-[10px]" />
                              </div>
                              <div className="flex flex-col md:flex-row justify-center items-center mt-10">
                                <img src={Digipen} className="w-[80%] md:w-[20vw] m-4 rounded-[10px]" />
                                <img src={geogebra} className="w-[80%] md:w-[20vw] m-4 rounded-[10px]" />
                              </div>
                            </div>
                          }/>
                        </div>
                      </div>
                    </section>
                    
                    <SectionBreak />
                    <Footer />
              </div>
     );
}
 
export default PastEvents;
