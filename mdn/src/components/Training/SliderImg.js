import React from "react";
import Slider from "react-slick";
// pictures
import pist from "../../assets/static/pist.jpg";
import sierras from "../../assets/static/sierras.jpg";

export default function SliderImg() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={sierras} width="500px" height="400px" alt="" />
      </div>
      <div>
        <img src={sierras} width="500px" height="400px" alt="" />
      </div>
      <div>
        <img src={sierras} width="500px" height="400px" alt="" />
      </div>
      <div>
        <img src={sierras} width="500px" height="400px" alt="" />
      </div>
      <div>
        <img src={sierras} width="500px" height="400px" alt="" />
      </div>
    </Slider>
  );
}
