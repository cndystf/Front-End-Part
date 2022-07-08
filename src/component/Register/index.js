// import React from 'react';
import banner from "../../images/secondhand.png"
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from './components/Register';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

export default function Register() {
    let [showPassword, setShowPassword] = useState(false);
    const checkShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sm-12"> 
                        <img src={banner} alt="" style={{ width:"100%", height: "100vh" }}/>
                    </div>
                    <div className="col-md-6 sm-12">
                        <div className="register-part">
                            <span className="title-text">Daftar</span>
                            <div className="form-name">
                                <label for="form_name" className="form-label">Nama</label>
                                <input type="text" className="form-control py-3" placeholder="Nama Lengkap" aria-label="Name" />
                            </div>
                            <div className="form-email">
                                <label for="form_email" className="form-label">Email</label>
                                <input type="email" className="form-control py-3" placeholder="Contoh: johndee@gmail.com" aria-label="Email" />
                            </div>
                            <div className="form-pw">
                                <label for="form_password" className="form-label">Password</label>
                                <input type={showPassword ? "password":"text"} className="form-control py-3" placeholder="Masukkan Password" aria-label="Password" />
                                <button className="btn-eye">{showPassword ? <BsEyeSlash onClick={checkShowPassword} /> : <BsEye onClick={checkShowPassword} />}</button>
                            </div>
                            <Link to="/login"><button className="register-button">Daftar</button></Link>
                            <div className="d-flex">
                                <p className="mb-0 me-2">Sudah punya akun?</p>
                                <Link to="/login">Masuk di sini</Link>
                            {/* <h6>Belum punya akun?</h6> <Link to="/register"><span style={{color:"#7126B5"}}>Daftar di sini</span></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}