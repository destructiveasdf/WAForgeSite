import HeaderLink from "./HeaderObjects/headerLinks";
import SectionBreak from "./SectionBreak";
import HeaderLogo from  "./HeaderObjects/headerLogo";
import MobileHeaderLogo from "./HeaderObjects/MobileHeaderLogo"
import { useState } from "react";

const MobileHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className="bg-black w-full block md:hidden fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center h-[10vh] px-4">
                <MobileHeaderLogo />

                <button className="text-white focus:outline-none focus:ring-0 relative" onClick={toggleDropdown}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div className={`bg-black text-white flex flex-col items-start transition-all duration-1000 ease-in-out ${isDropdownOpen ? 'h-[85px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <HeaderLink link="/About" text="About" />
                <HeaderLink link="/Sponsor" text="Sponsors" />
                <HeaderLink link="/PastEvents" text="Past Events" />
            </div>
        </header>
    );
}

export default MobileHeader;