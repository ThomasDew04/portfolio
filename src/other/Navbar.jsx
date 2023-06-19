import { memo } from 'react';
import { TiThMenu } from "react-icons/ti";

export default memo(function Navbar() {
    
return (
    <div className="navbar">
        <div className="navbar__logo">Thomas</div>
        <div className="navbar__links">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#projects">Skills</a>
            <a href="#contact">Work</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="navbar__burger">
            <TiThMenu />
        </div>
    </div>
);

});