import { useEffect } from "react";
import "./App.css";
import { Navbar, ProductListing, Cart } from "./Components/export";
import { useData } from "./Context/DataProvider";
import { Routes, Route } from "react-router-dom";

function App() {
  const { state, dispatch } = useData();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />{" "}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
