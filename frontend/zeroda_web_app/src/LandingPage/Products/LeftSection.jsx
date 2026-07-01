import React from "react";

const LeftSection = ({
  image_url,
  product_name,
  product_description,
  try_demo,
  learn_more,
  google_play,
  app_store,
}) => {
  return (
    <>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-6">
            <img src={image_url} alt="loading..." />
          </div>
          <div className="col-6">
            <h1>{product_name}</h1>
            <p>{product_description}</p>
            <div className="row">
              <a href={try_demo} className="col">
                Try demo
              </a>
              <a href={learn_more} className="col">
                Learn More
              </a>
            </div>
            <div className="row">
              <a href={google_play} className="col">
                <img
                  src="/public/assets/media/images/googlePlayBadge.svg"
                  alt="loading..."
                />
              </a>
              <a href={app_store} className="col">
                <img
                  src="/public/assets/media/images/appstoreBadge.svg"
                  alt="loading..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
