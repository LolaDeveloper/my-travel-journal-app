import React from "react";
import Daisetsu from "../images/daisetsu-zan.jpg";
import Location from "../images/location-pin.png";
import "./card.css";

export default function Card() {
  return (
    <div className=" container Card">
      <img
        src={Daisetsu}
        alt="National Park Japan"
        className=" img-fluid card--image"
      />
      <div className="card--stats">
        <img src={Location} alt="Location Pin" className="card--pin" />
        <div className="location">
          <span> Kamikawa, Hokkaido</span>{" "}
          <span>
            <a
              href="https://www.google.com/maps/place/Daisetsuzan+National+Park/@43.5083786,142.8442812,11z/data=!4m9!1m2!2m1!1sdaisetsuzan!3m5!1s0x5f0d2938f602a549:0xa0daa8c12d0764fc!8m2!3d43.5083823!4d142.9843628!15sCgtkYWlzZXRzdXphbloNIgtkYWlzZXRzdXphbpIBDW5hdGlvbmFsX3Bhcms"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>{" "}
          </span>
        </div>
        <div>
          <h1 className="class--title">Daisetsuzan National Park </h1>
          <p className="card--desc">
            {" "}
            This was such a fun trip, never mind that it was freezing cold at
            the top of the mountain in June! The onsen (hot spting) bath made
            the whole climb worth it at the end of the day. Best time to visit,
            I hear, is around the second half of September. Watch out for the
            bears!{" "}
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
