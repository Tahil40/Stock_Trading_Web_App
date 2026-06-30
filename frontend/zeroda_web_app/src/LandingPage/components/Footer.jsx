import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        {/* upper part */}
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <img
                  src="/public/assets/media/images/logo.svg"
                  alt="loading..."
                  style={{ width: "80%" }}
                />
                <p>2010 - 2026, Not Zerodha Booking ltd.<br/>All rights reserved.</p>
                <div>
                    icons
                </div>
              </div>
              <div className="col-3">
                <h3>Company</h3>
              </div>
              <div className="col-3">
                <h3>Support</h3>
              </div>
              <div className="col-3">
                <h3>Account</h3>
              </div>
            </div>
          </div>
        </div>

        {/* middle part */}
        <div></div>

        {/* lower part */}
        <div></div>
      </footer>
    </>
  );
};

export default Footer;