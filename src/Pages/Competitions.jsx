import { useRef, useState } from 'react'
import React, { useEffect } from 'react'
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection'
import SectionBreak from '../assets/SectionBreak'
import ServiceSection from '../assets/Section'
import ImageHorizontalCard from '../assets/ImageCard'
import CardSubtitle from '../assets/cardSubtitle'
import Button from '../assets/Button'
import Footer from '../assets/Footer'
import TextRain from '../assets/textRain'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import SecondSubtitle from '../assets/secondSubtitle'
import Card from '../assets/Card'
import Banner from '../assets/banner';

const WAForgeCompetitions = () => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const doSomething = () => {
        console.log('scrolling')
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    const texts = ['Innovate', 'Create', 'Compete', 'Learn', 'Grow']

    return (
        <div className="bg-[#191516] h-[100vh] w-[100vw] overflow-x-hidden">
            <Header />
            <Banner />

            <section className="h-fit bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] flex flex-col justify-center items-center">
                <div className="bg-[#000000a3] h-full w-full">
                    <div id="content" className="relative h-full">
                        <div className="absolute hidden md:block top-0 left-0 w-full h-full">
                            <TextRain texts={texts} />
                        </div>
                        <div>
                            <div ref={ref} className="relative flex flex-col justify-center items-center">
                                <div className="m-20 p-10 pb-32 flex flex-col justify-center items-center">
                                    <div className="p-10 pb-0 text-center">
                                        <h1 className="text-white text-3xl md:text-6xl font-Poppins font-light tracking-[0.2em]">WAFORGE <span className="textGlow">COMPETITIONS</span></h1>
                                    </div>
                                    <div className="relative p-10 justify-center items-center text-center opacity-100 w-[95vw] md:w-[fit-content] h-[fit-content] bg-[#0c0c0d] top-[8vh] p-2vh rounded-[20px] ">
                                        <div className="flex flex-col md:flex-row justify-center items-center">
                                            <Card titleSize="20px" title="What" extraStyles="font-[600] text-[1.3em]" description="A series of challenges"/>
                                            <Card titleSize="20px" title="When" extraStyles="font-[600] text-[1.3em]" description="TBD - We will contact you with any updates"/>
                                            <Card titleSize="20px" title="Eligibility" extraStyles="font-[600] text-[1.3em]" description="Open to all students in grades 6-12"/>
                                        </div>
                                        <div className="flex flex-col md:flex-col justify-center items-center">
                                            <SecondSubtitle text="Join us for an exciting competition showcasing your skills!" />
                                            <Button link="https://forms.gle/Phq3hwY7d2wV6dmUA" text="Register Now" paddingx=" px-[10vw]" paddingy=" py-[1rem]" extraStyle="mt-[5vh] text-[17px] font-bold mt-[1vh]"/>
                                            <Button link="https://discord.gg/vjq7Tm8THp" text="Join Discord Community" paddingx=" px-[8.2vw]" paddingy=" py-[1rem]" extraStyle="mt-[5vh] text-[17px] font-bold mt-[20px] mb-[3vh]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionBreak />
            <ServiceSection id="faq" title="FAQ" 
                element1={
                    <div className="flex flex-col justify-center items-center">
                        <ImageHorizontalCard 
                            title="" 
                            extraStyle=" h-[800px] w-[90vw] md:h-[510px] md:w-[1200px] pb-[4vh] pt-[4vh]" 
                            Element1={
                                <div className="text-white">
                                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">Q: Who can participate?</h3>
                                            <p>A: The competition is open to all students grades 6-12, regardless of their skill or experience level.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">Q: Is there a registration fee?</h3>
                                            <p>A: No, participation in the WAForge Competitions is completely free of charge.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">Q: Where can I find more information?</h3>
                                            <p>A: The WAForge team is in the process of finalizing the details - if you sign up, you'll be contacted with any nessacary information.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">If you have any further questions, contact us (contact@waforge.org or on Social Media, linked on our home page.)</h3>
                                        </div>

                                    </div>
                                    
                                </div>
                            } 
                        /> 
                    </div>
                }
            /> 

            <SectionBreak />
            <Footer />
        </div>
    )
}

export default WAForgeCompetitions