import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PlaceChoice from "./PlaceChoice";

function PlaceToStay() {
  return (
    <div className="place_to_stay">
      <Navbar />
      <PlaceChoice />
      <Footer />
    </div>
  );
}

export default PlaceToStay;
