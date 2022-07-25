import React from "react";
import "../../css/style.css"
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../NavBar/NavBar";
import CarouselBanner from "../Carousel/Carousel";
import { FiSearch, FiPlus } from "react-icons/fi";
// import Fab from "@mui/material/Fab";
import Footer from '../Footer';
import Rectangle from '../../images/Rectangle 23.png';

import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="landing-page">
            <div>
                <NavBar />
            </div>
            <div className="row">
                <CarouselBanner />
            </div>
            <div className="container py-3">
                <p className="fw-bold">Telusuri Kategori</p>
                <div className="container py-3 d-flex buttonradius12">
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filtersemua"
                    > <FiSearch /> Semua
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterHobi"
                    > <FiSearch /> Hobi
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterKendaraan"
                    > <FiSearch /> Kendaraan
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterBaju"
                    > <FiSearch /> Baju
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterElektronik"
                    > <FiSearch /> Elektronik
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterKesehatan"
                    > <FiSearch /> Kesehatan
                    </button>
                </div>
            </div>

            <div id="card" className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" container d-flex justify-content-center sticky ">
                <Link to="/edit-product">
                    {/* <Fab variant="extended" style={{ color:'#fffff', backgroundColor:'7122b5', borderColor:'7122b5'}}>
                        <FiPlus sx={{ mr: 1 }} />
                        Jual
                    </Fab> */}
                    <button
                    // className="btn btn-custom me-3 sticky active buttonradius12"
                    className="btn btn-float sticky active buttonradius12"
                    style={{ width: '115px', heigth: '52px' }}
                    id="Jual"
                    > <FiPlus /> Jual
                    </button>
                </Link>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}