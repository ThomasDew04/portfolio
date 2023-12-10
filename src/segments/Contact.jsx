import { memo } from 'react';
import { BsFilePerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default memo(function Contact() {

    return (
        <div className='mainContact'>
            <svg viewBox="0 0 768 347" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg4'>
                <path d="M815 -148.237C815 -70.3652 918.328 316.263 833 316.263C695.534 76.2627 3.69549e-06 101.763 0 -40.2373C-3.69549e-06 -190.238 927 -356.238 872 -361.737C817 -467.237 815 -226.109 815 -148.237Z" fill="#9DB2BF"/>
            </svg>
            <h1 className='header2' id="Contact">&lt;/&gt; Contact</h1>
            <form className='contactContainer'>
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
            </form>
            <footer>Copyright © 2023 All Rights Reserved by Thomas Dewilde</footer>
        </div>
    );

});