import { memo } from 'react';
import resume from "../images/ThomasDewildeResume.pdf"


export default memo(function About() {

    return (
        // svg2
        <div className='mainAbout'>
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