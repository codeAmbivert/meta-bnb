import React, { useState } from "react";
import mblogo from "./images/metabnb-logo.png";
import cancelBtn from "./images/cancel-button.png";
import mmColorLogo from "./images/colored-metamask-logo.png";
import walletConnectImg from "./images/walletConnect-logo.png";
import fwrdImg from "./images/foward-arrow.png";

function Navbar() {
  const [btnState, setBtnState] = useState(false);

  const handleConnect = () => {
    setBtnState((btnState) => !btnState);
  };
  let toggleClassCheck = btnState ? "active" : null;
  return (
    <div className="navbar">
      <img src={mblogo} alt="metabnb logo" />
      <div className="navlinks">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Place to stay</a>
          </li>
          <li>
            <a href="#nfts">NFTs</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <button
        className="connect-btn"
        onClick={() => {
          handleConnect();
        }}
      >
        Connect wallet
      </button>
      <div class={`${toggleClassCheck}`}>
        <div className="connect_popup">
          <div className="popup__header">
            <h2>Connect Wallet</h2>
            <span>
              <button className="close_btn">
                <img
                  src={cancelBtn}
                  alt="close button"
                  onClick={() => handleConnect()}
                />
              </button>
            </span>
          </div>
          <div className="popup__preferred">
            <p>Choose your preferred wallet:</p>
            <button className="popup__wallet_choice">
              <span>
                <img
                  src={mmColorLogo}
                  alt="metamask"
                  className="mm_popup_logo"
                />
                <h2>Metamask</h2>
              </span>
              <img src={fwrdImg} alt="arrow" />
            </button>
            <button className="popup__wallet_choice">
              <span>
                <img
                  src={walletConnectImg}
                  alt="walletConnect"
                  className="wc_popup_logo"
                />
                <h2>WalletConnect</h2>
              </span>
              <img src={fwrdImg} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
