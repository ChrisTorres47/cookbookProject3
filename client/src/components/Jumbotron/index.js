import React from "react";
import "./style.css";
import MyCarousel from "../Carousel/index";

function Jumbotron() {
  return (
    <div className="jumbotron text-center" style={{ marginTop: 10 }} >
      <MyCarousel />
      <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
      </a>
    </div>
  );
}

export default Jumbotron;
