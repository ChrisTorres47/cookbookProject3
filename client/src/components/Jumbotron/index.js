import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
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