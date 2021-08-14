import React from 'react'
import './AboutMe.css'
import person from '../../images/person.png'

function AboutMe() {
    return (
        <div className='about_container' id='about-me'>
            <div>
            <img src={person} alt='person icon'/>
            </div>
            <div className='about_text'>
                <h1 style={{ color: 'rgb(218, 218, 218)', fontSize: '-webkit-xxx-large' }}>about.</h1>
                <p style={{ color: 'rgb(218, 218, 218)', fontSize: '22px' }}>Full Stack Web Developer, Passionate about solving challenges, with experience in writing single-page-applications using the latest WEB technologies. Team player and hard worker.</p>
            </div>
        </div>
    )
}

export default AboutMe


