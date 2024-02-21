import React from 'react'
import './Footer.css'
import LOGO from './../../images/logo.png'
import instagram from './../../images/instagram.png'
import facebook from './../../images/facebook.png'
import snapchat from './../../images/snapchat.png'
import twitter from './../../images/twitter.png'
export default function Footer() {
  return (
    <>
        <footer className=' bg-[linear-gradient(60deg,_rgba(0,2,57,1)_40%,_rgba(235,33,200,1)_100%)]'>
            <div className='divTopFooter'>
                <img src={LOGO} alt="" className='logoFooter'/>
            </div>
            <div className='divMidFooter'>
                <img className='logoReseauFooter' src={instagram} alt="" />
                <img className='logoReseauFooter2' src={facebook} alt=""/>
                <img className='logoReseauFooter3' src={snapchat} alt="" />
                <img className='logoReseauFooter4' src={twitter} alt=""/>
            </div>
            <div className='divBottomFooter'>
                <div className='divBottomLeftFooter'>
                    <h3>Shop</h3>
                    <p className='textFooter'>For Women</p>
                    <p className='textFooter'>For Men</p>
                    <p className='textFooter'>Stores</p>
                    <p className='textFooter'>Our Blog</p>
                </div>
                <div className='divBottomMidFooter'>
                    <h3>COMPANY</h3>
                    <p className='textFooter'>Login</p>
                    <p className='textFooter'>Register</p>
                    <p className='textFooter'>Wishlist</p>
                    <p className='textFooter'>Our Products</p>
                </div>
                <div className='divBottomBottomFoter'>
                    <h3>Home</h3>
                    <h3>Explorer</h3>
                    <h3>FAQ</h3>
                    <h3>About</h3>
                </div>
            </div>
                <div className='divCopyright'>
                    <p className='copyright'>
                        © Copyright Molengeek 2024
                    </p>
                </div>
            
        </footer>
    </>
  )
}
