import { useData } from "../../Context/DataProvider";
import { Brands } from "./Brands";
import { Cat } from "./Cat";
import "./filter.css";

export const Filter = () => {
  const { state, dispatch } = useData();
  return (
    <div className="filter-main-div">
      <div className="filter-top-div">
        <h2>Filters</h2>
        <button
          className="btn-clear-filter"
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          Clear{" "}
        </button>
      </div>
      <div className="filterby-sort-div">
        <h6 style={{ textAlign: "left", marginTop: "1rem" }}>Sort By Price:</h6>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="sort"
            id="flexRadioDefault1"
            value="LOW_TO_HIGH"
            onChange={() => {
              dispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
            }}
            checked={state.filters.sortbyPrice === "LOW_TO_HIGH"}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Low to High
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="sort"
            id="flexRadioDefault2"
            value="HIGH_TO_LOW"
            onChange={() => {
              dispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
            }}
            checked={state.filters.sortbyPrice === "HIGH_TO_LOW"}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            High to Low
          </label>
        </div>
      </div>
      <Cat />
      <Brands />
    </div>
  );
};
