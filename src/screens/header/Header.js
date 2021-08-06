import React from 'react'
import Typed from 'react-typed'
import './Header.css'

function Header() {
    return (
        <div className='main-info'>
         <h1>What am i?</h1>
         <Typed
         strings={[
             '',
             '123',
             '456',
             '789',
             '191112',
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
