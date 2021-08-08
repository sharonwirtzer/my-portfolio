import React from 'react'
import Typed from 'react-typed'
import './Header.css'

function Header() {
    return (
        <div className='main-info'>
            <h1>Hello, I'm  <h1 style={{ color: 'green' }}> Sharon Wirtzer </h1> {/* I'm a Full-Stack web developer. */}</h1>
            <Typed
                strings={[
                    '',
                    'A Software Engineer',
                    'Also Known as an',
                    'Front-end developer',
                    'Back-end developer',
                    'Full-Stack developer',
                    'Or!',
                    '"a Coder"',
                    '',
                    '']}
                typeSpeed={40}
                backSpeed={50}
                loop
            />

        </div>
    )
}

export default Header
