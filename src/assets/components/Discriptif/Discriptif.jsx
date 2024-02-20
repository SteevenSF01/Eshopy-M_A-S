import React from 'react'
import './Discriptif.css'
import test from './../../images/chaise.jpg'
import BtnPanier from '../BtnPanier/BtnPanier'

export default function Discriptif(props) {
    console.log(props.cible);
  return (
    <div className='Discriptif'>
        <div className='tableau relative'>
        <button 
        onClick={()=> props.setOuvert(!props.ouvert)}
        className='btnFermeture absolute top-0 right-0'>X</button>

            <div className='divLeftTaleau'>
              <div className='divImageTableau'>
                <img className='test' src={props.cible.image} alt="" />
              </div>
            </div>
            <div className='divRightTableau'>
              <div className='divTitle'>
                <p className='titleDiscriptif'>{props.cible.titre}</p> <br />
              </div>
              <p className="paragapheTitle">Auteur: <span>{props.cible.auteur}</span></p> <br />
              <p className="paragapheTitle">Prix: <span>{props.cible.prix} ETH </span></p> <br />
              <p className="paragapheTitle paragapheTitle2">description de l'objet: <span>{props.cible.description} </span>  </p>
            {
             <div className='divBtnPanierDiscriptif'>
                <BtnPanier/>
             </div>
                
              
            }
            </div>
        </div>
    </div>
  )
}
