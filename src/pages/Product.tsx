import { Dispatch, useEffect, useState } from "react";
import {
  CartInterface,
  ProductInterface,
  CartProdInterface,
} from "../interfaces";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../stylesheets/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { addToCart } from "../store/cartDataSlice";

const Product = () => {
  const [data, setData] = useState<ProductInterface>({} as ProductInterface);
  const { id } = useParams();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const currentCart = useSelector((state: any) => state.cartData.value.data);
  const fetchProduct = async (id: string) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const responseData: ProductInterface = response.data;
      setData(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCartHandler = () => {
    console.log("function called", currentCart);
    if (currentCart) {
      console.log("The data is:", data);
      const ap: number = Number(
        (data.price / (1 - data.discountPercentage / 100)).toFixed(1)
      );
      const dp: number = Math.round(data.discountPercentage);
      const discountedPrice: number = ap - data.price;
      const currProduct: CartProdInterface = {
        id: data.id,
        title: data.title,
        imgUrl: data.thumbnail,
        price: data.price,
        discountPercentage: dp,
        actualPrice: ap,
        quantity: 1,
      };
      if (currentCart.totalProducts === 0) {
        const payload: CartInterface = {
          actualPrice: currProduct.actualPrice,
          total: currProduct.price,
          product: [currProduct],
          discountedTotal: discountedPrice,
          totalProducts: 1,
        };
        dispatch(addToCart(payload));
      } else {
        let addFlag: boolean = true;
        for (let i of currentCart.product) {
          if (i.id === currProduct.id) {
            addFlag = false;
          }
        }
        const payload: CartInterface = {
          total: currProduct.price + currentCart.total,
          actualPrice: currProduct.actualPrice + currentCart.actualPrice,
          product: [...currentCart.product, currProduct],
          discountedTotal: currentCart.discountedTotal + discountedPrice,
          totalProducts: currentCart.totalProducts + 1,
        };

        if (addFlag) {
          dispatch(addToCart(payload));
        }
      }
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);
  return (
    <div className="prod-page-div">
      {data && (
        <>
          <div className="prod-img">
            <img src={data.thumbnail} alt="first--prod-img" />
          </div>
          <div className="prod-details">
            <div className="prod-title">
              <h2>{data.title}</h2>
            </div>
            <div className="prod-description">
              <p>{data.description}</p>
            </div>
            <div className="prod-rating">
              <p>{Number(data.rating).toFixed(1)}</p>{" "}
              <AiFillStar className="prod-rating-icon" />
            </div>
            <div className="ruler"></div>
            <div className="prod-pricing">
              <h2>
                <sup>$</sup>
                {data.price}
              </h2>
              <p className="prod-actual-price">
                <del>
                  <sup>$</sup>
                  {Number(
                    (data.price / (1 - data.discountPercentage / 100)).toFixed(
                      1
                    )
                  )}
                </del>
              </p>
              <p className="prod-discount-percent">
                ({Math.round(data.discountPercentage)}% off)
              </p>
            </div>
            <div className="dummy-1">
              <p>inclusive of all taxes</p>
            </div>
            <div className="prod-add">
              <button onClick={addToCartHandler} type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
