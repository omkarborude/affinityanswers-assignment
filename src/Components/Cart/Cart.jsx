import { useData } from "../../Context/DataProvider";
import "./cart.css";

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useData();

  const totalitem = (cart) => {
    return cart.reduce((acc, curr) => {
      return acc + Number(curr.quantity);
    }, 0);
  };

  const cartvalue = (cart) => {
    return cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * Number(curr.quantity);
    }, 0);
  };

  const discountValue = (price, discount) => {
    return price - (price * discount) / 100;
  };
  return (
    <div className="cart-main-div">
      <h2>
        {cart.length < 1 ? (
          "Cart is Empty"
        ) : (
          <h3>
            {"Cart"}({cart.length} Item)
          </h3>
        )}
      </h2>
      <div className="cart-inner-flex-main-div">
        <div className="cart-left-products-div">
          {cart.map((item) => {
            return (
              <div className="cart-product-div">
                <div className="cart-img-div">
                  <img src={item.image} />
                </div>
                <div className="cart-product-info">
                  <p>{item.name}</p>
                  <p>Rs. {item.price}</p>
                  <div className="cart-product-bns">
                    <button
                      className="dec-btn"
                      onClick={() => {
                        item.quantity == 1
                          ? dispatch({ type: "REMOVE_CART", payload: item })
                          : dispatch({ type: "DEC_QNT", payload: item });
                      }}
                    >
                      <i
                        className={
                          item.quantity !== 1 ? "bx bx-minus" : "bx bx-trash"
                        }
                      ></i>
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => {
                        dispatch({ type: "INC_QNT", payload: item._id });
                      }}
                      className="inc-btn"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn-remove-product"
                    onClick={() => {
                      dispatch({ type: "REMOVE_CART", payload: item });
                    }}
                  >
                    Remove
                  </button>
                  <div>
                    {" "}
                    <button className="btn-remove-product">
                      Save for Later
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right-value-div">
          <h5>Cart Items : {totalitem(cart)}</h5>
          <h5>Cart Value: {cartvalue(cart)}</h5>
          <p style={{ color: "orange" }}>Discount : 10%</p>
          <p>------------------------------------------</p>
          <h5>Final Value: {discountValue(cartvalue(cart), 10)}</h5>
        </div>
      </div>
    </div>
  );
};
