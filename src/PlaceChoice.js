import React from "react";
import locationIcon from "./images/location_setting.png";
import Cards from "./Cards";
import img1 from "./images/inspoImage5.png";
import img2 from "./images/inspoImage6.png";
import img3 from "./images/inspoImage7.png";
import img4 from "./images/inspoImage8.png";
import img5 from "./images/image1.png";
import img6 from "./images/inspoImage2.png";
import img7 from "./images/inspoImage3.png";
import img8 from "./images/inspoImage4.png";
import img9 from "./images/place9.png";
import img10 from "./images/place10.png";
import img11 from "./images/place11.png";
import img12 from "./images/place12.png";
import img13 from "./images/place13.png";
import img14 from "./images/place14.png";
import img15 from "./images/place15.png";
import img16 from "./images/place16.png";
import starImg from "./images/Star.png";

function PlaceChoice() {
  const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
  ];
  return (
    <div className="placeChoice">
      <div className="placeChoice_filter">
        <p>Resturant</p>
        <p>Cottage</p>
        <p>Catle</p>
        <p>Fantast city</p>
        <p>Beach</p>
        <p>Cabins</p>
        <p>Off-grid</p>
        <p>Farm</p>
        <button>
          <span>Location</span>
          <span>
            <img src={locationIcon} alt="location" />
          </span>
        </button>
      </div>
      <div className="grid_items">
        {img.map((e, i) => (
          <Cards
            src1={img[i]}
            alt1={"card image"}
            src2={starImg}
            alt2={"img2"}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default PlaceChoice;
