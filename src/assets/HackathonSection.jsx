import SecondSubtitle from "./secondSubtitle"
import Card from "./Card"
import TextRain from "./textRain"
import workshop from "../assets/Pictures/workshop.jpg"
import waiting from "../assets/Pictures/waiting.png"
import working from "../assets/Pictures/working.png"
import participants from "../assets/Pictures/Participants.png"

const HackathonSection = () => {
    var opacity = "0.1";
    var blackBackgroundStyle="bg-black h-full w-full opacity-[" + opacity + "]";
    const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5'];
    return ( 
        <section className="h-fit bg-gradient-to-br from-[#00dc82]  via-[#36e4da] to-[#16a79e] flex flex-col justify-center items-center">
            
            <div className="bg-[#000000a3] h-full w-full">

                
                <div id="content" className="relative h-full">
                    <div className="absolute hidden md:block top-0 left-0 w-full h-full">
                            <TextRain texts={texts} />
                    </div>
                    <div>
                        <div className="relative flex flex-col justify-center items-center">
                            <div className="m-20 p-10 pb-32 flex flex-col justify-center items-center">
                                <div className="p-10 pb-0 text-center">
                                <h1 className="text-white text-3xl md:text-6xl font-Poppins font-light tracking-[0.2em]">SEE YOU AT <span className="textGlow">WAFORGE 2025</span></h1>
                                </div>
                                <div className="relative p-10 justify-center items-center text-center opacity-100 w-[95vw] md:w-[fit-content] h-[fit-content] bg-[#0c0c0d] top-[8vh] p-2vh rounded-[20px] ">
                                    <SecondSubtitle text="Thank you all for a great event this year!" />
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <Card titleSize = "20px" title="50+ participants" extraStyles = "font-extralight"/>
                                        <Card titleSize = "20px" title="24 schools" extraStyles = "font-extralight"/>
                                        <Card titleSize = "20px" title="28 submissions" extraStyles = "font-extralight"/>
                                    </div>
                                    <SecondSubtitle text="Congrats to all the winners!"/>
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <a href="https://waforge.devpost.com/submissions/485517-the-monster-s-meal"><Card titleSize = "1em" title="The Monster's Meal" description="First Place" extraStyles="font-bold"/></a>
                                    <a href="https://waforge.devpost.com/submissions/485501-foodspect-app"><Card titleSize = "1em" title="The Foodspect App" description="Second Place" descriptionSize = "1em" extraStyles="font-bold"/></a>
                                        <a href="https://waforge.devpost.com/submissions/485504-flappy-bird-and-exercise"><Card titleSize = "1em" title="Flappy Bird Exercise" description="Third Place" extraStyles="font-bold"/></a>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                    <a href="https://waforge.devpost.com/submissions/485459-fitness-tracker-waforge-hackathon"><Card titleSize = "1em" title="Fitness Tracker" description="Best UI" descriptionSize = "1em" extraStyles="font-bold"/></a>
                                        <a href="https://waforge.devpost.com/submissions/485521-vedrx"><Card titleSize = "1em" title="VedRX" description="Best Functionality" extraStyles="font-bold"/></a>
                                        </div>
                                </div>
                                <div className="mt-20 relative p-10 justify-center items-center text-center opacity-100 w-[fit-content] h-[fit-content] bg-[#0c0c0d] top-[8vh] px-10 md:px-0 rounded-[20px] ">
                                    <h1 className="relative p-5 text-[1.5em] font-extralight text-white font-['Montserrat',_sans-serif]">Pictures from WAForge 2024!</h1>
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <img src={waiting} className="w-[80vw] md:w-[30vw] m-0 md:m-5 ml-0 md:ml-[3.5em] mt-5 rounded-[10px]"></img>
                                        <img src={participants} className="w-[80vw] md:w-[30vw] m-0 md:m-5 mr-0 md:mr-[3.5em] mt-5 rounded-[10px]"></img>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <img src={workshop} className="w-[80vw] md:w-[30vw] m-0 md:m-5 ml-0 md:ml-[3.5em] mt-5 rounded-[10px]"></img>
                                        <img src={working} className="w-[80vw] md:w-[30vw] m-0 md:m-5 mr-0 md:mr-[3.5em] mt-5 rounded-[10px]"></img>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HackathonSection;