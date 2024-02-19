import React from 'react'
import './Discriptif.css'
import test from './../../images/chaise.jpg'

export default function Discriptif() {
  return (
    <div className='Discriptif'>
        <div className='tableau'>
            <div className='divLeftTaleau'>
              <div className='divImageTableau'>
                <img className='test' src={test} alt="" />
              </div>
            </div>
            <div className='divRightTableau'>
              <div className='divTitle'>
                <p className='titleDiscriptif'>Nom de l'objet</p>
              </div>
              <p>Auteur: <span>Jeremie Dubois</span></p>
              <p>description de l'objet: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit
               Officia quam dolorem ducimus nihil voluptatum non dolor ex eaque. Quae sapiente minus
                praesentium</span>  </p>
                <p>prix: <span>100€</span></p>
            </div>
        </div>
    </div>
  )
}
