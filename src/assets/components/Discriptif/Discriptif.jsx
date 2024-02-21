
import React from "react";
import "./Discriptif.css";

export default function Discriptif(props) {
  const achetezPlusInfo = (cible) => {
    const copieCible = { ...cible };
    if (copieCible.quantite > 0) {
      
      copieCible.quantite -= 1;
      props.setCible(copieCible);
    }

    const nouveauArray = props.lesImages.map((objet) => {
      if (objet.id === copieCible.id) {
        return copieCible; 
      }
      return objet;
    });

    props.setArray(nouveauArray); 
  };

  return (
    <div className="Discriptif">
      <div className="tableau relative">
        <button
          onClick={() => props.setOuvert(!props.ouvert)}
          className="btnFermeture absolute top-0 right-0"
        >
          X
        </button>

        <div className="divLeftTaleau">
          <div className="divImageTableau">
            <img className="test" src={props.cible.image} alt="" />
          </div>
        </div>
        <div className="divRightTableau">
          <div className="divTitle">
            <p className="titleDiscriptif">{props.cible.titre}</p> <br />
          </div>
          <p className="paragapheTitle">
            Auteur: <span>{props.cible.auteur}</span>
          </p>{" "}
          <br />
          <p className="paragapheTitle">
            Prix: <span>{props.cible.prix} ETH </span>
          </p>{" "}
          <br />
          <p className="paragapheTitle paragapheTitle2">
            description de l'objet: <span>{props.cible.description} </span>{" "}
          </p>
          <p className="paragapheTitle">
            {" "}
            Quantités : <span> {props.cible.quantite} Pièces </span>{" "}
          </p>
          <div className="divBtnPanierDiscriptif">
            <div className="divBtnPanier">
              <button
                onClick={() => {
                  achetezPlusInfo(props.cible);
                }}
                className="btnPanier mt-3"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
