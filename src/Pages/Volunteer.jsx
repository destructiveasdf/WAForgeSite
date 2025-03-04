import { useRef, useState } from 'react'
import React, { useEffect } from 'react';
import Header from '../assets/Header'
import SectionBreak from '../assets/SectionBreak';
import Button from '../assets/Button';
import Card from '../assets/Card';
import Banner from '../assets/Banner';
import Footer from '../assets/Footer';

const Volunteer = () => {
  const positionsRef = useRef(null)
  
  const scrollToPositions = () => {
    console.log('scrolling');
    positionsRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="bg-[#191516] min-h-[100vh] w-full overflow-x-hidden">
      <Header />
      <Banner />
      <div className="flex flex-col justify-center items-center bg-black pt-24 pb-24 w-full">
        <div className="bg-black p-4 md:p-8 h-auto w-[95%] md:w-[90%] max-w-[1500px]">
          <div className="flex flex-col items-center text-center w-full">
            <h1 className="text-white font-Poppins font-[700] tracking-[0.1em] md:tracking-[0.2em] text-[1.6em] md:text-[3em] mb-2 textGlow px-4 mx-auto max-w-[95%] md:max-w-full">INTERNSHIPS</h1>
            <p className="text-white font-Montserrat font-[300] tracking-[0.2em] text-[1em] mb-8 px-2">JOIN OUR MISSION, SUPPORT OUR CAUSE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full mb-0 -ml-16 md:ml-0 px-2 md:px-0 md:pr-14">
              <Card titleSize="20px" title="EARN HOURS" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[150px] w-full px-4" description="Get volunteer hours for school, college applications, or personal growth" />
              <Card titleSize="20px" title="BUILD SKILLS" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[150px] w-full px-4" description="Develop real-world skills in tech, leadership, and communication" />
              <Card titleSize="20px" title="MAKE AN IMPACT" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[150px] w-full px-4" description="Help create a positive change in your community and beyond" />
              <Card titleSize="20px" title="WIN AWARDS" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[150px] w-full px-4" description="Opportunity to earn recognition for your contributions" />
            </div>
            <button onClick={scrollToPositions} className='relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white '>
              <span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2'>EXPLORE POSITIONS</span>
            </button>
          </div>
        </div>
      </div>

      <SectionBreak />

      <div ref={positionsRef} className="flex flex-col justify-center items-center bg-black w-full">
        <h1 className="text-white font-Montserrat font-[700] tracking-[0.2em] text-[2em] md:text-[3em] my-8 px-4 text-center">OPEN POSITIONS</h1>
        <div className="w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#00ffc8] to-transparent mb-8"></div>
        <div className="bg-black p-4 md:p-8 w-[95%] md:w-[90%] max-w-[1200px] mb-8">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.5em] mb-1 px-2">PROJECT MANAGER</h2>
            <p className="text-white font-Montserrat font-[300] text-[0.9em] mb-4 px-2">2-3 HOURS PER WEEK</p>
            <h3 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1em] mb-4 px-2">RESPONSIBILITIES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full -ml-16 md:ml-0 px-2 md:px-0 md:pr-20">
              <Card titleSize="20px" title="MONITOR" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Monitor project progress, coordinate team members, and ensure deadlines are met" />
              <Card titleSize="20px" title="HIRE" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Review applications and assist with recruiting new team members" />
              <Card titleSize="20px" title="REPORT" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Provide regular updates to leadership on project status and goals" />
            </div>
            <a href="https://forms.gle/KdPWoBy7tfb83j586" target="_blank" rel="noopener noreferrer">
              <Button text="APPLY NOW" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[3vh] font-[500]" />
            </a>
          </div>
        </div>

        <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffc8] to-transparent my-8"></div>
        <div className="bg-black p-4 md:p-8 w-[95%] md:w-[90%] max-w-[1200px] mb-8">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.5em] mb-1 px-2">WEB/APP DEVELOPER</h2>
            <p className="text-white font-Montserrat font-[300] text-[0.9em] mb-4 px-2">4-6 HOURS PER WEEK</p>
            <h3 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1em] mb-4 px-2">RESPONSIBILITIES</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 w-full mr-16 md:mr-0 px-2 md:px-0 md:pr-16">
              <div className="w-full md:w-[45%]">
                <Card titleSize="20px" title="CODE" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Write clean, efficient code and implement new features for our web platforms" />
              </div>
              <div className="w-full md:w-[45%]">
                <Card titleSize="20px" title="COLLABORATE" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Work with designers and other developers to create seamless user experiences" />
              </div>
            </div>
            <a href="https://forms.gle/RbBvAMxPMg5aVeLMA" target="_blank" rel="noopener noreferrer">
              <Button text="APPLY NOW" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[3vh] font-[500]" />
            </a>
          </div>
        </div>
        <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#00ffc8] to-transparent my-8"></div>
        <div className="bg-black p-4 md:p-8 w-[95%] md:w-[90%] max-w-[1200px] mb-16">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.5em] mb-1 px-2">GRAPHIC DESIGNER</h2>
            <p className="text-white font-Montserrat font-[300] text-[0.9em] mb-4 px-2">3-4 HOURS PER WEEK</p>
            <h3 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1em] mb-4 px-2">RESPONSIBILITIES</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full -ml-16 md:ml-0 px-2 md:px-0 md:pr-16">
              <Card titleSize="20px" title="VISUALIZE" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Create engaging visual content for our website, social media, and marketing materials" />
              <Card titleSize="20px" title="DESIGN" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Develop brand assets and maintain design consistency across platforms" />
              <Card titleSize="20px" title="COLLABORATE" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 h-auto min-h-[180px] w-full px-4" description="Work with the marketing team to create effective visual communications" />
            </div>
            <a href="https://forms.gle/LRU37F2oVj4xeFbQ8" target="_blank" rel="noopener noreferrer">
              <Button text="APPLY NOW" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[3vh] font-[500]" />
            </a>
          </div>
        </div>
      </div>
      <SectionBreak />
      <Footer />
    </div>
  )
}

export default Volunteer