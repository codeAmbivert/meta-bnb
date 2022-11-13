import React, { useState } from "react";
import mblogo from "./images/metabnb-logo.png";
import cancelBtn from "./images/cancel-button.png";
import mmColorLogo from "./images/colored-metamask-logo.png";
import walletConnectImg from "./images/walletConnect-logo.png";
import fwrdImg from "./images/foward-arrow.png";
import { Link } from "react-router-dom";
import hamBurgerIcon from "./images/Hamburger_icon.png";
import cancelBtn2 from "./images/cancel_icon.png";

function Navbar() {
  const [btnState, setBtnState] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState((toggleState) => !toggleState);
  };
  const handleConnect = () => {
    setBtnState((btnState) => !btnState);
    setToggleState(false);
  };
  let hamBurgerToggle = toggleState ? "menuActive" : "menuUnactive";
  let toggleClassCheck = btnState ? "active" : null;
  return (
    <div className="navbar">
      <Link to="/">
        <img src={mblogo} alt="metabnb logo" className="nav_logo" />
      </Link>
      <div className="navlinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place_to_stay">Place to stay</Link>
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
      <div className="smaller_screen_toggle">
        <div
          className="hamburger_toogle_icon"
          onClick={() => {
            handleToggle();
          }}
        >
          <img src={hamBurgerIcon} alt="toogle icon" />
        </div>
        <div className={`${hamBurgerToggle}`}>
          <button className="close_btn">
            <img
              src={cancelBtn2}
              alt="close button"
              onClick={() => handleToggle()}
            />
          </button>
          <div className="navlinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/place_to_stay">Place to stay</Link>
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
        </div>
      </div>
      <div className={`${toggleClassCheck}`}>
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
