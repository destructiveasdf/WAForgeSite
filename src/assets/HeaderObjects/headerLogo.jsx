import image from '../../assets/Pictures/BiggerLogo.svg'
const HeaderLogo = () => {
    return ( 
        <div className='flex flex-row justify-center items-center ml-4'>
            <a href="/" className='none flex flex-row '>
                <img src={image} className="w-[40px] md:h-[40px] bottom-4 ml-5 mr-3"></img>
                <h1 className="text-white text-[1.5em] font-Poppins tracking-[0.2em] mt-[2.5px] font-bold mv-[1vh]">WAFORGE</h1>
            </a>
        </div>
     );
}
 
export default HeaderLogo;