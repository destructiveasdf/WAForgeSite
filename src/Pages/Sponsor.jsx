import { useRef, useState } from 'react'
import React, { useEffect } from 'react'
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection'
import SectionBreak from '../assets/SectionBreak'
import video1 from "../assets/Videos/1.mp4"
import video2 from "../assets/Videos/2.mp4"
import video3 from "../assets/Videos/3.mp4"
import loopVideo from '../assets/Videos/Loop.mp4'
import ServiceSection from '../assets/Section'
import HackathonSection from '../assets/HackathonSection'
import ImageHorizontalCard from '../assets/ImageCard'
import CardSubtitle from '../assets/cardSubtitle'
import hackathon from '../assets/Pictures/hackathon.png'
import Button from '../assets/Button'
import Form from '../assets/Form'
import SocialMedias from '../assets/SocialMedia'
import Person from '../assets/Pictures/person.jpg'
import Footer from  '../assets/Footer'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import echo3d from '../assets/Pictures/Echo3d.webp'
import geogebra from '../assets/Pictures/Geogebra.png'
import nasaa from '../assets/Pictures/NASAA.png'
import SSD from '../assets/Pictures/SSD.png'
import Digipen from '../assets/Pictures/Digipen.png'
import Ryzlink from '../assets/Pictures/Ryzlink.png'
import Banner from '../assets/Banner'

const Sponsor = () => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const doSomething = () => {
        console.log('scrolling');
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    return ( 
        <div className="bg-[#191516] min-h-[100vh] w-full overflow-x-hidden">
            <Header />
            <Banner />
            
            <VideoSection videos = {[loopVideo]} isHero = {false} element={<div><h1 className="z-10 text-white font-Poppins font-[200] tracking-[0.2em] text-[2em] md:text-[4em] mb-[1vh]">SUPPORT <span className='biggerTextGlow'>WAFORGE</span></h1> <Button link = "https://hcb.hackclub.com/donations/start/waforge" text = "Support WAForge" paddingx = {" px-[4rem]"} paddingy = " py-[0.75rem]" extraStyle="mt-[3vh]"/></div>} />
            <SectionBreak />
            <section className="min-h-fit bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] flex flex-col justify-center items-center">
                <div className="bg-[#000000a3] h-full w-full">
                    <div className="relative flex flex-col justify-center items-center px-4">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-6xl font-Poppins font-light tracking-[0.1em] md:tracking-[0.2em] mt-10 md:mt-20 text-center px-4">
                            WAFORGE 2025 SPONSORS
                        </h1>
                        <div className="mx-4 sm:mx-8 md:mx-20 my-10 md:my-20 p-4 sm:p-6 md:p-10 flex flex-col justify-center items-center bg-black rounded-xl w-full max-w-6xl min-h-[200px]">
                            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
                                <img 
                                    src={Digipen} 
                                    className="w-full max-w-[200px] sm:max-w-[250px] md:w-[20vw] md:max-w-[300px] rounded-[10px] object-contain"
                                    alt="Digipen sponsor logo"
                                />
                                <img 
                                    src={Ryzlink} 
                                    className="w-full max-w-[200px] sm:max-w-[250px] md:w-[20vw] md:max-w-[300px] rounded-[10px] object-contain"
                                    alt="Ryzlink sponsor logo"
                                />
                            </div>
                        </div>
                        
                        <h1 className="text-white text-2xl sm:text-3xl md:text-6xl font-Poppins font-light tracking-[0.1em] md:tracking-[0.2em] mt-10 md:mt-20 text-center px-4">
                            WAFORGE 2024 SPONSORS
                        </h1>
                        <div className="mx-4 sm:mx-8 md:mx-20 my-10 md:my-20 p-4 sm:p-6 md:p-10 pb-16 md:pb-32 flex flex-col justify-center items-center bg-black rounded-xl w-full max-w-6xl">
                            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-10">
                                <img 
                                    src={echo3d} 
                                    className="w-full max-w-[200px] sm:max-w-[180px] md:w-[20vw] md:max-w-[250px] rounded-[10px] object-contain"
                                    alt="Echo3D sponsor logo"
                                />
                                <img 
                                    src={nasaa} 
                                    className="w-full max-w-[200px] sm:max-w-[180px] md:w-[20vw] md:max-w-[250px] rounded-[10px] object-contain"
                                    alt="NASAA sponsor logo"
                                />
                                <img 
                                    src={SSD} 
                                    className="w-full max-w-[200px] sm:max-w-[180px] md:w-[20vw] md:max-w-[250px] rounded-[10px] object-contain"
                                    alt="SSD sponsor logo"
                                />
                            </div>

                            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
                                <img 
                                    src={Digipen} 
                                    className="w-full max-w-[200px] sm:max-w-[200px] md:w-[20vw] md:max-w-[280px] rounded-[10px] object-contain"
                                    alt="Digipen sponsor logo"
                                />
                                <img 
                                    src={geogebra} 
                                    className="w-full max-w-[200px] sm:max-w-[200px] md:w-[20vw] md:max-w-[280px] rounded-[10px] object-contain"
                                    alt="GeoGebra sponsor logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
 
export default Sponsor;