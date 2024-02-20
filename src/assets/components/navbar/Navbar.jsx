import React from 'react'
import LOGO from './../../images/logo.png'

export default function Navbar() {
  return (
    <div className='bg-white h-[50px] bg-[linear-gradient(60deg,_rgba(13,18,88,1)_40%,_rgba(235,33,200,1)_100%)] [box-shadow:0px_1px_7px_1px_rgba(255,255,255,0.75)] ' >
        <img src={LOGO} alt="" className='w-[200px] h-[50px] ' />
    </div>
  )
}
