import React from 'react'
import { useState } from "react";
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

// import ModalTawar from "./ModalTawar";
import jam from "../../images/halamanproduk.png";
import exp from "../../images/exp-product.png"
import seller from "../../images/seller.png";

import Navigation from "../Navigation/Navigation";


function ModalTawar(props) {
    // const [modalShow2, setModalShow2] = React.useState(false);
    
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span style={{ fontWeight : "bold", fontSize: "16px" }}>Masukkan Harga Tawarmu</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="" style={{ fontSize: '14px', textAlign: "justify" }}>
                    Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.
                </p>
                <div className="row p-1">
                    <div className="col-3 m-auto ">
                        <img src={exp} alt='exp' className="" style={{ widht: '48' }} />
                    </div>
                    <div className="col-9 " style={{ fontSize: '14px', lineHeight: '20px', paddingTop: '18px', paddingLeft: '5px' }}>
                        <b className="">Jam Tangan Casio</b>
                        <p>Rp 250.000</p>
                    </div>
                </div>
                <div>
                    <form>
                        <div class="mb-3">
                            <label for="harga_tawar" class="form-label">Harga Tawar</label>
                            <input type="text" class="form-control " id="harga_tawar" placeholder="Rp 0,00" style={{ borderRadius:"20px" }}/>
                        </div>
                        <Link to="/bargain-success"><button type="submit" className="bargain-price-btn " onClick={props.onHide}>Kirim</button></Link>
                    </form>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default function BuyerHalamanProduk() {
    // const [openModalTawar, setOpenModalTawar] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <><Navigation />
        <div className="buyer-halaman-produk">
            <div className="container">
                <div className="col-md-6 sm-12" style={{ width:'100%' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img"
                                src={jam}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jam}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jam}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={jam}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                        {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active" aria-current="true" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className="active" aria-current="true" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={jam} alt="..." className="d-block w-100" />
                                </div>
                                <div className="carousel-item">
                                    <img src={jam} alt="..." className="d-block w-100"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={jam} alt="..." className="d-block w-100"/>
                                </div>
                                <div className="carousel-item">
                                    <img src={jam} alt="..." className="d-block w-100"/>
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
                        </div> */}
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
                    <div className="col-md-6 sm-12" style={{ width:'100%' }}>
                        <div className="about-product">
                            <div className="card">
                                <span style={{ fontWeight: "bold" }}>Jam Tangan Casio</span>
                                <span style={{ fontSize: "12px", color:"#8A8A8A" ,marginTop: "5px" }}>Aksesoris</span>
                                <br></br>
                                Rp 250.000

                                <button className="bargain-button" onClick={() => setModalShow(true)}>
                                    Saya tertarik dan ingin nego
                                </button>

                                {/* <button
                                    className="bargain-button"
                                    onClick={() => {
                                        setOpenModalTawar(true);
                                    } }>
                                    Saya tertarik dan ingin nego
                                </button>
                                {openModalTawar && <ModalTawar closeModalTawar={setOpenModalTawar} />} */}
                                
                            </div>
                        </div>
                        <div className="about-seller">
                            <div className="card">
                                <img src={seller} alt="seller" width="48px" height="48px"/>
                                    <div className="card-body">
                                        <span className="card-title">Nama Penjual</span>
                                            <p className="card-text">
                                                Kota
                                            </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ModalTawar
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div> 
        </>
    )
}