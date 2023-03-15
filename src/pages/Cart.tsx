import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import "../stylesheets/Cart.css";
import { CartProdInterface } from "../interfaces";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { removeFromCart, updateCart } from "../store/cartDataSlice";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const currentCart = useSelector((state: any) => state.cartData.value.data);
  const allProducts = currentCart.product;
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const deleteFromCart = (item: CartProdInterface) => {
    dispatch(removeFromCart(item));
  };

  const updateTheCart = (product: CartProdInterface, arg: string) => {
    if (product.quantity === 1 && arg === "decrease") {
      dispatch(removeFromCart(product));
    } else {
      const payload = {
        product: product,
        qty: arg === "increase" ? product.quantity + 1 : product.quantity - 1,
      };
      dispatch(removeFromCart(payload.product));
      dispatch(updateCart(payload));
    }
  };
  return (
    <div className="cart-main-div">
      {allProducts?.length > 0 ? (
        <>
          {" "}
          <div className="all-carts">
            {allProducts.map((cartProd: CartProdInterface, index: number) => {
              return (
                <CartCard
                  data={cartProd}
                  deleteFromCart={deleteFromCart}
                  updateTheCart={updateTheCart}
                  key={`cart-card--${index}`}
                />
              );
            })}
          </div>
          <div className="total-div">
            <div className="total-div-heading">
              <h2>PRICE DETAILS</h2>
            </div>
            <div className="total-div-detail">
              <p>Total items</p>
              <p>{currentCart.product.length}</p>
            </div>
            <div className="total-div-detail">
              <p>Price</p>
              <p>${Number(currentCart.actualPrice).toFixed(1)}</p>
            </div>
            <div className="total-div-detail">
              <p>Discount</p>
              <p className="total-div-detail-discount">
                - ${Number(currentCart.discountedTotal).toFixed(1)}
              </p>
            </div>
            <div className="total-div-detail">
              <p>Delivery charges</p>
              <p className="total-div-detail-dc">Free</p>
            </div>
            <div className="ruler"></div>
            <div className="total-div-amount">
              <p>Total Amount</p>
              <p>${currentCart.total}</p>
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
