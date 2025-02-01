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
import SecondSubtitle from '../assets/secondSubtitle'
import Card from '../assets/Card'
import Button from '../assets/Button'

const Hackathon = () => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    
    useEffect(() => {
        // Add Google Tag Manager script dynamically
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16742883036";
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16742883036');
        `;
        document.head.appendChild(script2);

        return () => {
            // Cleanup the script tags when the component unmounts
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    const doSomething = () => {
        console.log('scrolling');
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
      const countDownDate = new Date("Feb 15, 2025 00:00:00").getTime()
      const timer = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
        if (distance < 0) {
          clearInterval(timer)
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        }
      }, 1000)
      return () => clearInterval(timer)
    }, [])

    return ( 
        <div className="bg-[#191516] h-[100vh] w-[100vw] overflow-x-hidden">
            <Header />
            <VideoSection
                videos={[loopVideo]}
                isHero={false}
                element={
                <div className="z-10 text-white font-Poppins flex flex-col items-center">
                    <h1 className="font-[200] tracking-[0.2em] text-[2em] md:text-[4em] mb-[1vh]">
                    <span className="biggerTextGlow">WAFORGE 2025</span>
                    </h1>
                    <div className="mt-8 text-[1.5em] md:text-[2.5em] font-[200] tracking-[0.2em]">
                        <p className="biggerTextGlow">COUNTDOWN TO HACKATHON:</p>
                    </div>
                    <div className="mt-8 text-2xl md:text-3xl">
                    <div className="flex justify-center space-x-6 md:space-x-10">
                        <div className="text-center">
                        <span className="text-4xl md:text-6xl font-bold">{timeLeft.days}</span>
                        <p className="text-sm md:text-lg mt-2">Days</p>
                        </div>
                        <div className="text-center">
                        <span className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</span>
                        <p className="text-sm md:text-lg mt-2">Hours</p>
                        </div>
                        <div className="text-center">
                        <span className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</span>
                        <p className="text-sm md:text-lg mt-2">Minutes</p>
                        </div>
                        <div className="text-center">
                        <span className="text-4xl md:text-6xl font-bold">{timeLeft.seconds}</span>
                        <p className="text-sm md:text-lg mt-2">Seconds</p>
                        </div>
                    </div>
                    </div>
                </div>
                }
            />
            <SectionBreak />
            <section className="h-fit bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] flex flex-col justify-center items-center">
                <div className="bg-[#000000a3] h-full w-full">
                    <div id="content" className="relative h-full">
                        <div>
                            <div ref={ref} className="relative flex flex-col justify-center items-center">
                                <div className="m-20 p-10 pb-32 flex flex-col justify-center items-center">
                                    <div className="relative p-10 justify-center items-center text-center opacity-100 w-[95vw] md:w-[fit-content] h-[fit-content] bg-[#0c0c0d] top-[0vh] p-2vh rounded-[20px] ">
                                        <div className="flex flex-col md:flex-row justify-center items-center">
                                            <Card titleSize="20px" title="What/When" extraStyles="font-[600] text-[1.3em]" description="A hackathon is a fun, high-energy event where people create cool tech projects together! It will be held February 15th-16th."/>
                                            <Card titleSize="20px" title="Where" extraStyles="font-[600] text-[1.3em]" description="TBD - We will confirm the venue soon, join the discord to stay updated!"/>
                                            <Card titleSize="20px" title="Eligibility" extraStyles="font-[600] text-[1.3em]" description="Open to all students in grades 6-12"/>
                                        </div>
                                        <div className="flex flex-col md:flex-col justify-center items-center">
                                            <SecondSubtitle text="Join us for an exciting hackathon to showcase your skills!" />
                                            <Button link="https://forms.gle/aAUqE1MaGJaeZKjF9" text="Register Now" paddingx=" px-[10vw]" paddingy=" py-[1rem]" extraStyle="mt-[5vh] text-[17px] font-bold mt-[1vh]"/>
                                            <Button link="https://discord.gg/vjq7Tm8THp" text="Join Discord Community" paddingx=" px-[8.2vw]" paddingy=" py-[1rem]" extraStyle="mt-[5vh] text-[17px] font-bold mt-[20px] mb-[3vh]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                
            <Footer />
        </div>
    );
}
 
export default Hackathon;
