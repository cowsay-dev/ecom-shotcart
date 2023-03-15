import React, { useEffect, useState } from "react";
import { slidesData } from "../data/staticData";
import { slideDataType } from "../interfaces";
import { MdArrowForwardIos } from "react-icons/md";
import "../stylesheets/Slider.css";
import Slide from "./Slide";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  // const windowWidth: number = window.outerWidth;
  const windowInnerWidth: number = window.innerWidth;
  const changeSlide = () => {
    const slidingBox = document.getElementById("slider");
    if (slidingBox) {
      slidingBox.style.transform = `translateX(-${
        windowInnerWidth * ((currSlide + 1) % 3)
      }px)`;
      setCurrSlide(currSlide + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide();
    }, 4000);
    return () => clearInterval(timer);
  });
  return (
    <section
      className="slider-main-container"
      style={{ width: windowInnerWidth }}
    >
      <div className="slider" id="slider">
        {slidesData.map((value: slideDataType, index: number) => {
          return <Slide {...value} key={`slide-${index}`} />;
        })}
      </div>
      <div className="sliding-btn-right">
        <button onClick={changeSlide}>
          <MdArrowForwardIos />
        </button>
      </div>
    </section>
  );
};

export default Slider;
