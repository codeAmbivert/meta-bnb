import React from "react";
import MetaBnb from "./images/footerMbLogo.png";
import fbLogo from "./images/fbLogo.png";
import instagramLogo from "./images/instaLogo.png";
import twitterLogo from "./images/twitterLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="all_about_company">
          <div className="footer__logos">
            <img src={MetaBnb} alt="meta bnb" />
            <div className="social_logos">
              <Link to="/">
                <img src={fbLogo} alt="Facebook" />
              </Link>
              <Link to="/">
                <img src={instagramLogo} alt="Instagram" />
              </Link>
              <Link link="/">
                <img src={twitterLogo} alt="Twitter" />
              </Link>
            </div>
          </div>
          <div className="footer__community" id="community">
            <div className="_header">Community</div>
            <p>NFT</p>
            <p>Tokens</p>
            <p>Landlords</p>
            <p>Discord</p>
          </div>
          <div className="footer__place" id="place">
            <div className="_header">Places</div>
            <p>Castle</p>
            <p>Farms</p>
            <p>Beach</p>
            <p>Learn more</p>
          </div>
          <div className="footer__about" id="about">
            <div className="_header">About us</div>
            <p>Road maps</p>
            <p>Creators</p>
            <p>Career</p>
            <p>Contacts</p>
          </div>
        </div>
        <div className="copyright">&copy; 2022 Metabnb</div>
      </div>
    </div>
  );
}

export default Footer;
