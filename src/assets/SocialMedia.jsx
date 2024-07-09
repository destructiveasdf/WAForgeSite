import discord from './Pictures/discord.svg';
import instagram from './Pictures/instagram.svg';
import linkedin from './Pictures/linkedin.svg';

const SocialMedias = () => {
    var socials = "flex justify-center align-center h-fit w-fit m-[10px] rounded-[50%] p-0";
    var socialStyles = "h-[50px] w-[50px] m-3";
    return ( 
        
        <div className={socials}>
            <a href="https://www.linkedin.com/company/101460817" className={socialStyles}><img src={linkedin} class="social"></img></a>
            <a href="https://www.instagram.com/waforge_hackathon/" className={socialStyles}><img src={instagram} class="social"></img></a>
            <a href="https://discord.gg/kHXuXt3XA9" className={socialStyles}><img src={discord} class="social"></img></a>
        </div>
     );
}
 
export default SocialMedias;