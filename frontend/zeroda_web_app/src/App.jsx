import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./LandingPage/Home/HomeLayout";
import AboutLayoutSection from "./LandingPage/About/AboutLayout";
import PricingLayout from "./LandingPage/Pricing/PricingLayout";
import ProductLayout from "./LandingPage/Products/ProductLayout";
import SignUp from "./LandingPage/SignUp/SignUp";
import SupportLayout from "./LandingPage/Support/SupportLayout";
import Navbar from "./LandingPage/components/Navbar";
import Footer from "./LandingPage/components/Footer";

function App() {
  return (
    <BrowserRouter>
    {/* adding navbar component */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomeLayout/>}/>
      <Route path="/about" element={<AboutLayoutSection/>}/>
      <Route path="/pricing" element={<PricingLayout/>}/>
      <Route path="/products" element={<ProductLayout/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/support" element={<SupportLayout/>}/>
    </Routes>
    {/* adding footer component */}
    <Footer/>
    </BrowserRouter>
  );
}

export default App;