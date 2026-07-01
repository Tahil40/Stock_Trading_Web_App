import React from "react";

const RightSection = ({
  image_url,
  product_name,
  product_description,
  learn_more
}) => {
  return (
    <>
    <div className="container border-top mt-5">
        <div className="row mt-5" style={{alignItems:"baseline"}}>
          <div className="col-6">
            <h1>{product_name}</h1>
            <p>{product_description}</p>
            <a href={learn_more} className="mt-5">
                Learn More
              </a>
          </div>
          <div className="col-6">
            <img src={image_url} alt="loading..." />
          </div>
        </div>
      </div>
      {/* <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-6">
            <h1>Kite</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              molestias quia ipsum magnam quo, suscipit ea quod, alias autem
              odit veritatis temporibus. Dolores qui repellendus expedita
              ratione perferendis suscipit voluptatem.
            </p>
            <div className="row">
              <a href="" className="col">
                Try demo
              </a>
              <a href="" className="col">
                Learn More
              </a>
            </div>
            <div className="row">
              <img
                src="/public/assets/media/images/googlePlayBadge.svg"
                alt="loading..."
                className="col"
              />
              <img
                src="/public/assets/media/images/appstoreBadge.svg"
                alt="loading..."
                className="col"
              />
            </div>
          </div>
          <div className="col-6">
            <img src="/public/assets/media/images/kite.png" alt="loading..." />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default RightSection;
