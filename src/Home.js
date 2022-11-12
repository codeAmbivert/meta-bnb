import React from "react";
import Hero from "./Hero";
import NFTs from "./NFTs";
import Inspiration from "./Inspiration";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Inspiration />
      <NFTs />
    </div>
  );
}

export default Home;
