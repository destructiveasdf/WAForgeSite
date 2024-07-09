const HeaderLink = (props) => {
    const {text, link} = props;
    return ( 
        <a href={link} className="text-white mx-4 font-Montserrat">{text}</a>
     );
}
 
export default HeaderLink;