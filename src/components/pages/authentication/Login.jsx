import React, { useEffect, useState } from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { auth, googleProvider } from "../../../firebase";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as actionUser from "../../../redux/actions/actionUser";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation
  const [invalidUser, setInvalidUser] = useState(false);

  const [user] = useAuthState(auth);
  const { loginUser, loginUserViaProvider } = bindActionCreators(
    actionUser,
    useDispatch()
  );
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (user || localStorage.email) {
        // navigate home page
        setLoading(false);
        navigate("/");
      }
    }, 1000);
  }, [localStorage.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email: email, password: password })
      .then(() => {
        localStorage.setItem("email", email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setInvalidUser(true);
      });
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(googleProvider)
      .then((response) => {
        let email = response?.additionalUserInfo.profile.email;
        let userPhoto = response?.additionalUserInfo.profile.picture;
        let userName = response?.additionalUserInfo.profile.name;
        loginUserViaProvider(email);
        localStorage.setItem("email", email);
        localStorage.setItem("userPhoto", userPhoto);
        localStorage.setItem("userName", userName);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const renderLogin = () => {
    return (
      <div className="auth">
        <div className="page-content d-flex align-items-center">
          <div className="container d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
              <div className="auth-card bg-white rounded-4">
                <Link to="/">
                  <img
                    src="images/auth-card-bg.png"
                    alt="auth"
                    className="w-100 h-auto auth-card-img"
                  />
                </Link>
                <div className="p-4 p-lg-5">
                  <button
                    className="service-btn border-0 w-100 text-white p-2 rounded-pill"
                    onClick={googleSignIn}
                  >
                    <FontAwesomeIcon icon={faGoogle} className="me-2" />
                    <span className="m-0"> Login with Google</span>
                  </button>
                  <br />
                  <hr className="my-4" />
                  <Form onSubmit={handleSubmit}>
                    {/* ----- EMAIL ----- */}
                    <Form.Group className="row mb-3">
                      <Form.Label className="col-lg-3 col-form-label fw-bold text-lg-center">
                        Email
                      </Form.Label>
                      <div className="col-lg-9">
                        <Form.Control
                          className="form-control rounded-3"
                          type="email"
                          id="login-email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          isInvalid={invalidUser}
                          required
                        ></Form.Control>
                      </div>
                    </Form.Group>

                    {/* ----- end EMAIL ----- */}
                    {/* ----- PASSWORD ----- */}

                    <Form.Group className="row">
                      <Form.Label className="col-lg-3 col-form-label fw-bold text-lg-center">
                        Password
                      </Form.Label>
                      <div className="col-lg-9">
                        <Form.Control
                          className="form-control rounded-3"
                          type="password"
                          id="login-password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          isInvalid={invalidUser}
                          required
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          <small>
                            Invalid Email or Password. Please try again!
                          </small>
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    {/* ----- end PASSWORD ----- */}
                    <button
                      type="submit"
                      className="login-btn w-100 border-0 text-white p-2 rounded-pill my-4 fw-bolder"
                    >
                      LOGIN
                    </button>
                  </Form>

                  <p className="text-center m-0 fs-6">
                    <small>
                      Don't have an account?&nbsp;
                      <Link to="/signup" className="text-muted">
                        <strong>
                          <em>Register here</em>
                        </strong>
                      </Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        {renderLogin()}
      </>
    );
  }

  return <>{renderLogin()}</>;
}
