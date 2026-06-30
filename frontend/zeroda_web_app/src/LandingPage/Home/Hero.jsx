import React from "react";

const Hero = () => {
    return(
        <>
        <div className="container p-5 text-center">
            <div className="row mt-5">
                <img src="/public/assets/media/images/homeHero.png" alt="loading..." className="mb-5" />
                <h1 className="mt-5">Invest in everything</h1>
                <p>online platform to invest in stocks, derivatives and mutual funds</p>
                <button className="p-2 btn btn-primary fs-5" style={{width:"20%", margin:"0 auto"}}>Signup now</button>
            </div>
        </div>
        </>
    );
};

export default Hero;