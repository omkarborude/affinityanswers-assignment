import { useData } from "../../Context/DataProvider";

export const Brands = () => {
  const brands = ["Adidas", "Nike", "Gucci", "WROGN"];

  const { state, dispatch } = useData();
  return (
    <div>
      <h6 style={{ textAlign: "left", marginTop: "1rem" }}>Brands :</h6>

      {brands.map((brand) => {
        return (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={state.filters.filterbyBrands.includes(brand)}
              onChange={() => {
                dispatch({ type: "FILTER_BRAND", payload: brand });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              {brand}
            </label>
          </div>
        );
      })}
    </div>
  );
};
