import React from "react";
import Hero from "./Hero";
import NFTs from "./NFTs";
import Inspiration from "./Inspiration";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Inspiration />
      <NFTs />
      <Footer />
    </div>
  );
}

export default Home;
