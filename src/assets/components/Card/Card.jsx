import React from "react";



export default function Card(props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 mt-[50px]  ">
      {props.lesImages.map((element, key) =>{
        return(
          <div key={key} className="card card-compact w-[300px] h-fit md:w-[400px] bg-base-100 shadow-xl ">
          <figure>
            <img
              src={element.image}
              alt= {element.titre}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{element.titre}</h2>
            <p>{element.description}</p>
            <div className="card-actions justify-between">
              <button className="btn btn-primary mt-5 ">Plus d'info</button>
              <button className="btn btn-primary mt-5 ">Achetez Maintenant</button>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}
