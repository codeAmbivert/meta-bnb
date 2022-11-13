import React from "react";
import nftImg from "./images/NTs image.png";

function NFTs() {
  return (
    <div className="nfts" id="nfts">
      <div className="nfts__container">
        <div className="nft__text">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal
            <br />
            customers gets amazing gift cards which are <br />
            traded as NFTs. These NFTs gives our customer <br />
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>
        <div className="nft__image">
          <img src={nftImg} alt="Nft images" />
        </div>
      </div>
    </div>
  );
}

export default NFTs;
