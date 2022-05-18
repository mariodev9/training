import run from "../../assets/static/run.jpg";
import pist from "../../assets/static/pist.jpg";
import sierras from "../../assets/static/sierras.jpg";
import forest from "../../assets/static/forest.jpg";
import athletism from "../../assets/static/athletism.jpg";

import "../../assets/css/ImageGallery.css";

export default function () {
  return (
    <div className="gallery">
      <div className="row">
        <div className="col-md-4">
          <img src={pist} alt="" />
        </div>
        <div className="col-md-8">
          <img src={run} alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={sierras} alt="" />
        </div>
        <div className="col-md-4">
          <img src={athletism} alt="" />
        </div>
        <div className="col-md-4">
          <img src={forest} alt="" />
        </div>
      </div>
    </div>
  );
}
