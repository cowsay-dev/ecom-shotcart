import React from "react";
import { CartProdInterface } from "../interfaces";
import "../stylesheets/Cart.css";

interface Props {
  data: CartProdInterface;
  deleteFromCart(item: CartProdInterface): void;
  updateTheCart(product: CartProdInterface, arg: string): void;
}

const CartCard = (props: Props) => {
  const quantities: number[] = [];
  for (let i = 1; i <= 10; i++) {
    quantities.push(i);
  }
  return (
    <div className="cart-card-main">
      <div className="cart-card-img">
        <img src={props.data.imgUrl} alt="product-img" />
      </div>
      <div className="cart-card-detail">
        <div className="cart-card-prod-title">
          <h2>{props.data.title}</h2>
        </div>
        <div className="cart-card-pricing">
          <p className="cart-card-price">
            <sup>$</sup>
            {props.data.price * props.data.quantity}
          </p>
          <p className="cart-card-actual-price">
            <del>
              <sup>$</sup>
              {(props.data.actualPrice * props.data.quantity).toFixed(1)}
            </del>
          </p>
          <p className="cart-card-discount-percent">
            ({props.data.discountPercentage}% off)
          </p>
        </div>
        <div className="cart-card-btns">
          <div className="cart-card-qty">
            <p>Qty</p>
            <div>
              <button
                className="decrease-btn"
                onClick={() => props.updateTheCart(props.data, "decrease")}
              >
                -
              </button>
              <p>{props.data.quantity}</p>
              <button
                className="increase-btn"
                onClick={() => props.updateTheCart(props.data, "increase")}
              >
                +
              </button>
            </div>
          </div>
          <div className="cart-card-remove">
            <button onClick={() => props.deleteFromCart(props.data)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
