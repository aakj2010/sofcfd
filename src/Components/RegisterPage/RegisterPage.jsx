import React from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import gLogo from "../Images/g.png";
import Logo from "../Images/logo2.png";
import { env } from '../config';

const info = [
  {
    icon: (
      <i
        class="fas fa-question-circle text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Get unstuck — ask a question",
  },
  {
    icon: (
      <i
        class="fas fa-sort text-primary mr-2"
        style={{ fontSize: "25px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        class="fas fa-tags text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
  {
    icon: (
      <i
        class="fas fa-trophy text-primary mr-2"
        style={{ fontSize: "20px", color: "rgb(10, 149, 255)" }}
      ></i>
    ),
    text: "Unlock new privileges like voting and commenting",
  },
];

function RegisterPage() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please Enter Name";
      }
      
      
      if (values.email === "") {
        errors.email = "Please Enter Email";
      }

      if (values.password === "") {
        errors.password = "Please Enter password";
      }

      return errors;
    },
    onSubmit: async (values) => {
      // let User = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/Teachers", values);
      await axios.post(`${env.api}/signup`,values);
      alert("User Created Succesfully")
      navigate("/login")
    }
  });
  return (
    <>
      <div classNameName="container loginPage">
        <section className="vh-100">
          <div className="container py-5">
            <div className="row d-flex align-items-center justify-content-center h-100">
              {/* left Side Stack Overflow community part started*/}
              <div className="col-md-8 col-lg-7 col-xl-6 ml-3">
                {/* <img src={Logo} alt="" width="350px" /> */}
                <h3 className="font-weight-normal my-3">
                  Join the Stack Overflow community
                </h3>

                {info.map((text) => {
                  return (
                    <div className="my-3">
                      {text.icon}
                      {text.text}
                    </div>
                  );
                })}
                <div className="mt-4">
                  <small>
                    Collaborate and share knowledge with a private group for
                    FREE. <br />
                    <Link to="/">
                      Get Stack Overflow for Teams free for up to 50 users.
                    </Link>
                  </small>
                </div>
              </div>
              {/* left Side Stack Overflow community part Ends*/}

              {/* Signup form started */}


              <div className="col-md-7 col-lg-5 col-xl-5 bt-light border p-5 pb-0 ">
                <div className='d-flex align-items-center justify-content-center'>
                  <img src={Logo} alt="" width="60px" />
                </div>

                <div className="loginPage--form--img  d-flex align-items-center justify-content-center">
                  <h4 className="center mt-0" style={{
                    color: "rgb(242, 116, 13)",
                    fontFamily: "serif",
                  }}>Sign up</h4>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-block bg-light btn-sm border mt-3"
                  >
                    <img src={gLogo} alt="" width="15px" className="mr-1" />
                    Google
                  </button>
                  <button type="submit" className="btn btn-dark btn-block mt-3">
                    <i class="fab fa-github mr-1"></i>
                    Github
                  </button>
                </div>


                <form onSubmit={formik.handleSubmit}>

                  <div className="mt-3">
                    <label>Display Name</label>
                    <input className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                      type={"text"}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      name="name" />
                    <span style={{ color: 'red' }}>{formik.errors.name}</span>
                  </div>

                  <div className="">
                    <label>Email</label>
                    <input className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                      type={"text"}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email" />
                    <span style={{ color: 'red' }}>{formik.errors.email}</span>
                  </div>

                  <div className="">
                    <label>Password</label>
                    <input className={`form-control ${formik.errors.password ? `input-error` : ``}`}
                      type={"text"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password" />
                    <span style={{ color: 'red' }}>{formik.errors.password}</span>
                  </div>

                  <button
                    type={"submit"}
                    className="btn btn-lg btn-block btn-sm text-light mt-4"
                    style={{ backgroundColor: "rgb(10, 149, 255)" }}
                    value="Submit"
                  >
                    Sign up
                  </button>


                  {/* <div className="col-lg-6">
                                        <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
                                    </div> */}

                </form>
              </div>

              {/* <div className="col-md-7 col-lg-5 col-xl-5 bt-light border p-5 pb-0">
                <h2
                  className="text-center"
                  style={{
                    color: "rgb(242, 116, 13)",
                    fontFamily: "serif",
                  }}
                >
                  Sign up
                </h2>
                <p className="text-center pb-1">~~~~~~~~~~~</p>
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example13">
                      Full Name
                    </label>
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i class="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Email
                    </label>
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="hello@gmail.com"
                        aria-label="gmail"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" for="form1Example23">
                      Password
                    </label>
                    <div class="input-group flex-nowrap">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="addon-wrapping"
                          style={{
                            color: "rgb(242, 116, 13)",
                            backgroundColor: "rgba(242, 116, 13, 0.308)",
                          }}
                        >
                          <i class="fas fa-key"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block text-light"
                    style={{ backgroundColor: "rgb(10, 149, 255)" }}
                  >
                    Sign up
                  </button>
                  <button
                    type="submit"
                    className="btn btn-block bg-light border"
                  >
                    <img src={gLogo} alt="" width="20px" className="mr-1" />
                    Google
                  </button>
                  <button type="submit" className="btn btn-dark btn-block">
                    <i class="fab fa-github mr-1"></i>
                    Github
                  </button>
                  <button
                    type="submit"
                    className="btn bt btn-lg btn-block text-light"
                    style={{ backgroundColor: "rgb(56, 84, 153)" }}
                  >
                    <i class="fab fa-facebook-square mr-2"></i>
                    Facebook
                  </button>
                </form>
                            </div> */}
              {/* Signup form Ends */}
            </div>
          </div>
        </section>
      </div>



    </>
  )
}

export default RegisterPage