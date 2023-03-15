import React from "react";
import Category from "../components/Category";
import Slider from "../components/Slider";
import "../stylesheets/Home.css";

const Home = () => {
  return (
    <div className="home-div">
      <Slider />
      <Category />
    </div>
  );
};

export default Home;
