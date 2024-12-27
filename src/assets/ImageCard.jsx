import CardSubtitle from "./cardSubtitle";
import Button from "./Button";
const ImageHorizontalCard = (plugin) => {
    const {subTitle, Element1, Element2, Element3, hasButton, image, title, description, extraDescriptionStyles, extraStyle} = plugin;
    var thing;
    if(image === undefined){thing = "100%";} else{thing = "50%";}
    if(image === undefined){var hiddenornot = " hidden";} else{hiddenornot = "block";}
    var imageStyle =" mr-15 md:h-[300px] mb-[5vh] md:mb-0 bottom-0 md:bottom-4" + hiddenornot;
    if(description === "undefined"){paraStyle = " none";} else{paraStyle = " block";}
    var paraStyle;
    var paragraphSytle = "text-white font-Montserrat font-[200] mt-3 textGlow " + extraDescriptionStyles + paraStyle;
    var interiorDivStyle = "flex flex-col justify-center items-center w-full md:w-["+String(thing)+"] ml-0 md:ml-10 mr-0 md:mr-10";
    var cardStyle = `mt-[5vh] rounded-[10px] p-2 flex-row pt-[15px] pb-[20px] inline-block text-center relative overflow-hidden transition-[0.1s] boxShadow ${extraStyle} 
                     before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-[10px] before:bg-gradient-to-r before:from-[#00ffc8] before:to-transparent before:blur-[15px]`;
    return ( 
        <div className={cardStyle}>
            <div className="relative rounded-[12px] top-[3px] bottom-[3px] h-full w-full overflow-hidden flex flex-col md:flex-row items-center">
                
                <img src={image} className={imageStyle}></img>
                <div className={interiorDivStyle}>
                    {subTitle}
                    <h1 className="text-white font-Montserrat font-[500] tracking-[0.2em] text-[1.5em] md:text-[2em] mb-[0.2vh] md:mb-[1vh] textGlow top-0" ><span className="textGlow">{title}</span></h1>
                    <p className={paragraphSytle}>{description}</p>
                    
                    
                {Element1}
                {Element2}
                {Element3}                 
                </div>
        </div>

            
        </div>
     );
}
 
export default ImageHorizontalCard;