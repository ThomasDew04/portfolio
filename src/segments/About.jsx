import { memo } from 'react';
import resume from "../images/ThomasDewildeResume.pdf"


export default memo(function About() {

    return (
        <div className='mainAbout'>
            <span>
                <svg viewBox="0 0 722 479" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg1'>
                    <g>
                        <path d="M713.276 -103.101C800.776 343.899 202.778 170.9 -54.2222 478.9C-431.722 422.901 -54.2225 -112.825 -54.2225 -197.6C-54.2225 -282.376 -29.2238 -763.101 47.2762 -402.601C123.776 -42.1007 692.776 -306.1 713.276 -103.101Z" fill="#9DB2BF"/>
                    </g>
                </svg>
            </span>
            <h1 className='header' id='About'>&lt;/&gt; About</h1>
            <div className='aboutContainer'>
                <h2>So, who am I?</h2>
                <p className='aboutTxt'>My name is Thomas. Designing & coding playful & pretty websites is my passion. 
                I love playing basketball and going to the gym. Social & outgoing is what they use to describe me. 
                I’m a student at HoGent and this is my portfolio
                </p>
                <div className='btnCon'>
                    <a className='aboutBtn' href={resume} download="ThomasDewildeResume">Download CV</a>
                </div>
            </div>
        </div>
        // svg3
    );

});