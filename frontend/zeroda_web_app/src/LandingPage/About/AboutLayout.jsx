import React from "react";
import HeroComponent from "./Hero";
import TeamComponent from "./Team";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutLayoutSection(){
    return(
        <>
        <Navbar/>
        <HeroComponent/>
        <TeamComponent/>
        <Footer/>
        </>
    );
};