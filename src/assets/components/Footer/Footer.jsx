import React from 'react'
import './Footer.css'
import LOGO from './../../images/logo.png'
import instagram from './../../images/instagram.png'
import facebook from './../../images/facebook.png'
import nft from './../../images/nft.png'
import twitter from './../../images/twitter.png'
export default function Footer() {
  return (
    <>
        <footer className=' bg-[linear-gradient(60deg,_rgba(0,2,57,1)_40%,_rgba(255,255,255,1)_100%)] text-white border-t-2 mt-[60px]'>
            <div className='flex justify-center'>
                <img src={LOGO} className='w-[200px] h-[70px] my-5 '/>
            </div>
            <div className='flex justify-center gap-7 mb-5 lg:my-0   lg:mb-[40px] '>
                <img className='w-[30px] md:w-[35px] lg:w-[40px] hover:scale-[1.2] cursor-pointer duration-700 hover:-translate-y-1 ' src={instagram}  />
                <img className='w-[30px] md:w-[35px] lg:w-[40px] hover:scale-[1.2] cursor-pointer duration-700 hover:-translate-y-1 ' src={facebook} />
                <img className='w-[30px] md:w-[35px] lg:w-[40px] hover:scale-[1.2] cursor-pointer duration-700 hover:-translate-y-1 ' src={nft}  />
                <img className='w-[30px] md:w-[35px] lg:w-[40px] hover:scale-[1.2] cursor-pointer duration-700 hover:-translate-y-1 ' src={twitter} />
            </div>
            <div className=' text-[13px]  md:text-[15px] leading-6 w-[350px] md:w-[600px] lg:w-[800px] lg:text-[18px] mx-auto flex justify-around lg:leading-8 flex-wrap'>
                <div className=''>
                    <p className='hover:underline cursor-pointer'>Shop</p>
                    <p className='hover:underline cursor-pointer'>For Women</p>
                    <p className='hover:underline cursor-pointer'>Stores</p>
                    <p className='hover:underline cursor-pointer'>Our Blog</p>
                </div>
                <div className=''>
                    <p className='hover:underline cursor-pointer'>Company</p>
                    <p className='hover:underline cursor-pointer'>Login</p>
                    <p className='hover:underline cursor-pointer'>Register</p>
                    <p className='hover:underline cursor-pointer'>Wishlist</p>
                </div>
                <div className=''>
                    <p className='hover:underline cursor-pointer'>Home</p>
                    <p className='hover:underline cursor-pointer'>Explorer</p>
                    <p className='hover:underline cursor-pointer'>FAQ</p>
                    <p className='hover:underline cursor-pointer'>About</p>
                </div>
            </div>
            <hr className='mt-[40px] mb-2' />
                <div className='divCopyright '>
                    <p className='copyright pb-2 text-center text-[10px] md:text-[13px] '>
                        © Copyright Steeven et Momo 2024
                    </p>
                </div>
            
        </footer>
    </>
  )
}