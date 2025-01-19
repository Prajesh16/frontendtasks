import React from "react";
import "../css/Career.css";
import Campaigns from "../asset/campaign.png";

function Career() {
  return (
    <div className="career">
      <div className="careerTitle">
        <h2 className="careerTitleName">
          BTake control of YOUR space to steer YOUR career into the direction
          YOU want.
        </h2>
        <p className="careerTitleDescription">
          Empowering the world's top creators and media companies. The
          all-in-one tool to help creators do more brand deals - easier, and
          faster.
        </p>
      </div>
      <div className="campaigns">
        <div className="campaignsDetails">
          <img
            src={Campaigns}
            className="campaignsImage"
            alt="Campaigns Details"
          />
        </div>
        <div className="campaignsContent">
          <h2 className="campaignsTitleName">
            Take control of YOUR space to steer YOUR career into the direction
            YOU want.
          </h2>
          <p className="campaignsTitleDescription">
            Spreadd exists to help creators upscale. Don't let stagnation ruin
            your chances. This is the community to grow fast, monetize better.
          </p>
          <button className="campaignButton">EXPLORE &rarr;</button>
        </div>
      </div>
    </div>
  );
}

export default Career;
