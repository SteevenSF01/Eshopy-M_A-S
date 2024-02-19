import React from "react";
import DATA from './../../json/data.json'

import Brain from './../../images/brain.jpg'
import Chaise from './../../images/chaise.jpg'
import Chatton from './../../images/chatton.jpg'
import Cuillere from './../../images/cuillere.jpg'
import Fleur from './../../images/fleur.jpg'
import Gateau from './../../images/gateau.jpg'
import Lion from './../../images/LionTab.jpg'
import Partiture from './../../images/partiture.jpg'
import Pont from './../../images/pont.jpg'
import Tele from './../../images/tele.jpg'

export default function Card() {
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
