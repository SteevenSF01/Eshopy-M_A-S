import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className=" pt-[120px] flex flex-col justify-center items-center mb-10">
        <h1 className="text-white text-[25px] md:text-[40px] lg:text-[60px]  ">
          Bienvenue à N.F.T Art
        </h1>
        <p className="text-white text-[13px] w-[400px] pt-4 md:pt-0 md:text-[15px] md:w-[600px] lg:w-[800px] text-center ">
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
              className="card card-compact text-white w-[300px] h-fit md:w-[400px] p-2 shadow-white shadow-md bg-base-100 "
            >
              <figure className="shadow-black shadow-sm rounded-xl">
                <img src={element.image} alt={element.titre} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{element.titre}</h2>
                <p>{element.description}</p>
                <div className="card-actions justify-between">
                  <button className="btn btn-primary mt-5 ">Plus d'info</button>
                  <button className="btn btn-primary mt-5 ">
                    Achetez Maintenant
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
