import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection';
import SectionBreak from '../assets/SectionBreak';
import video1 from "../assets/Videos/1.mp4";
import video2 from "../assets/Videos/2.mp4";
import video3 from "../assets/Videos/3.mp4";
import loopVideo from '../assets/Videos/Loop.mp4';
import ServiceSection from '../assets/Section';
import HackathonSection from '../assets/HackathonSection';
import ImageHorizontalCard from '../assets/ImageCard';
import CardSubtitle from '../assets/cardSubtitle';
import hackathon from '../assets/Pictures/hackathon.png';
import Button from '../assets/Button';
import Form from '../assets/Form';
import SocialMedias from '../assets/SocialMedia';
import Person from '../assets/Pictures/person.jpg';
import Footer from  '../assets/Footer';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Home = () => {
    const [count, setCount] = useState(0)
  const ref = useRef(null)
  const doSomething = () => {
    console.log('scrolling');
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

    return ( 
        <div className="bg-[#191516] h-[100vh] w-[100vw] overflow-x-hidden">
                    <Header />
                    
                    <VideoSection videos = {[loopVideo]} isHero = {false} element={<h1 className="z-10 text-white font-Poppins font-[200] tracking-[0.2em] text-[2em] md:text-[4em] mb-[1vh]">WELCOME TO <span className='biggerTextGlow'>WAFORGE</span></h1>} />
                    <SectionBreak />
                    <ServiceSection id="services" title="ABOUT" element1={<div className="flex flex-col justify-center items-center">
                    <ImageHorizontalCard extraStyle = " h-[600px] w-[90vw] md:h-[450px] md:w-[1200px]" title="MISSION" description="WAForge was created to give young developers an opportunity to make meaningful connections, drive innovation, and to learn" extraDescriptionStyles="text-[1.5em] " Element1={
                      <div className="mt-10">

                        <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.5em] md:text-[2em] mb-[0.2vh] md:mb-[1vh] textGlow top-0" >VISION</h1>
                        <p className="text-white text-[1.5em] font-[200] font-Montserrat">Our goal is to offer a platform for young talent across America to connect and showcase their skills in an engaging environment.</p>
                              
                      </div>
                    }
                    />
                    <ImageHorizontalCard title="VALUES" extraStyle = " h-[1000px] w-[90vw] md:h-[350px] md:w-[1200px]" Element1={
                      <div className='flex flex-col md:flex-row justify-center items-center'>
                        <div className='w-[90%] md:w-[30%] m-4'>
                          <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] mb-[0.2vh] md:mb-[1vh] textGlow top-0" >IMPACT</h1>
                          <p className="text-white text-[1em] font-[200] font-Montserrat">We here at WAForge strive to make an impact in the world and give opportunities to those who are willing to take advantage of it</p>
                        </div>
                        <div className='w-[90%] md:w-[30%] m-4'>
                          <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] mb-[0.2vh] md:mb-[1vh] textGlow top-0" >IDEAS FIRST</h1>
                          <p className="text-white text-[1em] font-[200] font-Montserrat">We value ideas greatly here at WAForge. We believe everything starts with a great idea, and we try to foster that in our community.</p>
                        </div>
                        <div className='w-[90%] md:w-[30%] m-4'>
                          <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] mb-[0.2vh] md:mb-[1vh] textGlow top-0" >COMMUNITY</h1>
                          <p className="text-white text-[1em] font-[200] font-Montserrat">WAForge was created to foster a community of tech enthusiasts who are passionate about making a difference in the world.</p>
                        </div>
                      </div>

                    }/>
                    </div>}/> 

                    <SectionBreak />
                    <section className="h-fit bg-gradient-to-br from-[#00dc82]  via-[#36e4da] to-[#16a79e] flex flex-col justify-center items-center">
                      <div className="bg-[#000000a3] h-full w-full">
                          <div className="relative flex flex-col justify-center items-center">
                              
                              

                              
                          </div>
                      </div>
                    </section>
                    
                    <Footer />
              </div>
     );
}
 
export default Home;