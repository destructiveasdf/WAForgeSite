import HeaderLink from "./HeaderObjects/headerLinks";
import SectionBreak from "./SectionBreak";
import HeaderLogo from  "./HeaderObjects/headerLogo";
import MobileHeader from "./MobileHeader";

const Header = () => {
    return ( 
        <>
            <header className="bg-[#00000089] w-full hidden md:block">

                <div className="flex relative justify-between items-center h-[10vh] ">
                    <div className="flex">
                        <HeaderLogo />
                    </div>
                    <div className="mr-4">
                        <HeaderLink link="/About" text="About" />
                        <HeaderLink link="/Sponsor" text="Sponsors" />
                        <HeaderLink link="/PastEvents" text="Past Events" />
                    </div>
                </div>
                <SectionBreak />
                
            </header>
            <MobileHeader />
        </>
    );
}
 
export default Header;
