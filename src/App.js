import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
