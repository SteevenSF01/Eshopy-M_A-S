import React from "react";

import Brain from "./../../images/brain.jpg";
import Chaise from "./../../images/chaise.jpg";
import Chatton from "./../../images/chatton.jpg";
import Cuillere from "./../../images/cuillere.jpg";
import Dragon from "./../../images/dragon.jpg";
import Gateau from "./../../images/gateau.jpg";
import Lion from "./../../images/LionTab.jpg";
import Partiture from "./../../images/partiture.jpg";
import Pont from "./../../images/pont.jpg";
import Tele from "./../../images/tele.jpg";

let images = [
  {
    id: 1,
    image: Brain,
  },
  {
    id: 2,
    image: Chaise,
  },
  {
    id: 3,
    image: Chatton,
  },
  {
    id: 4,
    image: Cuillere,
  },
  {
    id: 5,
    image: Dragon,
  },
  {
    id: 6,
    image: Gateau,
  },
  {
    id: 7,
    image: Lion,
  },
  {
    id: 8,
    image: Partiture,
  },
  {
    id:9,
    image: Pont,
  },
  {
    id: 10,
    image: Tele,
  },
];

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-16 mt-[50px] ">
      {images.map((element, key) =>{
        return(
          <div key={key} className="card card-compact w-80 bg-base-100 shadow-xl ">
          <figure>
            <img
              src={element.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>{element.id}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
}
