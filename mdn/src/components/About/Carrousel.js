import React from "react";
import "../../assets/css/Carrousel.scss";
import run from "../../assets/static/run.jpg";
import forest from "../../assets/static/forest.jpg";
import audi from "../../assets/static/audi.png";

export default function Carrousel() {
  return (
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src={run} height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src={run} height="100" width="200" alt="" />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        {/* DOUBLE */}
        <div class="slide">
          <img src={run} height="100" width="250" alt="" />
        </div>
        <div class="slide">
          <img src={run} height="100" width="200" alt="" />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
        <div class="slide">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height="100"
            width="250"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
