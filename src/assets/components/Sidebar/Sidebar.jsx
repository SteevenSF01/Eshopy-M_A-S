import React, { useState } from "react";
import "./Sidebar.css";
import test2 from "./../../images/chatton.jpg";
export default function Sidebar(props) {
  return (
    <div className="sidebar fixed z-30 top-[50px] right-0 ">
      <div className="sidebarContainer relative">
        <div className="divTopSidebar">
          <div className="divLeftSideBar">
            <p className="titleSidebar">Your shopping bag</p>
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
                <p className="textSidebar">Quantités: <span>{item.quantite} pièces</span></p>
              </div>
            </div>
          ))}
        </div>
        <div className="divBottomSidebar pb-[70px] ">
          <button onClick={props.onLogoClick} className="btnSidebar py-3 px-4 border-2 border-white rounded-badge text-white  ">
            Continuez votre shopping
          </button>
        </div>
      </div>
    </div>
  );
}
