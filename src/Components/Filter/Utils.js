export const priceSort = (state, data) => {
  if (state.filters.sortbyPrice === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }
  if (state.filters.sortbyPrice === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }
  return data;
};

export const filterData = (state, data) => {
  let Array = [...data];

  //brands
  if (state.filters.filterbyBrands.length !== 0) {
    Array = Array.filter((item) =>
      state.filters.filterbyBrands.includes(item.brand)
    );
  }
  //filterbyCategory
  if (state.filters.filterbyCategory.length !== 0) {
    Array = Array.filter((item) =>
      state.filters.filterbyCategory.includes(item.category)
    );
  }
  return Array;
};
