const Card = (plugin) => {
    const {titleSize, extraDescriptionStyles, title, description, extraStyles, link, ExtraDivStyles} = plugin;
    var style = "text-white font-['Poppins',_sans-serif] tracking-[0.2em] text-["+titleSize+"] " + extraStyles;
    var paraStyle = "mt-[2vh] text-white font-['Poppins',_sans-serif] font-extralight tracking-[0.2em] " + extraDescriptionStyles;
    var divStyle = "bg-[#121212] rounded-[10px] [box-shadow:0_0_10px_#01f5b8] p-[10px] m-[30px] " + (description ? "w-[300px] py-10 px-6" : "w-[fit-content] py-7 px-6") + " h-[fit-content] inline-block text-center relative overflow-hidden [transition:all_0.1s_ease-in-out] hover:scale-[1.1] " + ExtraDivStyles;
    
    return ( 
        <a href={link}>
            <div className={divStyle}>
                <h1 className={style}>{title}</h1>
                {description && <p className={paraStyle}>{description}</p>}
            </div>
        </a>
     );
}

export default Card;