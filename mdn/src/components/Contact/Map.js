import React from "react";

export default function Map() {
  return (
    <iframe
      className="map"
      width="100%"
      height="500"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Paseo%20de%20los%20pescadores%20tandil&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    ></iframe>
  );
}
