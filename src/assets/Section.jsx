import React from 'react';
import ImageHorizontalCard from "./ImageCard";
import hackathon from "./Pictures/hackathon.png";
import SectionTitle from './SectionTitle';
import SocialMedias from './SocialMedia';
import Button from './Button';
import CardSubtitle from './cardSubtitle';
import Form from './Form';

const ServiceSection = (plugin) => {
    const {title, element1, element2, element3, element4, element5} = plugin;
    return ( 
        <section className="h-fit bg-black p-10 md:p-20 flex flex-col justify-center items-center">
            
            <SectionTitle title={title} />
            {element1}
            {element2}
            {element3}

            
        </section>
     );
}
 
export default ServiceSection;
