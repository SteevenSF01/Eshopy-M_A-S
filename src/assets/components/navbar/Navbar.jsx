import React, {useState} from 'react'
import LOGO from './../../images/logo.png'
import Wallet from './../../images/wallet.svg'

export default function Navbar(props) {
  
  return (
    <div className='bg-white cursor-pointer flex h-[50px] bg-[linear-gradient(60deg,_rgba(0,2,57,0.9)_40%,_rgba(255,255,200,0.1)_100%)] [box-shadow:0px_1px_7px_1px_rgba(255,255,255,0.75)] fixed w-screen z-20 pe-8 ' >
        <img src={LOGO} alt="" className='w-[200px] h-[50px] ' />
        <ul className=' ms-auto gap-7 items-center pe-4 hidden md:flex text-gray-950 '>
            <li className='cursor-pointer'>Acceuil</li>
            <li className='cursor-pointer'>Explorer</li>
            <li className='cursor-pointer'>FAQ</li>
            <li className='cursor-pointer'>About</li>
        </ul>
        <img src={Wallet} className='w-[30px] ms-auto lg:ms-0 cursor-pointer' alt="" onClick={props.onLogoClick}/>
        
    </div>
  )
}
