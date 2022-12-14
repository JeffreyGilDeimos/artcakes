import React, { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCake,
  faComments,
  faUserGroup,
  faCartShopping,
  faUserGear,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import * as actionCart from "../redux/actions/actionCart";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";

export default function Navigation() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cartLists = useSelector((state) => state.cartLists);
  const { getAllProductsByUser } = bindActionCreators(
    actionCart,
    useDispatch()
  );

  useEffect(() => {
    if (localStorage.email) {
      getAllProductsByUser(localStorage.email);
    }
  }, []);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.removeItem("email");
      localStorage.removeItem("userPhoto");
      localStorage.removeItem("userName");
      navigate("/login");
    }, 1000);
  };

  const renderNavigation = () => {
    return (
      <Navbar id="header">
        <div className="pb-0 p-2 pb-lg-0 p-lg-3 nav-bg-color fixed-top">
          <Container className="position-relative">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <NavLink
                to="/"
                className="d-flex align-items-center my-1
              my-lg-0 me-lg-auto text-decoration-none"
              >
                <img
                  src="../images/Logo.png"
                  width="140"
                  height="55"
                  alt="Gale Logo"
                  className="nav-logo"
                />
              </NavLink>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-lg-1 text-small fw-bold">
                <li>
                  <NavLink to="/" className="nav-link">
                    <FontAwesomeIcon
                      icon={faHouse}
                      className="bi bi-house-door d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                    />
                    <span className="nav-label">HOME</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/cakes/${5}`} className="nav-link">
                    <FontAwesomeIcon
                      icon={faCake}
                      className="bi bi-menu-button-wide-fill d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                    />
                    <span className="nav-label">CAKES</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/#review" className="nav-link">
                    <FontAwesomeIcon
                      icon={faComments}
                      className="bi bi-megaphone d-block d-flex justify-content-center mb-1  mx-auto fs-5"
                    />
                    <span className="nav-label">REVIEWS</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                    />
                    <span className="nav-label">ABOUT</span>
                  </NavLink>
                </li>
                {localStorage.email ? (
                  <>
                    <li>
                      <NavLink
                        to="/cart"
                        className="nav-link position-relative"
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                        />
                        <span className="position-absolute cart-number translate-middle badge rounded-pill b-primary">
                          {/* {cartLists.length} */}
                          {cartLists ? cartLists?.length : 0}
                        </span>
                        <span className="nav-label">CART</span>
                      </NavLink>
                    </li>
                    {localStorage.email === "admin@admin.com" && (
                      <li>
                        <NavLink to="/admin" className="nav-link">
                          <FontAwesomeIcon
                            icon={faUserGear}
                            className="bi bi-people d-block d-flex justify-content-center mb-1 mx-auto fs-5"
                          />
                          <span className="nav-label">ADMIN</span>
                        </NavLink>
                      </li>
                    )}
                    <li className="login">
                      <NavLink
                        to="/login"
                        className="nav-link text-white d-flex align-items-center btn-login rounded-pill"
                        onClick={logout}
                      >
                        LOGOUT
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="bi bi-people mx-auto fs-5 ms-2"
                        />
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li className="login">
                    <NavLink
                      to="/login"
                      className="nav-link text-white d-flex align-items-center btn-login rounded-pill"
                    >
                      <FontAwesomeIcon
                        icon={faRightToBracket}
                        className="bi bi-people mx-auto fs-5 me-2"
                      />
                      LOGIN
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </Container>
          <img
            src="../images/layered01.png"
            alt="layered"
            className="layered img-fluid w-100 position-absolute m-0"
          />
        </div>
      </Navbar>
    );
  };

  if (loading) {
    return (
      <>
        <div className="loading-base">
          <div className="loading-auth bg-white rounded-circle">
            <Spinner
              name="ball-spin-fade-loader"
              fadeIn="none"
              style={{ color: "#6a2101" }}
            />
          </div>
        </div>
        {renderNavigation()}
      </>
    );
  }

  return <>{renderNavigation()}</>;
}
