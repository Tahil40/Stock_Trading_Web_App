import React from "react";

const Awards = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-6 p-5">
            <img
              src="/public/assets/media/images/largestBroker.svg"
              alt="loading..."
            />
          </div>
          <div className="col-6 p-5">
            <h4 className="mb-3">Largest stock broker in india</h4>
            <p>
              2+ million zerodha clients contribute to over 50% of all retails
              volumes in india daily by trading and investing in:
            </p>
            <div className="row mt-5">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Futures and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPO</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Growth</p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="/public/assets/media/images/pressLogos.png"
              alt="loading..."
              style={{width:"90%"}}
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;