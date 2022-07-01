// import React from 'react';
import banner from "../../images/secondhand.png"
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from './components/Register';
import { Link } from "react-router-dom";

export default function Register() {
    return(
        <div className="register">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sm-12"> 
                        <img src={banner} alt="" style={{ width:"100%", height: "100vh" }}/>
                    </div>
                    <div className="col-md-6 sm-12">
                        <div className="register-form">
                            <span className="title-text">Daftar</span>
                            <div className="form-edit">
                                <form>
                                <label for="form_name" className="form-label">Nama</label>
                                <input type="text" className="form-control py-3" placeholder="Nama Lengkap" aria-label="Name" />
                                </form>
                            </div>
                            <div className="form-edit">
                                <form>
                                <label for="form_email" className="form-label">Email</label>
                                <input type="email" className="form-control py-3" placeholder="Contoh: johndee@gmail.com" aria-label="Email" />
                                </form>
                            </div>
                            <div className="form-edit">
                                <form>
                                <label for="form_password" className="form-label">Password</label>
                                <input type="password" className="form-control py-3" placeholder="Masukkan Password" aria-label="Password" />
                                </form>
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