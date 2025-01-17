import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className="title">
      <h2 className="titleName">
        Built for Passion Built to Sustain Spreadd is committed to YOUR success!
      </h2>
      <p className="titleDescription">
        Discover the tools and strategies you need to achieve sustainable
        success. Unlock your full potential.
      </p>
      <div className="button">
        <button className="btn active">Monetization Options</button>
        <button className="btn">Collaborate with Trusted Brands</button>
        <button className="btn">Grow Your Audience</button>
        <button className="btn">Flourish in a Supportive Community</button>
      </div>
    </div>
  );
}

export default Header;
