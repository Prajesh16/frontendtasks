import React from "react";
import "../css/Content.css";
import Image from "../asset/image.png";

function Content() {
  return (
    <div className="mainDescription">
      <div className="contentDescription">
        <h1 className="contentTitle">Monetization on Your Terms</h1>
        <p className="paragraph">
          Explore innovative ways to earn from your content. Everything you
          build here is safe and secure. Earn your consistent income.Get
          detailed campaign briefs from brands—no more back-and-forth emails or
          lengthy calls.Get detailed campaign briefs from brands—no more
          back-and-forth emails calls.
        </p>
        <p className="paragraph">
          Explore innovative ways to earn from your content. Everything you
          build here is safe and secure. Earn your consistent income.Get
          detailed campaign briefs from brands—no more back-and-forth emails or
          lengthy calls.Get detailed campaign briefs from brands—no more
          back-and-forth emails calls.
        </p>
      </div>
      <div className="contentImage">
        <img src={Image} className="image" alt="Advertisement" />
      </div>
    </div>
  );
}

export default Content;
