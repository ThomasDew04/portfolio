import { memo } from 'react';
import { BsFilePerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default memo(function Contact() {

    return (
        // svg2
        <div className='mainContact'>
            <h1 className='header2' id="Skills">&lt;/&gt; Contact</h1>
            <div className='contactContainer'>
                <div className='formFields'>
                    <div className='formLeft'>
                        <label className='formLabel'>Name</label>
                        <div className='inputContainer'>
                            <BsFilePerson size={35} color='#9DB2BF'/>       
                            <input className='formInput' type='text' placeholder='John Doe' />
                        </div>
                        <label className='formLabel'>Email</label>
                        <div className='inputContainer'>
                            <HiOutlineMail size={35} color='#9DB2BF'/>
                            <input className='formInput' type='text' placeholder='john@mail.com'/>
                        </div>
                    </div>
                    <div className='formRight'>
                        <label className='formLabel'>Message</label>
                        <textarea className='formInputBig' type='text' placeholder='Your message here...'/>
                    </div>
                </div>
                <div className='formBtn'>
                    <button className='formSubmit' type='submit'>Send</button>
                </div>
            </div>
            <footer>Copyright © 2023 All Rights Reserved by Thomas Dewilde</footer>
        </div>
        
    );

});