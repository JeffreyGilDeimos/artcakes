import React, { useEffect, useState } from "react";
import "./auth.css";
import { auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Form, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import * as actionUser from "../../../redux/actions/actionUser";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Validation
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const { registerUser } = bindActionCreators(actionUser, useDispatch());
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user || localStorage.email) {
      navigate("/");
    }
  });

  const checkIfValid = () => {
    let isValid = true;

    // Check if password is same with confirmPassword
    if (password !== confirmPassword || !password) {
      setInvalidPassword(true);
      isValid = false;
    } else {
      setInvalidPassword(false);
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkIfValid()) {
      // Call registration API
      registerUser({
        email: email,
        password: password,
      })
        .then((response) => {
          console.log(response, "response");
          setInvalidEmail(false);

          setShowModal(true);
        })
        .catch((error) => {
          setInvalidEmail(true);
          console.log(error, "error");
        });
    }
  };

  const closeRegistration = () => {
    setShowModal(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

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
                <Form onSubmit={handleSubmit}>
                  {/*------- EMAIL ------------*/}

                  <Form.Group className="row mb-3">
                    <Form.Label className="col-lg-4 col-form-label fw-bold text-lg-center">
                      Email
                    </Form.Label>
                    <div className="col-lg-8">
                      <Form.Control
                        className="form-control rounded-3"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isInvalid={invalidEmail}
                        id="login-email"
                        placeholder="Email Address"
                        required
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        <small>
                          Email Address already exists. Please try again!
                        </small>
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  {/*------- end EMAIL ------------*/}
                  {/*------- PASSWORD 1 ------------*/}
                  <Form.Group className="row mb-3">
                    <Form.Label className="col-lg-4 col-form-label fw-bold text-lg-center">
                      Password
                    </Form.Label>
                    <div className="col-lg-8">
                      <Form.Control
                        className="form-control rounded-3"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // isInvalid={invalidPassword}
                        id="login-password"
                        placeholder="Password"
                        required
                      ></Form.Control>
                      {/* <Form.Control.Feedback type="invalid">
                        <small>
                          The password confirmation does not match. Please try
                          again!
                        </small>
                      </Form.Control.Feedback> */}
                    </div>
                  </Form.Group>

                  {/*------- PASSWORD 2 ------------*/}
                  <Form.Group className="row">
                    <Form.Label className="col-lg-4 col-form-label fw-bold text-lg-center">
                      Confirm Password
                    </Form.Label>
                    <div className="col-lg-8">
                      <Form.Control
                        className="form-control rounded-3"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        isInvalid={invalidPassword}
                        id="login-confirm-password"
                        placeholder="Confirm Password"
                        required
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        <small>
                          The password confirmation does not match. Please try
                          again!
                        </small>
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  {/*------- end PASSWORDS  ------------*/}

                  {/* Modal for Successful Registration */}
                  <Modal
                    show={showModal}
                    id="signupModal"
                    className="h-100 d-flex justify-content-center align-items-center"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered m-4 rounded-3">
                      <div className="modal-content">
                        <div className="modal-body mx-3 text-center">
                          Great! Your account has been registered successfully.
                        </div>
                        <div className="modal-footer border-0">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => closeRegistration()}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Modal>

                  <button
                    type="submit"
                    className="signup-btn w-100 border-0 text-white p-2 rounded-pill my-4 fw-bolder"
                    // data-bs-toggle="modal"
                    // data-bs-target="#signupModal"
                  >
                    REGISTER
                  </button>
                </Form>

                {/*-------end FORM ------------*/}

                <p className="text-center m-0 fs-6">
                  <small>
                    Already have an account?&nbsp;
                    <Link to="/login" className="text-muted">
                      <strong>
                        <em>Login now</em>
                      </strong>
                    </Link>
                  </small>
                </p>

                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
