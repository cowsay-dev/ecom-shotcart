import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { slideDataType } from "../interfaces";
import { setCategory } from "../store/chosenCategorySlice";
import "../stylesheets/Slider.css";

const Slide = (props: slideDataType) => {
  const navigate = useNavigate();
  const windowInnerWidth: number = window.innerWidth;
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const categorySelected = () => {
    dispatch(setCategory(props.items));
    navigate("/products");
  };
  return (
    <div
      className="slide"
      style={{
        backgroundColor: props.bgColor,
        minWidth: windowInnerWidth,
      }}
      onClick={categorySelected}
    >
      <div className="slide-desc">
        <div className="slide-desc-heading">{props.heading}</div>
        <div className="slide-desc-desc">{props.description}</div>
        <div className="slide-desc-explore">
          <button onClick={categorySelected}>Explore</button>
        </div>
      </div>
      <div className="slide-img">
        <img
          src={require(`../assets/slide-images/${props.imgUrl}`)}
          alt="decor"
        />
      </div>
    </div>
  );
};

export default Slide;
