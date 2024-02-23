import React, { useState } from "react";
import "./Sidebar.css";
import test2 from "./../../images/chatton.jpg";
export default function Sidebar(props) {
  return (
    <div className="sidebar fixed z-30 top-[50px] right-0 ">
      <div className="sidebarContainer relative">
        <div className="divTopSidebar">
          <div className="divLeftSideBar flex flex-col">
            <p className="titleSidebar my-5">Your shopping bag</p>
              {props.solde > 0 ?
            (<p className="text-white text-[20px] font-medium pb-5">
              Solde : <span className="text-white">{props.solde} </span>
              <span className="text-[15px]">ETH</span>
            </p>) : <p>Solde insuffisant</p>
              }
          </div>
          <div className="divRightBtnFermeture">
            <button
              onClick={props.onLogoClick}
              className="btnFermeture absolute top-0"
            >
              X
            </button>
          </div>
        </div>
        <div className="divMidSidebar flex flex-wrap gap-5 ">
          {props.achat.map((item, index) => (
            <div key={index} className="containerDivMidSidebar">
              <div className="divMidLeftSidebar">
                <img className="logoTest2" src={item.image} alt={item.titre} />
              </div>
              <div className="divMidRightSidebar">
                <p className="textSidebar">{item.titre}</p>
                <p className="textSidebar">
                  Auteur: <span>{item.auteur}</span>
                </p>
                <p className="textSidebar">
                  Prix: <span>{item.prix} ETH</span>
                </p>
                <p className="textSidebar ">
                  Quantités: <span>{item.quantite} pièces</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="divBottomSidebar pb-[70px] gap-4 ">
          <button
            onClick={props.onLogoClick}
            className="btnSidebar py-3 px-4 border-2 border-white rounded-badge text-white  "
          >
            Continuez votre shopping
          </button>
          {props.solde > 0 ? (
            <button className="btnSidebar py-3 px-4 border-2 border-white rounded-badge text-white hover:bg-white hover:text-black  ">
              Achetez
            </button>
          ) : (
            <button className="btnSidebar py-3 px-4 border-2 border-white rounded-badge  text-white cursor-not-allowed  ">
              Solde insuffisant
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
