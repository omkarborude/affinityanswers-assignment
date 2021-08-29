import { useData } from "../../Context/DataProvider";

export const Cat = () => {
  const ideal = ["tshirt", "top", "shirt"];

  const { state, dispatch } = useData();
  return (
    <div>
      <h6 style={{ textAlign: "left", marginTop: "1rem" }}>Category :</h6>

      {ideal.map((item) => {
        return (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={state.filters.filterbyCategory.includes(item)}
              onChange={() => {
                dispatch({ type: "FILTER_CAT", payload: item });
              }}
            />
            <label class="form-check-label" for="flexCheckDefault">
              {item}
            </label>
          </div>
        );
      })}
    </div>
  );
};
