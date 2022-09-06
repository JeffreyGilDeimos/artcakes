import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Menu() {
  return (
    <div>
      {/* <!-- ---- Featured Selection ---- --> */}
      <section id="selection">
        <div class="container">
          <div class="py-3 pt-5 mb-4">
            <div class="container d-flex flex-wrap justify-content-center">
              <div class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto">
                <h4>FEATURED SELECTIONS</h4>
              </div>
              <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search product..."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div class="row g-0 d-flex justify-content-center">
            <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div class="selection-item text-center">
                <div class="selected-img overflow-hidden">
                  <NavLink to="/Menu">
                    <img src="images/choco1.png" alt="Choco drip cakes" />
                  </NavLink>
                </div>
                <div class="selected-text">
                  <h5 class="pt-2 lead">Chocolate Drip Cakes</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div class="selection-item text-center">
                <div class="selection-img overflow-hidden">
                  <NavLink to="/Menu">
                    <img src="images/theme1.png" alt="Themed Cakes" />
                  </NavLink>
                </div>
                <div class="selection-text">
                  <h5 class="pt-2 lead">Chocomoist Themed Cakes</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div class="selection-item text-center">
                <div class="selection-img overflow-hidden">
                  <NavLink to="/Menu">
                    <img src="images/character1.png" alt="Character Cakes" />
                  </NavLink>
                </div>
                <div class="selection-text">
                  <h5 class="pt-2 lead">Cartoon/Character Cakes</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2 pb-3">
              <div class="selection-item text-center">
                <div class="selection-img overflow-hidden">
                  <NavLink to="/Menu">
                    <img src="images/number1.png" alt="Number Cakes" />
                  </NavLink>
                </div>
                <div class="selection-text">
                  <h5 class="pt-2 lead">Number Cakes</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ---- Varities ---- --> */}
      <section id="varities" class="bg-danger bg-opacity-10">
        <div class="text-center py-5">
          <h4>
            <i class="bi bi-check-square me-2"></i>Chocolate Drip Cakes
          </h4>
        </div>
        <div class="container pb-5">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco1.png"
                  alt="choco 1"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_1"
                />
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco2.png"
                  alt="choco 2"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_2"
                />
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco3.png"
                  alt="choco 3"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_3"
                />
              </div>
            </div>

            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco4.png"
                  alt="choco 4"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_4"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco5.png"
                  alt="choco 5"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_5"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco6.png"
                  alt="choco 6"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_6"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco7.png"
                  alt="choco 7"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_7"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco8.png"
                  alt="choco 8"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_8"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco9.png"
                  alt="choco 9"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_9"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco10.png"
                  alt="choco 10"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_10"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco11.png"
                  alt="choco 11"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_11"
                />
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 pb-4 d-flex justify-content-center">
              <div class="card-img overflow-hidden">
                <img
                  src="images/choco12.png"
                  alt="choco 12"
                  class="img-fluid rounded shadow-lg"
                  data-bs-toggle="modal"
                  data-bs-target="#enroll_12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ---- Modal1 ---- --> */}
      <div class="modal" id="enroll_1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var101</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco1.png" alt="Choco 1" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_2---- --> */}
      <div class="modal" id="enroll_2">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var102</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco2.png" alt="Choco 2" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_3---- -> */}
      <div class="modal" id="enroll_3">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var103</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco3.png" alt="Choco 3" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_4---- --> */}
      <div class="modal" id="enroll_4">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var104</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco4.png" alt="Choco 4" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_5---- --> */}
      <div class="modal" id="enroll_5">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var105</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco5.png" alt="Choco 5" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_6---- --> */}
      <div class="modal" id="enroll_6">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var106</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco6.png" alt="Choco 6" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_7---- --> */}
      <div class="modal" id="enroll_7">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var107</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco7.png" alt="Choco 7" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_8---- --> */}
      <div class="modal" id="enroll_8">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var108</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco8.png" alt="Choco 8" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_9---- --> */}
      <div class="modal" id="enroll_9">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var109</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco9.png" alt="Choco 9" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_10---- --> */}
      <div class="modal" id="enroll_10">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var110</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco10.png" alt="Choco 10" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_11---- --> */}
      <div class="modal" id="enroll_11">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var111</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco11.png" alt="Choco 11" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div class="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- --- enroll_12---- --> */}
      <div class="modal" id="enroll_12">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="text-danger">Chocolate Drip Var112</h4>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-img d-flex justify-content-center">
                <img src="images/choco12.png" alt="Choco 12" />
              </div>
              <div>
                <ul class="lead fs-6 mb-0">
                  <li>Prices may vary according to sizes.</li>
                  <li>Prices may change without any prior notice.</li>
                  <li>
                    Additional disclaimer: Actual food presentation may vary.
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer bgred">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="fs-5 text-white text-decoration-none"
              >
                Message us<i class="bi bi-facebook ps-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
