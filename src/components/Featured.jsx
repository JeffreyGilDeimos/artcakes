import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import choco1 from "./img/choco1.png";
import theme1 from "./img/theme1.png";
import character1 from "./img/character1.png";
import number1 from "./img/number1.png";

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center pb-5">
          <h4>FEATURED SELECTIONS</h4>
        </div>
        <div className="row g-0 d-flex justify-content-center">
          <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div className="selection-item text-center">
              <div className="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src={choco1} alt="Choco" />
                </NavLink>
              </div>
              <div className="selection-text">
                <h5 className="pt-2">Chocolate Drip Cakes</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div className="selection-item text-center">
              <div className="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src={theme1} alt="Theme Cakes" />
                </NavLink>
              </div>
              <div className="selection-text">
                <h5 className="pt-2">Chocomoist Themed Cakes</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div className="selection-item text-center">
              <div className="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src={character1} alt="Choco" />
                </NavLink>
              </div>
              <div className="selection-text">
                <h5 className="pt-2">Cartoon/Character Cakes</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 pb-3">
            <div className="selection-item text-center">
              <div className="selection-img overflow-hidden">
                <NavLink to="/Menu">
                  <img src={number1} alt="Choco" />
                </NavLink>
              </div>
              <div className="selection-text">
                <h5 className="pt-2">Number Cakes</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}