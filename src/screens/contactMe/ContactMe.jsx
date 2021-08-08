import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'


function creatLinks() {
    return navigationLinks.map((e, idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactMe() {
    return (
        <div className='contactMe_container' id='contact'>
            <div className='contactMe_data_links'>
                <div>
                  <p>Tel-Aviv</p>
                  <p>Sharon Wirtzer</p>
                  <p>sharonwirtzer@gmail.com</p>
                </div>
                <div>
                    {creatLinks()}
                </div>
            </div>
            <div style={{ textAlign: 'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
    )
}

export default ContactMe
