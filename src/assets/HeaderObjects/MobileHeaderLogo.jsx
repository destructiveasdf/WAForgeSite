import image from '../../assets/Pictures/BiggerLogo.svg'
const MobileHeaderLogo = () => {
    return ( 
        <div className='flex flex-row justify-center items-center ml-4'>
            <a href="/" className='none flex flex-row '>
                <img src={image} className="w-[40px] md:h-[40px] bottom-4 ml-0 mr-3"></img>
            </a>
        </div>
     );
}
 
export default MobileHeaderLogo;