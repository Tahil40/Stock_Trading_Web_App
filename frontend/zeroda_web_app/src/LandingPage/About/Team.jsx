import React from "react";

const TeamComponent = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row border-top">
          <h1 className="text-center mt-5">People</h1>
        </div>
        <div
          className="row mt-5"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-5 text-center">
            <img
              src="/public/assets/media/images/nithinKamath.jpg"
              alt="loading..."
              style={{ borderRadius: "100%", width:"100%" }}
            />
            <div className="mt-3">
              <p className="text-muted">Nithin Kamath</p>
              <p className="text-muted">Founder, CEO</p>
            </div>
          </div>
          <div className="col-6 p-5">
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut distinctio vel recusandae consectetur voluptate magni a unde atque! Similique excepturi, sed tempora nostrum est esse aperiam. Nisi earum eveniet deserunt minus molestiae molestias cum magnam, dolorem temporibus harum et odio.</p>
            <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto facere assumenda nobis magnam ut odit. Atque possimus ratione optio. Voluptas?</p>
            <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, expedita!</p>
            <p className="text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComponent;