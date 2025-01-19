import React from "react";
import "../css/Homepage.css";
import Image from "../asset/Spradd 2.png";
import Menu from "../asset/menu.png";
import Members from "../asset/Members.png";
import Instagram from "../asset/instagram.png";
import Xlogo from "../asset/xlogo.png";

function Homepage() {
  return (
    <div className="home">
      <div className="instagramLogo">
        <img src={Instagram} className="instagram" alt="Instagram Logo" />
      </div>
      <div className="xLogo">
        <img src={Xlogo} className="xlogo" alt="Instagram Logo" />
      </div>
      <div className="navbar">
        <img src={Image} className="logo" alt="Company Logo" />
        <img src={Menu} className="menu" alt="Menu" />
      </div>
      <div className="homepageContent">
        <div className="communityItem">
          <p className="communityBanner">1,500,000 Community members</p>
          <img
            src={Members}
            className="communityMembers"
            alt="community members"
          />
        </div>
        <div className="homeContent">
          <h2 className="homepageHeader">
            Already Famous? Spreadd helps you cash your popularity
          </h2>
          <p className="homepageDescription">
            Only if views, likes, and comments could lead to a consistently
            bigger bank balance! Spreadd is the way to consistent success along
            with building a community that stands strong with you.
          </p>
          <div className="homepageButton">
            <button className="homepageBtn">JOIN NOW &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
