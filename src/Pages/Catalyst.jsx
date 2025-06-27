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
import JetQuestVid from '../assets/Videos/JetQuest.mov'
import BlessedVid from '../assets/Videos/Blessed.mov'
import EcoVoyageVid from '../assets/Videos/EcoVoyage.mov'
import StuImpactLogo from '../assets/Pictures/stuimpactt (1).png'
import ButtonStyle from '../assets/StylizedButton.jsx'
export default function CatalystPage() {
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

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

    const benefits = [
        {
            icon: <DollarSign className="w-12 h-12 text-[#00dc82]" />,
            title: "$10,000 Advertisement Credit",
            description: "Boost your visibility with our advertising credit package",
        },
        {
            icon: <PaintBucket className="w-12 h-12 text-[#00dc82]" />,
            title: "Landing Page + Brand Kit",
            description: "Get a customized landing page and complete brand kit",
        },
        {
            icon: <Mail className="w-12 h-12 text-[#00dc82]" />,
            title: "Mailing List",
            description: "Build and manage your audience with our mailing list tools",
        },
        {
            icon: <BarChart3 className="w-12 h-12 text-[#00dc82]" />,
            title: "Fundraising",
            description: "Access powerful fundraising tools and resources",
        },
        {
            icon: <Package className="w-12 h-12 text-[#00dc82]" />,
            title: "Platform Release",
            description: "Covered platform release fees for your project",
        },
        {
            icon: <Rocket className="w-12 h-12 text-[#00dc82]" />,
            title: "Market Testing",
            description: "Comprehensive app testing and market analysis",
        },
        {
            icon: <Globe className="w-12 h-12 text-[#00dc82]" />,
            title: "Website Hosting",
            description: "Covered URL and website hosting fees",
        },
    ]

    return (
        <div className="w-full bg-black overflow-x-hidden">
            <Header />

            <section className="w-full pt-24 md:pt-24 lg:pt-32 relative">
                <div className="container mx-auto px-4 space-y-10 xl:space-y-16">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div ref={ref} className='flex flex-col items-center text-center w-full'>
                            <img src={Logo} alt="WAForge Logo" className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] pulse mt-10 md:mt-5"/>

                            <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-2 mt-1 textGlow px-4 md:px-2 mx-auto max-w-[95%] md:max-w-full">CATALYST</p>
                            <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow">TURNING POTENTIAL INTO PROGRESS</p>
                            <div className="max-w-4xl mx-auto mb-0">
                                <p className="text-gray-300 font-[200] text-lg font-Montserrat mb-16">
                                    Catalyst is a program to help student developers put their product into the market. WAForge provides <span className="font-[500] biggerTextGlow">marketing, financial,</span> and <span className="font-[500] biggerTextGlow">development</span> aid to projects that get accepted into this program.
                                    
                                </p>
                                
                            <p className="text-white text-[1.05em] md:text-[1.5em] mb-4 font-Montserrat tracking-[0.3em] font-[200] textGlow">OUR SERVICES</p>
                            </div>
                            <div >
                                <style jsx>{`
                                    .hide-scrollbar {
                                        -ms-overflow-style: none;
                                        scrollbar-width: none;
                                    }
                                    .hide-scrollbar::-webkit-scrollbar {
                                        display: none;
                                    }
                                    .scroll-container {
                                        scroll-behavior: smooth;
                                    }

                                    @keyframes bounce-horizontal {
                                        0%, 100% { transform: translateX(0); }
                                        50% { transform: translateX(10px); }
                                    }
                                `}</style>

                                <div className="max-w-[80vw] md:max-w-7xl  mx-auto relative">
                                    {showLeftScroll && (
                                        <button
                                            onClick={() => scroll('left')}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-black to-transparent pl-2 pr-6 py-20 group"
                                        >
                                            <ChevronLeft className="w-8 h-8 text-[#00dc82] animate-bounce-horizontal opacity-75 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    )}

                                    {showRightScroll && (
                                        <button
                                            onClick={() => scroll('right')}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-black to-transparent pr-2 pl-6 py-20 group"
                                        >
                                            <ChevronRight className="w-8 h-8 text-[#00dc82] animate-bounce-horizontal opacity-75 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    )}

                                    <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10"></div>
                                    <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10"></div>

                                    <div
                                        ref={scrollContainerRef}
                                        onScroll={handleScroll}
                                        className="overflow-x-auto hide-scrollbar scroll-container"
                                    >
                                        <div className="flex space-x-6 min-w-max p-4">
                                            {benefits.map((benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="w-[300px] p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-[#00dc82]/20 
                                                            hover:border-[#00dc82]/40 transition-all duration-300 hover:transform hover:scale-105
                                                            hover:shadow-[0_0_20px_rgba(0,255,149,0.237)]"
                                                >
                                                    <div className="flex flex-col items-center text-center space-y-4">
                                                        {benefit.icon}
                                                        <h3 className="text-white text-lg font-semibold">{benefit.title}</h3>
                                                        <p className="text-gray-400">{benefit.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            

            

            <div className="flex justify-center pb-20 mt-[10vh]">
                <a href="https://forms.gle/Ns24R2RS9s212eD17" target="_blank" rel="noopener noreferrer">
                    <button className='relative inline-flex items-center justify-center p-0.5 mt-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 duration-[0.1s] hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] dark:text-white'>
                        <span className='font-Montserrat font-light relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] px-10 py-2'>
                            Apply Now
                        </span>
                    </button>
                </a>
            </div>
            <SectionBreak />
            <div ref={ref} className='flex flex-col items-center text-center w-full'>
            <p className="text-white text-[1.05em] md:text-[1.5em] mb-4 mt-[10vh] font-Montserrat tracking-[0.3em] font-[200] textGlow">CURRENT PROJECTS</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[15vw]">
                <div className='flex flex-col justify-start items-start bg-black pb-20'>
                    <div ref={ref} className='flex flex-col items-center text-center md:items-start md:text-left w-full'>
                            <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                            <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 ml-0 md:ml-9 textGlow px-4 md:px-2 max-w-[95%] md:max-w-full">JETQUEST</p>
                            <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow ml-0 md:ml-10">CATALYST PROJECT 1</p>
                            
                            <div className="max-w-[80vw] mx-auto justify-center md:justify-start text-center items-center md:items-start mb-0">
                                <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:ml-10 justify-center text-center md:text-left">
                               
                                    A social exploration platform where people can explore cities and completing challenges and events. These challenges give out points and you users can compare with friends on the leaderboard. JetQuest stands out by transforming traditional travel planning into an engaging, gamified experience that significantly cuts down planning time and boosts user interaction
                                </p>
                               
                            <ButtonStyle text="LEARN MORE" thing="https://jetquest.vercel.app/" />
                            </div>
                        </div>
                </div>
                <div className="mr-20 hidden md:block">
                    <video
                    
                    autoPlay
                    loop
                    muted
                    playsInline
                   
                >
                    <source src={JetQuestVid} type="video/webm" />
                </video>
                    </div>                            

            </div>
            <div className="flex flex-col md:flex-row display-none justify-center items-center gap-[10vw]">
                
                    <video
                    
                    className='hidden md:block ml-12'
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
                            <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 md:mr-5 textGlow px-4 md:px-2 max-w-[95%] md:max-w-full">BLESSED</p>
                            <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow md:mr-10 ">CATALYST PROJECT 2</p>
                            
                            <div className="max-w-[80vw]  mb-0 ">
                                <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:mr-10 justify-center text-center md:text-right">
                                Blessed is an AI-powered growth platform that helps content creators win with ease. Our advanced AI analyzes engagement trends and platform algorithms to automate posting and reformat content for maximum reach across multiple platforms. Plus, our built-in affiliate program transforms fans and marketers into promoters and compensates them for bringing in views and engagement. With Blessed, creators can simply focus on creating quality content, while we handle strategy, growth, and optimization.

                                </p>
                                <ButtonStyle text="LEARN MORE" thing="https://blesseddemo.vercel.app/" />
                            </div>
                            
                                

                        </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row display-none justify-center items-center gap-[10vw]">
             <div className='flex flex-col justify-start items-start bg-black pb-20'>
                <div ref={ref} className='flex flex-col items-center text-center md:items-start md:text-left w-full'>
                        <p className="text-white text-[2em] mb-0 font-Poppins font-[800] md:text-[4em] tracking-[0.2em] textGlow mt-2"></p>
                        <p className="text-white font-Montserrat font-[800] tracking-[0.1em] md:tracking-[0.2em] text-[2em] md:text-[4em] mb-1 mt-16 ml-0 md:ml-8 textGlow px-4 md:px-2 max-w-[95%] md:max-w-full">ECOVOYAGE</p>
                        <p className="text-white text-[1.05em] md:text-[1.5em] mb-9 font-Montserrat tracking-[0.3em] font-[200] textGlow md:ml-10">CATALYST PROJECT 3</p>
                        
                        <div className="max-w-[80vw] mx-auto justify-center md:justify-start text-center items-center md:items-start mb-0">
                                <p className="text-gray-300 font-[200] text-sm md:text-lg font-Montserrat mb-3 md:ml-10 justify-center text-center md:text-left">
                               
                                EcoVoyage is an app that tells you the different carbon emission amounts, costs, and duration of travel for different travel methods, by inputting the starting and ending destination. By using this app, people will be more conscious of how they travel.  Our project is applicable for millions of people, creating a large user base in different regions. Our project is important because it tackles a large contributor to climate change: transportation, which accounts for about 28% of US emissions according to the EPA.


                            </p>
                           
                                <ButtonStyle text="LEARN MORE" thing="https://eco-voyage-official.vercel.app/" />
                        </div>
                        
                            

                    </div>
            </div>
            <div className="mr-20 hidden md:block">
                    <video
                    
                    autoPlay
                    loop
                    muted
                    playsInline
                   
                >
                    <source src={EcoVoyageVid} type="video/webm" />
                </video>
                    </div> </div>
            <SectionBreak />
            <Footer />
        </div>
        
    )
}
