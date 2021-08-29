export const initialData = {
  products: [],
  cart: [],
  filters: {
    sortbyPrice: "",
    filterbyCategory: [],
    filterbyBrands: [],
  },
};

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS": {
      return { ...state, products: payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };
    }
    case "REMOVE_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id != payload._id),
      };
    }
    case "INC_QNT": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id !== payload
            ? item
            : {
                ...item,
                quantity: item.quantity + 1,
              }
        ),
      };
    }
    case "DEC_QNT": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id !== payload._id
            ? item
            : { ...item, quantity: item.quantity - 1 }
        ),
      };
    }

    case "SORT": {
      return {
        ...state,
        filters: {
          ...state.filters,
          sortbyPrice: payload,
        },
      };
    }

    case "FILTER_BRAND": {
      return state.filters.filterbyBrands.includes(payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterbyBrands: state.filters.filterbyBrands.filter(
                (item) => item !== payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterbyBrands: state.filters.filterbyBrands.concat(payload),
            },
          };
    }
    case "FILTER_CAT": {
      return state.filters.filterbyCategory.includes(payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              filterbyCategory: state.filters.filterbyCategory.filter(
                (item) => item != payload
              ),
            },
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              filterbyCategory: state.filters.filterbyCategory.concat(payload),
            },
          };
    }
    case "CLEAR_FILTER": {
      return {
        ...state,
        filters: {
          sortbyPrice: "",
          filterbyCategory: [],
          filterbyBrands: [],
        },
      };
    }
  }
};
