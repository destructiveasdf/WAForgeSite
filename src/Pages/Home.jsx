import { useRef, useState } from 'react'
import React, { useEffect } from 'react'
import Header from '../assets/Header'
import VideoSection from '../assets/VideoSection'
import SectionBreak from '../assets/SectionBreak'
import video1 from "../assets/Videos/1.mp4"
import video2 from "../assets/Videos/2.mp4"
import video3 from "../assets/Videos/3.mp4"
import video4 from "../assets/Videos/4.mp4"
import ServiceSection from '../assets/Section'
import HackathonSection from '../assets/HackathonSection'
import ImageHorizontalCard from '../assets/ImageCard'
import CardSubtitle from '../assets/cardSubtitle'
import hackathon from '../assets/Pictures/hackathon.png'
import Button from '../assets/Button'
import Form from '../assets/Form'
import ForgeConInterest from '../assets/ForgeConInterest'
import SocialMedias from '../assets/SocialMedia'
import Logo from '../assets/Pictures/BiggerLogo.svg'
import Person from '../assets/Pictures/person.jpg'
import Person1 from '../assets/Pictures/Profiles/ArthurProfile.png'
import Person2 from '../assets/Pictures/Profiles/SiddarthProfile.png'
import Person3 from '../assets/Pictures/Profiles/ArnavProfile.png'
import Person4 from '../assets/Pictures/Profiles/RahulProfile.jpg'
import Person5 from '../assets/Pictures/Profiles/MadhavProfile.png'
import StuImpactLogo from '../assets/Pictures/stuimpactt (1).png'
import Footer from  '../assets/Footer'
import TextRain from '../assets/textRain'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import SecondSubtitle from '../assets/secondSubtitle'
import Card from '../assets/Card'
import Banner from '../assets/Banner'
import WaforgeCatalyst from '../assets/Pictures/waforgecatalyst.png'
import WaforgeStuImpact from '../assets/Pictures/WAFORGEwithSTUIMPACT.png'
import ForgeConLogo from '../assets/Pictures/ForgeCon Logo.png'
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
                
                <button onClick={() => doSomething()} className='relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white '><span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2'>Join Us</span></button>
            }/>
            <SectionBreak />

             <div className='flex flex-col justify-center items-center bg-black pb-20'>
                <ImageHorizontalCard extraStyle="h-[1500px] w-[90vw] md:h-[900px] md:w-[1400px] p-5" title="" Element1={
                    <div ref={ref} className='flex flex-col items-center text-center w-full'>
                        <p className="text-gray-400 font-Montserrat text-lg tracking-widest mb-0 ml-0  tracking-[0.5em] textGlow">INTRODUCING</p>
                        <img src={ForgeConLogo} alt="WAForge Logo" className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] pulse2 mt-10 md:mt-8"/>
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-2 mt-1 textGlow px-4 md:px-2 mx-auto max-w-[95%] md:max-w-full mt-4">FORGECON</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow">BUILD YOUR FUTURE</p>
                        
                        <div className="max-w-3xl mx-auto mb-0">
                            <p className="text-gray-300 font-[200] text-lg font-Montserrat mb-[6vh]">
                                ForgeCon is a convention focused on fostering <span className='font-[400] biggerTextGlow'>innovation, entrepreneurship, and career</span> opportunities through a series of events designed to help the next generation <span className='font-[400] biggerTextGlow'>build their future</span>.
                            </p>
                        </div>
                        <p className="text-white text-[1em] md:text-[1.2em] mb-3 font-Montserrat tracking-[0.3em] font-[500] biggerTextGlow">JOIN AN EVENT</p>


                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <Card titleSize="20px" title="CAREERFORGE" extraStyles="font-[600] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<p> Washington's largest internship fair. </p>}/>
                            <Card titleSize="20px" title="VENTUREFORGE" extraStyles="font-[600] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<p> Pitch your business plan to VCs and CEOs</p>} paraStyle="mt-6"/>
                            <Card titleSize="20px" title="HACKFORGE" extraStyles="font-[600] text-[1.27em]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<p> Build projects with real impact.</p>}/>
                        </div>

                        <Button link="/ForgeCon" text="SIGN UP" paddingx=" px-[3rem]" paddingy=" py-[0.5rem]" extraStyle="mt-[2vh] font-[500] tracking-[0.3em]"/>


                    </div>
                }/>
            </div>

            <SectionBreak />

            <div className='flex flex-col justify-center items-center bg-black pb-20'>
                <ImageHorizontalCard extraStyle="h-[2600px] w-[90vw] md:h-[1350px] md:w-[1400px] p-5" title="" Element1={
                    <div ref={ref} className='flex flex-col items-center text-center w-full'>
                        <img src={Logo} alt="WAForge Logo" className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] pulse mt-10 md:mt-5"/>
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-2 mt-1 textGlow px-4 md:px-2 mx-auto max-w-[95%] md:max-w-full">CATALYST</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow">TURNING POTENTIAL INTO PROGRESS</p>
                        
                        <div className="max-w-3xl mx-auto mb-0">
                            <p className="text-gray-300 font-[200] text-lg font-Montserrat mb-16">
                                Catalyst is a program to help student developers put their product into the market. WAForge provides <span className="font-[500] biggerTextGlow">marketing, financial,</span> and <span className="font-[500] biggerTextGlow">development</span> aid to projects that get accepted into this program.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <Card titleSize="20px" title="INTERESTED?" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<Button link="/Catalyst" text="LEARN MORE" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
                            <Card titleSize="20px" title="HAVE A PROJECT?" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<Button link="https://forms.gle/ni8KQCdJobN5q2mo6" text="APPLY" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
                            <Card titleSize="20px" title="HAVE QUESTIONS?" extraStyles="font-[600] text-[1.27em]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<Button link="mailto:contact@waforge.org" text="CONTACT US" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
                        </div>
                            <p className="text-white text-[1.5em] mb-4 font-Montserrat tracking-[0.3em] font-[200] mt-7">CURRENT PROJECTS</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <Card titleSize="20px" title="JETQUEST" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 md:w-[350px] md:h-[225px]"
                               link={"https://jetquest.vercel.app/"} description={"Explore cities through challenges, earn points, and compete with friends on leaderboards."}/>
                            <Card titleSize="20px" title="BLESSED" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 md:w-[350px] md:h-[225px]"
                               link={"https://blesseddemo.vercel.app/"} description={"Blessed automates growth, posting, and rewards, allowing creators to focus on what they do best"}/>
                               
                            <Card titleSize="20px" title="ECOVOYAGE" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100 md:w-[350px]"
                               link={"https://eco-voyage-official.vercel.app/"} description={"An app to compare travel options by emissions, cost, and time for eco-conscious choices."}/>
                        </div>
                        <p className='text-white text-[0.7em] md:text-[0.7em] mt-[10em] mb-1 font-Montserrat tracking-[0.3em] font-[200] textGlow'>Powered By</p>
                        <img src={StuImpactLogo} alt="WAForge Catalyst Logo" className='w-[150px] h-[35px] md:w-[150px] md:h-[35px] mb-10'/>
                    </div>
                }/>
            </div>
            <SectionBreak />
            <div className='flex flex-col justify-center items-center bg-black pb-20'>
                <ImageHorizontalCard extraStyle="h-[750px] w-[90vw] p-5 md:h-[800px] md:w-[1400px]" title="" Element1={
                    <div ref={ref} className='flex flex-col items-center text-center w-full pb-20'>
                        <img src={Logo} alt="WAForge Logo" className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] pulse mt-10 md:mt-24"/>
                        <h1 className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.1em] text-[2em] md:text-[4em] mb-2 mt-1 textGlow px-4 md:px-2 mx-auto max-w-[95%] md:max-w-full">INTERNSHIPS</h1>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow">JOIN OUR MISSION, SUPPORT OUR CAUSE</p>
                        <p className="text-white font-Montserrat font-[300] text-[1.2em] max-w-3xl mx-auto mb-8 px-4">
                        Whether you're a developer, designer, leader, or manager WAForge has a place for you! This is an opportunity to gather real-world work experience while gaining volunteer hours!
                        </p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <Card titleSize="20px" title="WANT THE DETAILS?" extraStyles="font-[600] text-[1.3em]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<Button link="/Internship" text="LEARN MORE" paddingx=" px-[2.5rem]" paddingy=" py-[0.35rem]" extraStyle="mt-[2vh] font-[500]"/>}/>
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
                                <img src={Person} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                                <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Ruhi G.</h1>
                                <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Co-Founder</p>
                            </div>
                            
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center'>
                            <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                                <img src={Person1} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                                <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Arthur Z.</h1>
                                <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Chief Technology Officer</p>
                            </div>
                            <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                                <img src={Person} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                                <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Abhay S.</h1>
                                <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Outreach Manager</p>
                            </div>
                            <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                                <img src={Person} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                                <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Nitin M.</h1>
                                <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Marketing Manager</p>
                            </div>
                            
                            
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center'>
                            <div className='w-[90%] md:w-fit m-4 mx-20 flex flex-col justify-center items-center'>
                                <img src={Person5} alt="WAForge Team" className="h-[150px] w-[150px] rounded-[50%] border-[2px] border-[#00ffc8]"/>
                                <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.2em] md:text-[1.2em] textGlow mt-[15px]" >Madhav S.</h1>
                                <p className="text-white text-[1em] font-[200] font-Montserrat mt-[7px]">Content & Communication Manager</p>
                            </div>
                        </div>
                        <div>
                            <Button isOpenDiv={false} link="/About" text = "Learn More" paddingx = {" px-[3rem]"} paddingy = " py-[0.7rem]" extraStyle="font-[500]"/>
                        </div>
                    </div>
                } />
            </div>} />

            <SectionBreak />
            <Footer />
        </div>
     );
}
 
export default Home;
