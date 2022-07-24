// import React from 'react';
import banner from "../../images/secondhand.png";
import "../../css/style.css";
import "../../css/responsive.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import Register from './components/Register';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiArrowBack, FiArrowLeft } from 'react-icons/fi';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const axios = require("axios").default;

export default function Register() {
    let [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const checkShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const register = () => {
        axios
            .post("https://second-hand-binar.herokuapp.com/api/user/register", {
                username: userName,
                email,
                password,
            })
            .then(function (response) {
                console.log(response);
                cookies.set("jwt", response.data.data.token, {
                    path: "/",
                    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                });
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    };

    return (
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sm-12">
                        <img
                            src={banner}
                            alt=""
                            style={{ width: "100%", height: "100vh" }}
                        />
                    </div>
                    <div className="col-md-6 sm-12">
                        <div className="register-part">
                        <Link to='/'><span className="btn-back"><FiArrowLeft /></span></Link>
                            <span className="title-text">Daftar</span>
                            {/* <form onSubmit={register}> */}
                            <div className="form-name">
                                <label for="form_name" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    placeholder="Masukkan Username"
                                    aria-label="Name"
                                    onChange={(event) =>
                                        setUserName(event.target.value)
                                    }
                                />
                            </div>
                            <div className="form-email">
                                <label for="form_email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control py-3"
                                    placeholder="Contoh: johndee@gmail.com"
                                    aria-label="Email"
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>
                            <div className="form-pw">
                                <label
                                    for="form_password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control py-3"
                                    placeholder="Masukkan Password"
                                    aria-label="Password"
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                                <button className="btn-eye">
                                    {showPassword ? (
                                        <FiEyeOff
                                            onClick={checkShowPassword}
                                        />
                                    ) : (
                                        <FiEye onClick={checkShowPassword} />
                                    )}
                                </button>
                            </div>
                            {/* <Link to="/login"> */}
                            <button
                                // type="submit"
                                className="register-button"
                                onClick={() => register()}
                            >
                                Daftar
                            </button>
                            {/* </Link> */}
                            <div className="d-flex">
                                <p className="mb-0 me-2">Sudah punya akun?</p>
                                <Link to="/login">Masuk di sini</Link>
                                {/* <h6>Belum punya akun?</h6> <Link to="/register"><span style={{color:"#7126B5"}}>Daftar di sini</span></Link> */}
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
