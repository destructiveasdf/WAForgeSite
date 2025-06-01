const SecondSubtitle = (plugin) => {
    const {text} = plugin;
    return ( 
        <h1 className="relative pl-[7%] pr-[7%] py-[3%] text-[1.5em] font-extralight text-white font-['Montserrat',_sans-serif]">{text}</h1>
     );
}

export default SecondSubtitle;