import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/signup"

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Outlet />
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
