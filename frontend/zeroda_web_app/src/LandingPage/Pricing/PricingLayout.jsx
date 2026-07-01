import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateAccountSection from "../components/CreateAccount";

export default function PricingLayout(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <CreateAccountSection/>
        <Brokerage/>
        <Footer/>
        </>
    );
};