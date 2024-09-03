import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CategoryPage from "./pages/Home";
import CategoryDetail from "./pages/Detail";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Products";
import About from "./pages/About";
import Sliders from "./pages/Sliders";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetails";


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<CategoryPage />}></Route>
          <Route path="/detail/:id" element={<CategoryDetail />}></Route>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sliders" element={<Sliders />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
