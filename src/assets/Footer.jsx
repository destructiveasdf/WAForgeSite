import SocialMedias from "./SocialMedia"
import discord from './Pictures/discord.svg'
import instagram from './Pictures/instagram.svg'
import linkedin from './Pictures/linkedin.svg'

const Footer = () => {
    var socials = "flex justify-center align-center h-fit w-fit m-[10px] rounded-[50%] p-0";
    var socialStyles = "h-[30px] w-[30px] md:h-[50px] md:w-[50px] m-1 md:m-3";
    return ( 
    <section className="h-[30vh] bg-black">
        <div className="w-full h-full relative top-0 left-0 z-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-white text-sm md:text-base font-Poppins font-light tracking-[0.2em]">WAForge is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499)</h1>
            <h1 className="text-white text-xs md:text-sm font-Poppins font-light tracking-[0.2em] mt-4">Contact us at contact@waforge.org</h1>
            <div className={socials}>
                <a href="https://www.linkedin.com/company/101460817" className={socialStyles}><img src={linkedin} class="social"></img></a>
                <a href="https://www.instagram.com/waforge_hackathon/" className={socialStyles}><img src={instagram} class="social"></img></a>
                <a href="https://discord.gg/kHXuXt3XA9" className={socialStyles}><img src={discord} class="social"></img></a>
            </div>
        </div>
    </section> );
}
 
export default Footer;