import React from 'react'
import './contactMe.css'
import { backHome } from '../../helpers/navigationLinks'
import { SocialIcon } from 'react-social-icons';
import arrow from '../../images/arrow.png'

function creatLinks() {
    return backHome.map((e) => (
        <p ><a href={e.ref}>{<img src={arrow} alt='person icon' />}</a></p>
    ))
}

function ContactMe() {
    return (
        <div className='contactMe_container' id='contact'>
            <div className='contactMe_data_links'>
                <div>
                    <p>FIND ME ONLINE</p>
                    <SocialIcon url='https://www.linkedin.com/in/sharon-wirtzer/' style={{ height: 40, width: 40 }} />
                    <SocialIcon url='https://github.com/sharonwirtzer' bgColor="#d0d9e3" style={{ height: 40, width: 40, marginLeft:'30px' }} />
                    <SocialIcon url='sharonwirtzer@gmail.com' network="email" style={{ height: 40, width: 40, marginLeft:'30px'}} />
                </div>
                <div>
                    {creatLinks()}
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
    )
}

export default ContactMe
