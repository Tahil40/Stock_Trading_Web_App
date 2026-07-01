import React from "react";

const Universe = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="text-center">
            <h1>The Zerodha Universe</h1>
            <h4 className="mt-3 fs-5">
              Extend your trading and investment experience even further with
              our partner platforms
            </h4>
          </div>
          <div className="row my-5">
            <div className="row col-4 text-center">
              <img src="/public/assets/media/images/smallcaseLogo.png" alt="loading..." style={{width:"60%"}} />
              <p className="text-muted">Thematic investment platform</p>
            </div>
            <div className="row col-4 text-center">
              <img src="/public/assets/media/images/streakLogo.png" alt="loading..." style={{width:"60%"}} />
              <p className="text-muted">Algo & strategy platform</p>
            </div>
            <div className="row col-4 text-center">
              <img src="/public/assets/media/images/sensibullLogo.svg" alt="loading..." style={{width:"60%"}} />
              <p className="text-muted">Options trading platform</p>
            </div>
          </div>
          <div className="row my-5">
            <div className="row col-4 text-center">
              <img src="/public/assets/media/images/zerodhaFundhouse.png" alt="loading..." style={{width:"60%"}} />
              <p className="text-muted">Asset management</p>
            </div>
            <div className="row col-4 text-center">
              <img src="/public/assets/media/images/goldenpiLogo.png" alt="loading..." style={{width:"60%"}} />
              <p className="text-muted">Bonds trading platform</p>
            </div>
            <div className="row col-4 text-center">
              <img src="/public/assets/media/images/dittoLogo.png" alt="loading..." style={{width:"60%"}} />
              <p className="text-muted">Options trading platform</p>
            </div>
          </div>
          <button className="my-5 btn btn-primary" style={{width:"20%", margin:"0 auto"}}>Sign up now</button>
        </div>
      </div>
    </>
  );
};

export default Universe;
