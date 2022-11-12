import React from "react";

function Cards(props) {
  const n = 5;
  return (
    <div className="cards">
      <img src={props.src1} alt={props.alt1} className="cards__heading_img" />
      <div className="cards__info">
        <span>Desert king</span> <span className="price">1MBT per night</span>
      </div>
      <div className="cards__info">
        <span>2345km away</span>
        <span>available for 2weeks stay</span>
      </div>
      <div className="stars">
        {[...Array(n)].map((e, i) => (
          <img src={props.src2} alt={props.alt2} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
