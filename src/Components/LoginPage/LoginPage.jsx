import React from 'react'
import "./LoginPage.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../Images/logo2.png";
import gLogo from "../Images/g.png";
import { env } from '../config';


const LoginPage = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.email === "") {
                errors.email = "Please Enter Email";
            }

            if (values.password === "") {
                errors.password = "Please Enter Correct Password";
            }

            return errors;
        },
        onSubmit: async (values) => {
            await axios.post(`${env.api}/login`, values);
            alert("Logged in Succesfully");
            navigate("/questions");
        }
    });
    return (
        <>
            <div className="container loginPage">

                <div className="border px-5 pb-5 m-5 loginPage--form" >
                    <div className="loginPage--form--img mt-3">
                        <img src={Logo} alt="" width="60px" />
                        <h4 className="center mt-0 " style={{
                            color: "rgb(242, 116, 13)",
                            fontFamily: "serif",
                        }}>Login</h4>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-lg btn-block bg-light btn-sm border mt-3"
                    >
                        <img src={gLogo} alt="" width="15px" className="mr-1" />
                        Google
                    </button>
                    <button type="submit" className="btn btn-dark btn-block">
                        {/* <i class="fab fa-github-square mr-1"></i> */}
                        <i class="fab fa-github mr-1"></i>
                        Github
                    </button>


                    {/* Input Box startes */}
                    {/* <div className="form-outline mt-4 mb-4">
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
                                placeholder="@gmail.com"
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
                    </div> */}

                    <form onSubmit={formik.handleSubmit}>

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

                        <div className="d-flex justify-content-between mt-2 mb-3">
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
                        <Link to="/">
                            <small> forgot Password?</small>
                        </Link>
                    </div>

                        <button
                            type={"submit"}
                            className="btn btn-lg btn-block btn-sm text-light mt-4"
                            style={{ backgroundColor: "rgb(10, 149, 255)" }}
                            value="Submit"
                        >
                            Login
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage