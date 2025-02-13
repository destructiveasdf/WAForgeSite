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
import Schedule from '../assets/Schedule';

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
            <section className="bg-[#191516] flex justify-center items-center pt-12 pb-4">
                <div className="bg-black/60 w-full max-w-3xl mx-4 rounded-lg p-4">
                    <div className="text-center text-white">
                    <h2 className="text-2xl font-bold mb-6">Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                        <div className="bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="text-xl">📅</span>
                            <h3 className="font-semibold text-sm">Feb 15-16</h3>
                        </div>
                        <p className="text-xs opacity-90">24-hour tech creation event</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="text-xl">📍</span>
                            <h3 className="font-semibold text-sm">DigiPen</h3>
                        </div>
                        <p className="text-xs opacity-90">9931 Willows Rd NE, Redmond, WA 98052</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="text-xl">🎓</span>
                            <h3 className="font-semibold text-sm">Grades 6-12</h3>
                        </div>
                        <p className="text-xs opacity-90">All students welcome</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <a href="https://forms.gle/aAUqE1MaGJaeZKjF9" className="bg-white text-[#191516] px-4 py-1.5 rounded-full text-sm font-bold hover:bg-gray-100 transition"> Register Now </a>
                        <a href="https://discord.gg/vjq7Tm8THp" className="border border-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-white/10 transition"> Join Discord </a>
                    </div>
                    </div>
                </div>
            </section>
            <Schedule />
            <Footer />
        </div>
    );
}
 
export default Hackathon;
