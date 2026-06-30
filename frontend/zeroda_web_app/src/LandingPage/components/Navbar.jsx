import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"white", position:"fixed", left:"0", top:"0", right:"0", zIndex:"100"}}>
        <div className="container-fluid">
          <a className="navbar-brand p-3" href="#">
            <img
              src="/public/assets/media/images/logo.svg"
              alt="loading..."
              style={{ width: "30%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* ms-auto -> sets margin auto from right side, me-auto -> sets margin auto from left side. */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link text-dark" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-dark" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-dark" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-dark" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;