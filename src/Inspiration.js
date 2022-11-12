import React from "react";
import Cards from "./Cards";
import starImg from "./images/Star.png";
import img1 from "./images/image1.png";
import img2 from "./images/inspoImage2.png";
import img3 from "./images/inspoImage3.png";
import img4 from "./images/inspoImage4.png";
import img5 from "./images/inspoImage5.png";
import img6 from "./images/inspoImage6.png";
import img7 from "./images/inspoImage7.png";
import img8 from "./images/inspoImage8.png";

function Inspiration() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="inspiration">
      <h1>Inspiration for your next adventure</h1>
      <div className="grid_items">
        {images.map((e, i) => (
          <Cards
            src1={images[i]}
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

export default Inspiration;
