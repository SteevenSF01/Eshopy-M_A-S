import React, {useState} from 'react'
import './Sidebar.css'
import test2 from './../../images/chatton.jpg'
export default function Sidebar() {
    
  return (
    <div className='sidebar'>
         <div className='sidebarContainer'>
            <div className='divTopSidebar'>
                <div className='divLeftSideBar'>
                    <p className='titleSidebar'>
                        Your shopping bag
                    </p>
                </div>
                <div className='divRightBtnFermeture'>
                    <button className='btnFermeture'>X</button>
                </div>
                
            </div>
            <div className='divMidSidebar'>
                <div className='containerDivMidSidebar'>
                    <div className='divMidLeftSidebar'>
                        <img className='logoTest2' src={test2} alt="" />
                    </div>
                    <div className='divMidRightSidebar'>
                        <p className='textSidebar'>
                            Description of the article
                        </p>
                        <p className='textSidebar'>
                            Auteur: <span>Jeremy Dubois</span>
                        </p>
                        <p className='textSidebar'>
                            Prix: <span>100$</span>
                        </p>
                    </div>
                </div>
            </div>
                    <div className='divBottomSidebar'>
                        <button className='btnSidebar'>Continuez votre shopping</button>
                    </div>
         </div>
    </div>
  )
}
