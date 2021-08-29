import { useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          AffinityAnswers
        </h3>
      </div>
      <div className="nav-cart-btn-div">
        <h3
          onClick={() => {
            navigate("/cart");
          }}
        >
          <i class="fas fa-shopping-cart"></i>Cart
        </h3>
      </div>
    </nav>
  );
};
