import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"white", position:"fixed", left:"0", top:"0", right:"0", zIndex:"100"}}>
        <div className="container-fluid">
          <Link className="navbar-brand p-3" to={"/"}>
            <img
              src="/public/assets/media/images/logo.svg"
              alt="loading..."
              style={{ width: "30%" }}
            />
          </Link>
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
                <Link className="nav-link text-dark" aria-current="page" to={"/signup"}>
                  Signup
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-dark" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-dark" to={"/products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-dark" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link text-dark" to={"/support"}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;