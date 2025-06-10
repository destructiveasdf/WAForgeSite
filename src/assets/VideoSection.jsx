import { useState, useEffect } from 'react'
import SectionBreak from './SectionBreak'

import logo from './Pictures/BiggerLogo.svg'
import Button from './Button'

const VideoSection = (props) => {
    const { videos, isHero, element, shouldChange, text } = props;
    const intervalDuration = 3000; // Interval duration in milliseconds
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        // Function to shuffle between videos
        const shuffleVideos = () => {
            setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videos.length);
        };

        let intervalId;

        // Check if shouldChange is undefined or true
        if (shouldChange === true) {
            // Set interval to shuffle videos every x seconds
            intervalId = setInterval(shuffleVideos, intervalDuration);
        }

        // Clear interval on component unmount
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [videos, currentVideoIndex, shouldChange]); // Add shouldChange here

    return (
        <section className='overflow-hidden relative w-full h-[130vh] md:h-[120vh]'>
            <div className='w-full h-full overflow-hidden -z-1 relative'>
                <video
                    key={currentVideoIndex}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute object-cover z-[1] overflow-hidden w-full h-full"
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                </video>
            </div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }} className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center text-center">
                {isHero && (
                    <div className='flex flex-col justify-center items-center mt-[0.1vh]]'>
                        <img src={logo} className="relative w-[50px] h-[50px] md:w-[75px] md:h-[75px] pulse bottom-1 md:bottom-4" />
                        <h1 className="z-10 text-white font-Poppins font-[800] tracking-[0.2em] text-[2em] md:text-[4em] mb-[3vh] md:mb-[1vh] textGlow">WAFORGE</h1>
                        <p className="text-white font-Montserrat font-[200] text-[0.9em] tracking-[0.15em] font-[75] md:text-[1.2em] max-w-4xl mx-auto mb-6 px-4">WHETHER YOU WANT TO <span className="font-[300] textGlow">LEARN</span> SOMETHING NEW, <span className="font-[300] textGlow">BUILD</span> YOUR NEXT BIG IDEA, OR <span className="font-[300] textGlow">LAUNCH</span> YOUR NEXT PROJECT
                        </p>
                        <h1 className="z-10 text-white font-Montserrat font-[800] tracking-[0.25em] text-[0.9em] md:text-[1.2em] mb-3 textGlow">IT ALL STARTS HERE</h1>

                        {element}

                        <h1 className="z-10 text-white font-Montserrat font-[200] tracking-[0.25em] text-[1.3em] mt-[10vh] md:text-[1.2em] mb-[0.2vh] textGlow">OUR <span className="font-[200] textGlow">IMPACT</span></h1>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-20">
                            <div class="w-[75vw] md:w-[25vw] h-[13vh] bg-[#969696] mt-5 bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex items-center justify-center border-[2px] border-[#858585] border-opacity-20 hover:border-opacity-100 transition-all duration-300 hover:scale-[1.05]">
                                <p class="text-white text-xl font-[150] font-Montserrat tracking-[0.2em]">50+ Volunteers</p>
                            </div>
                            <div class="w-[75vw] md:w-[25vw] h-[13vh] bg-[#969696] mt-5 bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex items-center justify-center border-[2px] border-[#858585] border-opacity-20 hover:border-opacity-100 transition-all duration-300 hover:scale-[1.05]">
                                <p class="text-white text-xl font-[150] font-Montserrat tracking-[0.2em]">$20,000 in Support</p>
                            </div>
                            <div class="w-[75vw] md:w-[25vw] h-[13vh] bg-[#969696] mt-5 bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex items-center justify-center border-[2px] border-[#858585] border-opacity-20 hover:border-opacity-100 transition-all duration-300 hover:scale-[1.05]">
                                <p class="text-white text-xl font-[150] font-Montserrat tracking-[0.2em]">10 Locations Worldwide</p>
                            </div>
                        </div>
                    </div>
                )}
                {!isHero && (
                    <div className='flex flex-col justify-center items-center'>
                        {element}
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoSection;
