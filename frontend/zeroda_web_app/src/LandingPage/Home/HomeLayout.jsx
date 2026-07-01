import React from "react";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomeLayout(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Education/>
        <Pricing/>
        <Stats/>
        <Footer/>
        </>
    );
};