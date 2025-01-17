import React from "react";
import "../css/Card.css";
import Image from "../asset/avatar.png";

function Card() {
  return (
    <div className="card-body">
      <div className="card">
        <div className="profile">
          <img src={Image} className="profile-image" alt="Profile avatar" />
          <h2 className="person-name">Sonia</h2>
          <p className="category">Lifestyle Content</p>
        </div>
        <div className="details">
          <div className="detail-item">
            <p className="cardTitle">Achievements</p>
            <p className="description">Grew from 16k to 21.4k followers</p>
          </div>
          <div className="detail-item">
            <p className="cardTitle">Time Period</p>
            <p className="description">During a campaign with Chef Hire</p>
          </div>
          <div className="detail-item">
            <p className="cardTitle">Results</p>
            <p className="description">
              Reached 1M users and generated $1.5k in revenue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
