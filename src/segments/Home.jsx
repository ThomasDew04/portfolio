import { memo } from 'react';
import { BsChevronDown, BsLinkedin, BsGithub, BsInstagram, BsDiscord } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import pic from '../images/me.png'


export default memo(function Home() {

    return (
        <div className='mainHome'>
            <div className='homeLeft'>
                <p className='homeTxt'>Hi there,<br />
                 I'm Thomas Dewilde<br />
                 Designer & &lt; Coder/ &gt;
                </p>
                <a className='homeBtn' href='#About'>About me <BsChevronDown id="downArr"/></a>
                <div className='homeSocials'>
                    <a className='rounded' href='https://www.linkedin.com/in/thomas-dewilde/' target='_blank' rel="noreferrer"><BsLinkedin id="social"/></a>
                    <a className='rounded' href='https://github.com/ThomasDew04' target='_blank' rel="noreferrer"><BsGithub id="social"/></a>
                    <a className='rounded' href='https://www.instagram.com/thomashjee/' target='_blank' rel="noreferrer"><BsInstagram id="social"/></a>
                    <a className='rounded' href='https://discordapp.com/users/301446415320612864' target='_blank' rel="noreferrer"><BsDiscord id="social"/></a>
                    <a className='rounded' href='#contact'><CiMail id="social" strokeWidth={0.8} size={52}/></a>
                </div>
            </div>
            <div className='homeRight'>
                <img className="pic" src={pic} alt=""/>
                <div className="circle" />
                <div className="circle1" />
            </div>
        </div>
    );

});