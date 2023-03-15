import { AnyAction } from "@reduxjs/toolkit";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../stylesheets/Products.css";
import axios from "axios";
import { ProductInterface } from "../interfaces";
import { getData } from "../store/productsDataSlice";
import ProdCategory from "../components/ProdCategory";
import ProdCard from "../components/ProdCard";
import { setCategory } from "../store/chosenCategorySlice";

const Products = () => {
  const [catData, setCatData] = useState<string[]>([]);
  const chosenCat = useSelector((state: any) => state.chosenCategory.value);
  const [allCategories, setAllCategoies] = useState<string[]>([
    ...chosenCat.split(", "),
  ]);
  console.log("allCategories...", allCategories);
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const allProducts = useSelector(
    (state: any) => state.productsData.value.data
  );

  const checkboxHandler = (e: any) => {
    if (e.target.checked) {
      const val: string[] = [...allCategories, e.target.value];
      setAllCategoies(val);
      dispatch(setCategory(val.join(", ")));
    } else if (e.target.checked === false) {
      let freshArray = allCategories.filter((val) => val !== e.target.value);
      setAllCategoies([...freshArray]);
      dispatch(setCategory(freshArray.join(", ")));
    }
  };

  const categoryFilter = (prod: ProductInterface): boolean => {
    if (
      (allCategories.length === 1 && allCategories[0] === "") ||
      allCategories.length === 0
    ) {
      return true;
    }
    const allCat: string = allCategories.join();
    return allCat.includes(prod.category);
  };

  const fetchCategories = async () => {
    console.log("fetching categories...");
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      const responseData: string[] = await response.data;
      setCatData(responseData);
      sessionStorage.setItem("category-data", JSON.stringify(responseData));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );
      const responseData: ProductInterface[] = response.data?.products;
      dispatch(getData(responseData));
      sessionStorage.setItem("products-data", JSON.stringify(responseData));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("category-data")) {
      console.log("getting data from session storage..");
      setCatData(JSON.parse(sessionStorage.getItem("category-data") || "{}"));
      dispatch(
        getData(JSON.parse(sessionStorage.getItem("products-data") || "{}"))
      );
    } else {
      fetchCategories();
      fetchProducts();
    }
  }, []);
  return (
    <div className="products-div">
      <section className="prod-filter-section">
        <div className="prod-filter-categories">
          <h2>Categories</h2>
        </div>
        <div className="prod-filter-categories-list">
          {catData.length > 0 &&
            catData.map((cat: string, index: number) => {
              return (
                <ProdCategory
                  checkCat={cat}
                  checkboxHandler={checkboxHandler}
                  key={`radio-cat-${index}`}
                />
              );
            })}
        </div>
      </section>
      <section className="prod-result-section">
        {allProducts.length > 0 &&
          allProducts
            .filter(categoryFilter)
            .map((prod: ProductInterface, index: number) => {
              return <ProdCard {...prod} key={`prod-card--${index}`} />;
            })}
      </section>
    </div>
  );
};

export default Products;
