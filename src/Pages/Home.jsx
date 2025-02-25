import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection';
import SectionBreak from '../assets/SectionBreak';
import video1 from "../assets/Videos/1.mp4";
import video2 from "../assets/Videos/2.mp4";
import video3 from "../assets/Videos/3.mp4";
import video4 from "../assets/Videos/4.mp4";
import ServiceSection from '../assets/Section';
import HackathonSection from '../assets/HackathonSection';
import ImageHorizontalCard from '../assets/ImageCard';
import CardSubtitle from '../assets/cardSubtitle';
import hackathon from '../assets/Pictures/hackathon.png';
import Button from '../assets/Button';
import Form from '../assets/Form';
import SocialMedias from '../assets/SocialMedia';
import Logo from '../assets/Pictures/BiggerLogo.svg';
import Person from '../assets/Pictures/person.jpg';
import Person1 from '../assets/Pictures/Profiles/ArthurProfile.png'
import Person2 from '../assets/Pictures/Profiles/SiddarthProfile.png'
import Person3 from '../assets/Pictures/Profiles/ArnavProfile.png'
import Person4 from '../assets/Pictures/Profiles/RahulProfile.png'
import Person5 from '../assets/Pictures/Profiles/MadhavProfile.png'
import Footer from  '../assets/Footer';
import TextRain from '../assets/textRain';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import SecondSubtitle from '../assets/secondSubtitle';
import Card from '../assets/Card';
import Banner from '../assets/Banner';
import WaforgeCatalyst from '../assets/Pictures/waforgecatalyst.png'
const Home = () => {
    const [count, setCount] = useState(0)
  const ref = useRef(null)
  const doSomething = () => {
    console.log('scrolling');
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }
    const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];
    return ( 
        <div className="bg-[#191516] h-[100vh] w-[100vw] overflow-x-hidden">
          <Header />
          <Banner />
          
          <VideoSection shouldChange={true} videos = {[video1, video2, video3, video4]} isHero = {true} element={
          
          <button onClick={() => doSomething()} className='relative inline-flex items-center justify-center p-0.5 mt-10 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white '><span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2'>Get Started</span></button>
          
          
          }/>
          <SectionBreak />

          <div className='flex flex-col justify-center items-center bg-black pb-20'>
            <ImageHorizontalCard extraStyle="h-[1400px] w-[90vw] md:h-[1000px] md:w-[1400px]" title="" Element1={
              <div ref={ref} className='flex flex-col items-center text-center w-full'>
                <p className="text-gray-400 text-sm tracking-widest mb-0 ml-1">INTRODUCING</p>
                <img src={WaforgeCatalyst} alt="WAForge Logo" className="w-108 h-58 mb-6"/>
                <p className="text-white text-2xl mb-16">TURNING POTENTIAL INTO PROGRESS</p>
                
                <div className="max-w-3xl mx-auto mb-0">
                  <p className="text-gray-300 text-lg">
                    Catalyst is a program to help student developers put their product into the market. WAForge provides <span className="text-[#00dc82]">marketing, financial,</span> and <span className="text-[#00dc82]">development</span> aid to projects that get accepted into this program.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                  <Card titleSize="20px" title="INTERESTED?" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100"
                    description={<Button link="/Catalyst" text="LEARN MORE" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
                  <Card titleSize="20px" title="HAVE A PROJECT?" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100"
                    description={<Button link="https://forms.gle/ni8KQCdJobN5q2mo6" text="APPLY" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
                  <Card titleSize="20px" title="HAVE QUESTIONS?" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100"
                    description={<Button link="mailto:contact@waforge.org" text="CONTACT US" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
                </div>
              </div>
            }/>
          </div>

          <SectionBreak />
          <ServiceSection id="services" title="SERVICES" 
            element1={
              <div className='flex flex-col justify-center items-center'>
                <ImageHorizontalCard extraStyle=" h-[350px] w-[90vw] md:h-[370px] md:w-[1200px]" subTitle={<CardSubtitle />} Element1={<Form paddingx="px-10" paddingy="py-2"/>} title="NEWSLETTER" description="Join our newsletter to stay up to date with the latest news and events in tech and business. Our newsletter also offers exclusive content and updates on upcoming events and activities at WAForge." />
                <ImageHorizontalCard title="CONNECT WITH US" extraStyle = " h-[300px] w-[90vw] md:h-[370px] md:w-[1200px]" description="Follow us on our social media to stay updated on everything WAForge!" Element2={<Button link = "https://hcb.hackclub.com/donations/start/waforge" text = "Support WAForge" paddingx = {" px-[4rem]"} paddingy = " py-[0.5rem]" extraStyle="mt-[0vh]"/>} Element1={<SocialMedias />} />
              </div>
            }
          />

          <SectionBreak />
          <ServiceSection id="services" title="OUR TEAM" element1={<div className="flex flex-col justify-center items-center">
          
          
          <ImageHorizontalCard title="" extraStyle = " h-[2050px] w-[90vw] md:h-[1000px] md:w-[1200px] pb-[4vh] pt-[4vh]" Element1 = {
            
            <div>
              <div className='flex flex-col md:flex-row justify-center items-center mt-5'>
                <div className='w-[90%] md:w-fit m-4 mx-[6rem] flex flex-col justify-center items-center'>
                  <img src={Person4} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Rahul P.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Founder</p>
                </div>
                <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                  <img src={Person2} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Siddarth T.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Co-Founder</p>
                </div>
                <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                  <img src={Person1} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Arthur Z.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Technology Organizer</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                  <img src={Person3} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Arnav K.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Outreach Manager</p>
                </div>
                <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                  <img src={Person} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Nitin M.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Marketing Manager</p>
                </div>
                <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                  <img src={Person} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Evan G.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Hackathon Manager</p>
                </div>
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                  <img src={Person5} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                  <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Madhav D.</h1>
                  <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Content & Communication Manager</p>
                </div>
              </div>

              <Button isOpenDiv={false} link="/About" text = "Learn More" paddingx = {" px-[3rem]"} paddingy = " py-[0.7rem]" extraStyle="mt-[5vh] font-[500]"/>
            </div>
          } /> </div>}/> 
          

          <SectionBreak />
          <Footer />
    </div>
     );
}
 
export default Home;