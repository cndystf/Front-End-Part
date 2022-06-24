import React from 'react'
import { useState } from "react";
import "../../../src/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import ModalTawar from "../BuyerModalTawar";
import jam from "../../images/casio.png";
import buyer from "../../images/buyer.png";

import NavBar from "../NavBar";

export default function BuyerHalamanProduk() {

    const [openModalTawar, setOpenModalTawar] = useState(false);

    return(
        <><NavBar />
        <div className="buyer-halaman-produk">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sm-12">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={jam} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={jam} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={jam} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={jam} alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="product-description">
                            <div className="card">
                                <span style={{ fontWeight: "bold" }}>Deskripsi</span>
                                <br></br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 sm-12">
                        <div className="about-product">
                            <div className="card">
                                <span style={{ fontWeight: "bold" }}>Jam Tangan Casio</span>
                                Aksesoris
                                <br></br>
                                Rp 250.000

                                <button
                                    className="bargain-button"
                                    onClick={() => {
                                        setOpenModalTawar(true);
                                    } }>
                                    Saya tertarik dan ingin nego
                                </button>
                                {openModalTawar && <ModalTawar closeModalTawar={setOpenModalTawar} />}

                            </div>
                        </div>
                        <div className="about-seller">
                            <div className="card">
                                <div className="buyer-pic">
                                    <img src={buyer} alt="..." width="48px" height="48px" />
                                </div>
                                <div className="buyer-detail">
                                    <p><span style={{ fontWeight: "bold" }}>Nama Penjual</span>
                                        <br></br>Aksesoris</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}