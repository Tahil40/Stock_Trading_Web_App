import React from "react";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SupportLayout = () => {
    return(
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket/>
        <Footer/>
        </>
    );
};

export default SupportLayout;