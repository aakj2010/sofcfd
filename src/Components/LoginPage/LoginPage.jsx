import React from 'react'
import "./LoginPage.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../Images/logo2.png";
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
            try {
                let loginData = await axios.post(`${env.api}/login`, values);
                if (loginData.status === 200) {
                    // alert("Logged in Succesfully");
                    navigate("/home");
                    window.localStorage.setItem("app-token", loginData.data.token)
                }
                console.log(loginData);

            } catch (error) {
                alert(error.response.data.message)
                console.log(error);
            }

        }
    });
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center col-lg-8 col-md-8">

                <div className="border px-5 pb-5 m-5 col-md-7 col-lg-5 col-xl-5 loginPage--form loginPage" >
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <img src={Logo} alt="" width="60px" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center loginPage--form--img">

                        <h4 className="center mt-0 " style={{
                            color: "rgb(242, 116, 13)",
                            fontFamily: "serif",
                        }}>Login</h4>
                    </div>

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
                            // to='/questions'
                            type={"submit"}
                            className="btn btn-lg btn-block btn-sm text-light mt-4"
                            style={{ backgroundColor: "rgb(10, 149, 255)" }}
                            value="Submit"
                        >
                            Login
                        </button>

                        <Link to="/signup">
                            <small> Create an Account?</small>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage