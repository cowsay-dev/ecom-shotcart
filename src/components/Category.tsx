import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/staticData";
import { CategoryType } from "../interfaces";
import { setCategory } from "../store/chosenCategorySlice";
import "../stylesheets/Category.css";

const Category = () => {
  return (
    <section className="category-section">
      <div className="category-heading">
        <h1>Shop by category</h1>
      </div>
      <div className="categories">
        {categories.map((data: CategoryType, index: number) => {
          return <CategoryCard {...data} key={`cat-card-${index}`} />;
        })}
      </div>
    </section>
  );
};

const CategoryCard = (props: CategoryType) => {
  const navigate = useNavigate();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const categorySelected = () => {
    dispatch(setCategory(props.items));
    navigate("/products");
  };
  return (
    <div className="category-card">
      <div className="category-card-heading">
        <h2>{props.cat}</h2>
      </div>
      <div className="category-card-img">
        <img
          src={require(`../assets/category-images/${props.imgUrl}`)}
          alt={`img-${props.imgUrl}`}
        />
      </div>
      <div className="category-card-btn">
        <button onClick={categorySelected}>Shop now</button>
      </div>
    </div>
  );
};

export default Category;
