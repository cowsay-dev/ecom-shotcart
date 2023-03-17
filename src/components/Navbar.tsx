import "../stylesheets/Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { ProductInterface } from "../interfaces";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState<ProductInterface[]>([]);
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const currentCart = useSelector((state: any) => state.cartData.value.data);

  const clickHandler = (id: number) => {
    navigate(`/product/${id}`);
    setQuery("");
  };

  const fetchProducts = async () => {
    console.log("fetching data in navbar...");
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );
      const responseData: ProductInterface[] = response.data?.products;
      setData(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <nav className="navbar-div">
      <div className="nav-first-div">
        <img src={require("../assets/shot-Cart1.png")} alt="logo" />
        <div className="nav-about-div">
          <Link to="/">HOME</Link>
        </div>
        <div className="nav-about-div">
          <Link to="/products">PRODUCTS</Link>
        </div>
      </div>
      <div className="nav-mid-div">
        <div className="nav-searchbar-div">
          <input
            type="text"
            value={query}
            placeholder="Search for products"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
          />
        </div>
        <div className="nav-searchicon-div">
          <FiSearch style={{ width: 20, height: 20 }} />
        </div>
        {query && (
          <div className="show-result-div">
            {data
              .filter((val: ProductInterface) => {
                return val.title.toLowerCase().includes(query.toLowerCase());
              })
              .map((val: ProductInterface, index: number) => {
                return (
                  <div
                    onClick={() => clickHandler(val.id)}
                    key={`search-item--${index}`}
                  >
                    {val.title}
                  </div>
                );
              })}
          </div>
        )}

        <div className="temp-div">
          <div className="nav-about-div">
            <Link to="/">HOME</Link>
          </div>
          <div className="nav-about-div">
            <Link to="/products">PRODUCTS</Link>
          </div>
        </div>
      </div>
      <div className="nav-last-div" onClick={() => navigate("/cart")}>
        <MdOutlineShoppingCart style={{ width: 24, height: 24 }} />
        <div className="cart-item-count">{currentCart.product.length}</div>
        <span>Cart</span>
      </div>
    </nav>
  );
};

export default Navbar;
