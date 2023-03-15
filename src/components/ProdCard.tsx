import React from "react";
import "../stylesheets/Products.css";
import { ProductInterface } from "../interfaces";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProdCard = (props: ProductInterface) => {
  const navigate = useNavigate();
  const actualPrice: number = Number(
    (props.price / (1 - props.discountPercentage / 100)).toFixed(1)
  );

  const discountPercent: number = Math.round(props.discountPercentage);
  return (
    <div className="prod-card" onClick={() => navigate(`/product/${props.id}`)}>
      <div className="prod-card-img">
        <img src={props.thumbnail} alt={`prod-card-${props.id}`} />
      </div>
      <div className="prod-card-details">
        <div className="prod-card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="prod-card-rating">
          <p>
            <b
              style={{
                fontSize: "1.2rem",
              }}
            >
              {props.rating.toFixed(1)}
            </b>
          </p>
          <AiFillStar className="star-icon" />
        </div>
        <div className="prod-card-price">
          <h2>
            <sup>$</sup>
            {props.price}
          </h2>
          <p className="actual-price">
            <del>
              <sup>$</sup>
              {actualPrice}
            </del>
          </p>
          <p className="discount-percent">({discountPercent}% off)</p>
        </div>
        <div className="prod-card-availability">
          {props.stock > 0 ? "In stock" : "Out of stock"}
        </div>
      </div>
    </div>
  );
};

export default ProdCard;
