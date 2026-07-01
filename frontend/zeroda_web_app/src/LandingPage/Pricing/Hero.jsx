import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row border-bottom text-center my-5">
          <h1>Pricing</h1>
          <h4 className="text-muted mb-5">
            Free equity investments and flat &#8377;20 traday and F&O trades
          </h4>
        </div>
        <div className="row my-5">
          <div className="col-4">
            <img
              src="/public/assets/media/images/pricing0.svg"
              alt="loading..."
            />
            <h2 className="fs-3">Free equity delivery</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              adipisci, nesciunt sapiente perspiciatis deleniti amet. Ratione
              obcaecati cumque, labore eligendi nesciunt maiores necessitatibus
              eius quos facere rem quisquam tempora voluptate.
            </p>
          </div>
          <div className="col-4">
            <img
              src="/public/assets/media/images/intradayTrades.svg"
              alt="loading..."
            />
            <h2 className="fs-4">Intraday and F&O trades</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              adipisci, nesciunt sapiente perspiciatis deleniti amet. Ratione
              obcaecati cumque, labore eligendi nesciunt maiores necessitatibus
              eius quos facere rem quisquam tempora voluptate.
            </p>
          </div>
          <div className="col-4">
            <img
              src="/public/assets/media/images/pricing0.svg"
              alt="loading..."
            />
            <h2 className="fs-3">Free equity delivery</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              adipisci, nesciunt sapiente perspiciatis deleniti amet. Ratione
              obcaecati cumque, labore eligendi nesciunt maiores necessitatibus
              eius quos facere rem quisquam tempora voluptate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;