import { memo } from 'react';
import { TiThMenu } from "react-icons/ti";

export default memo(function Navbar() {
    
return (
    <div className="navbar">
        <div className="navbar__logo">Thomas</div>
        <div className="navbar__links">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Work">Work</a>
            <a href="#Contact">Contact</a>
        </div>
        <div className="navbar__burger">
            <TiThMenu />
        </div>
    </div>
);

});