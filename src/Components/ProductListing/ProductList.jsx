import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/DataProvider";
import { Filter } from "../Filter/Filter";
import { filterData, priceSort } from "../Filter/Utils";
import data from "../../Database/Product.json";

import "./list.css";

export const ProductListing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  }, []);
  const sortedData = priceSort(state, state.products);

  const FilterData = filterData(state, sortedData);

  const isAlreadyInCart = (cart, id) => {
    if (cart) {
      return cart.find((item) => item._id == id);
    }
    return false;
  };
  return (
    <div className="home-main-div">
      <div className="home-filter-left-div">
        <Filter />
      </div>

      <div className="pr-listing-main-div">
        {FilterData.map((item) => {
          console.log(item);
          return (
            <div class="card" style={{ width: "15rem" }}>
              <div className="card-img-div">
                <img src={item.image} class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.description}</p>
                <h6>Rs.{item.price}</h6>
                <h7>Brand:{item.brand}</h7>
                <p>Size:{item.size}</p>

                <a
                  href="#"
                  class="btn btn-primary"
                  onClick={() => {
                    {
                      isAlreadyInCart(state.cart, item._id)
                        ? navigate("/cart")
                        : dispatch({ type: "ADD_TO_CART", payload: item });
                    }
                  }}
                >
                  {isAlreadyInCart(state?.cart, item._id)
                    ? "Go To Cart"
                    : "Add TO Cart"}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
