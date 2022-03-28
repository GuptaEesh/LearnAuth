import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { Private } from "./PrivateRoute";
import { Wish } from "./Wish";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/wish">
          <h2>Wishlist</h2>
        </Link>
        <Link to="/login">
          <h2>Login</h2>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wish" element={<Private component={<Wish />} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
