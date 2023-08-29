import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Router y Routes
import ColorSchemesExample from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ProductContainer from "./components/Products/ProductContainer";
import CreateAnAccount from "./components/Login/SignIn";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ColorSchemesExample />
        <Routes>
          <Route path="/WineStore" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductContainer />} />
          <Route path="/createAnAccount" element={<CreateAnAccount />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </Router>
  );
}

export default App;
