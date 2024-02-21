import React from "react";
import "./Card.css";

export default function Card(props) {
  

  return (
    <>
      <div className=" pt-[120px] flex flex-col justify-center items-center mb-10">
        <h1 className="text-white text-[25px] md:text-[40px] lg:text-[60px]  ">
          Bienvenue à N.F.T Art
        </h1>
        <p className="text-white text-[13px] w-[300px] pt-4 md:pt md:text-[15px] md:w-[600px] lg:w-[800px] text-center ">
          Découvrez l'avenir de l'art avec NFT Art : une collection infinie
          d'œuvres numériques uniques, où la créativité rencontre la blockchain
          pour une expérience artistique inoubliable.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-16 pt[25px] md:pt-[50px] ">
        {props.lesImages.map((element, key) => {
          return (
            <div
              key={key}
              className={`${element.quantite == 1? 'animate-pulse':'' } card card-compact text-white w-[300px] h-fit md:w-[400px] p-2 shadow-white shadow-md bg-base-100  `}
            >
              <figure className="shadow-black shadow-sm rounded-xl">
                <img
                  src={element.image}
                  alt={element.titre}
                  className="duration-1000 hover:scale-[1.1] hover:rotate-1"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-[30px] ">{element.titre}</h2>
                <p>{element.description}</p>
                <p>Quantité disponible: {element.quantite}  Pieces</p>
                <div className="card-actions justify-between">
                  <button 
                  onClick={() => {props.setOuvert(!props.ouvert); props.setCible(element)}}
                  className="px-2 py-2 bg-[rgb(0,2,57)] bg-[linear-gradient(169deg,_rgba(0,2,57,1)_0%,_rgba(2,7,128,1)_84%)] rounded-md mt-4 hover:shadow-white hover:shadow-md duration-500">
                    Plus d'info
                  </button>
                  <button 
                  onClick={() => props.achetez(props.lesImages,element)}
                  className= {`${element.quantite == 0 ? 'hidden':'px-2 py-2 bg-[rgb(0,2,57)] bg-[linear-gradient(169deg,_rgba(0,2,57,1)_0%,_rgba(2,7,128,1)_84%)] rounded-md mt-4  hover:shadow-white hover:shadow-md duration-500'}`}>
                    Achetez maintenant
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
