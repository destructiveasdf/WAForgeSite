import { BarChart3, Globe, Mail, Package, PaintBucket, Rocket, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Header from '../assets/Header'
import Footer from '../assets/Footer'
import Banner from '../assets/Banner'
import SectionBreak from '../assets/SectionBreak'
import WaforgeStuImpact from '../assets/Pictures/WAFORGEwithSTUIMPACT.png'
import Logo from '../assets/Pictures/BiggerLogo.svg'
import ImageHorizontalCard from '../assets/ImageCard'
import Card from '../assets/Card'
import Button from '../assets/Button'
import CareerForgeVid from '../assets/Videos/CFVF.mp4'
import HackForgeVid from '../assets/Videos/HackForge.mp4'
import VentureForgeVid from '../assets/Videos/VentureForge.mp4'
import BlessedVid from '../assets/Videos/Blessed.mov'
import EcoVoyageVid from '../assets/Videos/EcoVoyage.mov'
import StuImpactLogo from '../assets/Pictures/stuimpactt (1).png'
import ButtonStyle from '../assets/StylizedButton ForgeCon.jsx'
import ForgeConLogo from '../assets/Pictures/ForgeCon Logo.png'
import Promo from '../assets/PromoCodes.jsx'


export default function ForgeConPage() {
    const ref = useRef(null);   
    const scrollContainerRef = useRef(null);
    const [showLeftScroll, setShowLeftScroll] = useState(false);
    const [showRightScroll, setShowRightScroll] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftScroll(scrollLeft > 0);
            setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    

    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
                setTimeout(() => {
                    scrollContainerRef.current?.scrollBy({ left: -1000, behavior: 'smooth' });
                }, 700);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    

    return (
        <div className="w-full bg-black overflow-x-hidden">
            <Header />

            <section className="w-full pt-24 md:pt-24 lg:pt-32 relative">
                <div className="container mx-auto px-4 space-y-10 xl:space-y-16">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div ref={ref} className='flex flex-col items-center text-center w-full'>
                            <img src={ForgeConLogo} alt="WAForge Logo" className="w-[50px] h-[50px] md:w-[90px] md:h-[90px] pulse2 mt-10 md:mt-8"/>
                            

                            <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-2 mt-1 textGlow px-4 md:px-2 mx-auto max-w-[95%] md:max-w-full">FORGECON</p>
                            <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow">BUILD YOUR FUTURE</p>
                            <div className="max-w-4xl mx-auto mb-0">
                                <p className="text-gray-300 font-[200] text-lg font-Montserrat mb-16">
                                    ForgeCon is a convention focused on fostering <span className='font-[400] biggerTextGlow'>innovation, entrepreneurship, and career opportunities</span> through a series of events designed to help the next generation build their future.
                                    
                                </p>
                                
                            <p className="text-white text-[1.05em] md:text-[1.5em] mb-4 font-Montserrat tracking-[0.3em] font-[200] textGlow">REGISTER TODAY</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <Card titleSize="20px" title="WHERE" extraStyles="font-[900] text-[1.6em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<p className="font-Montserrat text-[1.15em]"> TBA </p>}/>
                            <Card titleSize="20px" title="WHEN" extraStyles="font-[900] text-[1.6em] font-[Montserrat] mb-[2vh]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<p className="font-Montserrat text-[1.15em] mt-[1vh]">OCTOBER 2025</p>} paraStyle="mt-6"/>
                            <Card titleSize="20px" title="WHY" extraStyles="font-[900] text-[1.6em]" ExtraDivStyles="!bg-black hover:scale-100"
                                description={<p className="font-Montserrat text-[1.15em]">Build projects with real impact.</p>}/>
                        </div>

                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </section>

            

            

            <div className="flex justify-center pb-20 mt-[5vh]">
                <a href="https://forms.gle/Ns24R2RS9s212eD17" target="_blank" rel="noopener noreferrer">
                    <button className='relative inline-flex items-center justify-center p-0.5 mt-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white'>
                        <span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2 tracking-[0.2em]'>
                            REGISTER NOW
                        </span>
                    </button>
                </a>
            </div>
            <SectionBreak />
            <div ref={ref} className='flex flex-col items-center text-center w-full'>
            </div>
           <div className="flex flex-col md:flex-row display-none justify-center items-center gap-[10vw]">
             <div className='flex flex-col justify-start items-start bg-black pb-20'>
                <div ref={ref} className='flex flex-col items-center text-center md:items-start md:text-left w-full'>
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 ml-0 md:ml-8 textGlow px-4 md:px-2 max-w-[95%] md:max-w-full">CAREER PASS</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow md:ml-10">ACCESS TO ONLY CAREERFORGE</p>
                        
                        <div className="max-w-[80vw] mx-auto justify-center md:justify-start text-center items-center md:items-start mb-0">
                                <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:ml-10 justify-center text-center md:text-left">
                               
                                The Career Pass offers entry into the ForgeCon Internship fair. The internship fair features stalls from leading tech companies, colleges, and organizations throughout Washington. The fair is perfect for high schoolers looking for internships and work experience. Through the career pass, you can take advantage of the opportunities at the fair to supplement your journey as a professional.


                            </p>
                           
                        <div className="flex flex-col md:flex-row justify-left items-center gap-3 md:gap-8 ml-0 md:ml-10">
                            
                            <Card titleSize="20px" title="$10" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-[50vw] md:w-[15vw] m-0 ml-0 mr-0 mt-[4vh] md:mt-0 mb-0"
                                description={<p className="font-Montserrat text-[1em]"> July 7th - 31st</p>}/>
                            <Card titleSize="20px" title="$20" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-[50vw] md:w-[15vw] m-0 ml-0 mr-0 mt-0 mb-0 opacity-50"
                                description={<p className="font-Montserrat text-[1em]"> Aug 1st - 31st </p>}/>
                            <Card titleSize="20px" title="$25" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-[50vw] md:w-[15vw] m-0 ml-0 mr-0 mt-0 mb-0 opacity-50"
                                description={<p className="font-Montserrat text-[1em]"> Sept 1st - 30th </p>}/>
                            
                        </div>
                        </div>
                        <div className='flex flex-col md:flex-row display-none justify-center items-center gap-0 ml-10'> 
                            <ButtonStyle text="LEARN MORE" thing="https://hcb.hackclub.com/donations/start/waforge?message=Career+Pass&goods=true&amount=1000" />
                            <Promo thing="Enter Promo Code" />
                        </div>

                    </div>
            </div>
            <div className="mr-20 hidden md:block ">
                    <video
                    
                    autoPlay
                    loop
                    muted
                    playsInline
                   className='size-[100%]'
                >
                    <source src={CareerForgeVid} type="video/mp4" />
                </video>
            </div> 
        </div>
        
            <div className="flex flex-col md:flex-row display-none justify-center items-center gap-[10vw]">
                
                    <video
                    
                    className='hidden md:block ml-12 w-[50vw] md:w-[30vw] h-auto'
                    autoPlay
                    loop
                    muted
                    playsInline
                   
                >
                    <source src={HackForgeVid} type="video/mp4" />
                </video>
                    
                <div className='flex flex-col justify-end items-end bg-black pb-20 mr-0'>
                    
                    <div ref={ref} className='flex flex-col items-center text-center justify-center md:items-end md:justify-end text-right w-full'>
                            
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 mr-0 md:mr-8 textGlow px-4 md:px-2 w-full break-words">INNOVATE PASS</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow md:mr-10 w-full break-words">ACCESS TO CAREERFORGE AND HACKFORGE</p>
                        
                        <div className="w-full justify-end md:justify-end text-right items-end md:items-end mb-0 mr-10">
                            <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:mr-10 justify-end text-right md:text-right w-full break-words">
                                The Innovate Pass offers entry into the ForgeCon Internship fair and Hackathon. The internship is the perfect place to gain the opportunities and inspiration to develop your skills as an inventor. The Hackathon is ideal for applying your creative and technical skills to create a new product. Additionally, winners of the hackathon will gain access to WaForge’s catalyst program, designed to bring promising ideas to the market. Through the Innovate pass, one is able to meet likeminded people, apply existing technical skills, and gain inspiration, aiding their journey as an innovator.
                            </p>
                            <div className="flex flex-col md:flex-row justify-end items-end gap-3 md:gap-8 mr-0 md:mr-10 w-full">
                                <Card titleSize="20px" title="$20" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-full md:w-[15vw] m-0 mr-0 ml-0 mt-[4vh] md:mt-0 mb-0"
                                    description={<p className="font-Montserrat text-[1em] break-words"> July 7th - 31st</p>}/>
                                <Card titleSize="20px" title="$30" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-full md:w-[15vw] m-0 mr-0 ml-0 mt-0 mb-0 opacity-50"
                                    description={<p className="font-Montserrat text-[1em] break-words"> Aug 1st - 31st </p>}/>
                                <Card titleSize="20px" title="$35" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-full md:w-[15vw] m-0 mr-0 ml-0 mt-0 mb-0 opacity-50"
                                    description={<p className="font-Montserrat text-[1em] break-words"> Sept 1st - 30th </p>}/>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row display-none justify-center items-center gap-0 mr-10'> 
                            <ButtonStyle text="LEARN MORE" thing="https://hcb.hackclub.com/donations/start/waforge?message=Innovate+Pass&goods=true&amount=2000" />
                            <Promo thing="Enter Promo Code" />
                        </div>

                                

                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row display-none justify-center items-center gap-[10vw]">
             <div className='flex flex-col justify-start items-start bg-black pb-20'>
                <div ref={ref} className='flex flex-col items-center text-center md:items-start md:text-left w-full'>
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 ml-0 md:ml-8 textGlow px-4 md:px-2 max-w-[95%] md:max-w-full">FOUNDERS PASS</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow md:ml-10">ACCESS TO CAREERFORGE AND VENTUREFORGE</p>
                        
                        <div className="max-w-[80vw] mx-auto justify-center md:justify-start text-center items-center md:items-start mb-0">
                                <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:ml-10 justify-center text-center md:text-left">
                               
                                The Founders Pass is perfect for those looking to fuel their entrepreneurial spirit. The Founders Pass offers access to the Venture Forge Competition and the Internship Fair. Venture Forge is the ideal place for participants to develop their business and communication skills, and offers opportunities to present to startup founders, venture capital directors, angel investors, and business professionals. The Internship fair gives business-oriented students the opportunities to connect with skilled people and important organizations. Through the Founders Pass, you are able to gain the crucial knowledge, experience, and connections required for success as a founder.


                            </p>
                           
                        <div className="flex flex-col md:flex-row justify-left items-center gap-3 md:gap-8 ml-0 md:ml-10">
                            
                            <Card titleSize="20px" title="$25" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-[50vw] md:w-[15vw] m-0 ml-0 mr-0 mt-[4vh] md:mt-0 mb-0"
                                description={<p className="font-Montserrat text-[1em]"> July 7th - 31st</p>}/>
                            <Card titleSize="20px" title="$35" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-[50vw] md:w-[15vw] m-0 ml-0 mr-0 mt-0 mb-0 opacity-50"
                                description={<p className="font-Montserrat text-[1em]"> Aug 1st - 31st </p>}/>
                            <Card titleSize="20px" title="$40" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-[50vw] md:w-[15vw] m-0 ml-0 mr-0 mt-0 mb-0 opacity-50"
                                description={<p className="font-Montserrat text-[1em]"> Sept 1st - 30th </p>}/>
                            
                        </div>
                        </div>
                        <div className='flex flex-col md:flex-row display-none justify-center items-center gap-0 ml-10'> 
                            <ButtonStyle text="LEARN MORE" thing="https://hcb.hackclub.com/donations/start/waforge?message=Founders+Pass&goods=true&amount=2500" />
                            <Promo thing="Enter Promo Code" />
                        </div>

                    </div>
            </div>
            <div className="mr-10 hidden md:block w-[50%] h-[50%] ">
                    <video
                    
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-[170%] h-[170%]'
                >
                    <source src={VentureForgeVid} type="video/mp4" />
                </video>
            </div> 
        </div>

        <div className="flex flex-col md:flex-row display-none justify-center items-center gap-[10vw]">
                
                    <video
                    
                    className='hidden md:block ml-12 w-[50vw] md:w-[30vw] h-auto'
                    autoPlay
                    loop
                    muted
                    playsInline
                   
                >
                    <source src={BlessedVid} type="video/webm" />
                </video>
                    
                <div className='flex flex-col justify-end items-end bg-black pb-20 mr-0'>
                    
                    <div ref={ref} className='flex flex-col items-center text-center justify-center md:items-end md:justify-end text-right w-full'>
                            
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 mr-0 md:mr-8 textGlow px-4 md:px-2 w-full break-words">FORGE PASS</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow md:mr-10 w-full break-words">ACCESS TO ALL EVENTS</p>
                        
                        <div className="w-full justify-end md:justify-end text-right items-end md:items-end mb-0 mr-10">
                            <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:mr-10 justify-end text-right md:text-right w-full break-words">
                                The Innovate Pass offers entry into the ForgeCon Internship fair and Hackathon. The internship is the perfect place to gain the opportunities and inspiration to develop your skills as an inventor. The Hackathon is ideal for applying your creative and technical skills to create a new product. Additionally, winners of the hackathon will gain access to WAForge’s catalyst program, designed to bring promising ideas to the market. Through the Innovate pass, one is able to meet likeminded people, apply existing technical skills, and gain inspiration, aiding their journey as an innovator.
                            </p>
                            <div className="flex flex-col md:flex-row justify-end items-end gap-3 md:gap-8 mr-0 md:mr-10 w-full">
                                <Card titleSize="20px" title="$40" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-full md:w-[15vw] m-0 mr-0 ml-0 mt-[4vh] md:mt-0 mb-0"
                                    description={<p className="font-Montserrat text-[1em] break-words"> July 7th - 31st</p>}/>
                                <Card titleSize="20px" title="$50" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-full md:w-[15vw] m-0 mr-0 ml-0 mt-0 mb-0 opacity-50"
                                    description={<p className="font-Montserrat text-[1em] break-words"> Aug 1st - 31st </p>}/>
                                <Card titleSize="20px" title="$55" extraStyles="font-[900] text-[1.3em] font-[Montserrat]" ExtraDivStyles="!bg-black hover:scale-100 w-full md:w-[15vw] m-0 mr-0 ml-0 mt-0 mb-0 opacity-50"
                                    description={<p className="font-Montserrat text-[1em] break-words"> Sept 1st - 30th </p>}/>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row display-none justify-center items-center gap-0 mr-10'> 
                            <ButtonStyle text="LEARN MORE" thing="https://hcb.hackclub.com/donations/start/waforge?message=Forge+Pass&goods=true&amount=4000" />
                            <Promo thing="Enter Promo Code" />
                        </div>

                                

                    </div>
                </div>
            </div>
            <SectionBreak />
            <Footer />
        </div>
        
    )
}
