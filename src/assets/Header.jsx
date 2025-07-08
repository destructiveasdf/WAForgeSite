import HeaderLink from "./HeaderObjects/headerLinks"
import SectionBreak from "./SectionBreak"
import HeaderLogo from  "./HeaderObjects/headerLogo"
import MobileHeader from "./MobileHeader"

const Header = () => {
    return ( 
        <>
            <header className="bg-black w-full hidden md:block">
                <div className="flex relative justify-between items-center h-[10vh] ">
                    <div className="flex">
                        <HeaderLogo />
                    </div>
                    <div className="mr-4">
                        <HeaderLink link="/ForgeCon" text="ForgeCon" />
                        <HeaderLink link="/About" text="About" />
                        <HeaderLink link="/Sponsor" text="Sponsors" />
                        <HeaderLink link="/PastEvents" text="Past Events" />
                        <HeaderLink link="/Catalyst" text="Catalyst" />
                        <HeaderLink link="/Internship" text="Internship" />
                    </div>
                </div>
                <SectionBreak />
                
            </header>
            <MobileHeader />
        </>
    );
}
 
export default Header;
