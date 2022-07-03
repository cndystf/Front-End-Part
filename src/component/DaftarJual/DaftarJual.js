import React from "react";
import Navigation from "../Navigation/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import seller from '../../images/seller.png';
import "../../css/style.css"
import { FiBox, FiHeart, FiDollarSign, FiChevronRight, FiPlus } from "react-icons/fi";
import Rectangle from '../../images/Rectangle 23.png';

import { Link } from 'react-router-dom';



export default function DaftarJual() {
    return (
        <><Navigation />
        <div className="container">
        <p className="fw-bold my-3">Daftar Jual Saya</p>
            <div className="info-seller">
                <div className="card">
                    <img src={seller} alt="seller" width="48px" height="48px"/>
                    <div className="card-body">
                        <span className="card-title">Nama Penjual</span>
                        <Link to="/edit-product"><button className="button-edit">Edit</button></Link>
                        <p className="card-text">
                            Kota
                        </p>
                        {/* <div className="col-xl-1 col-sm-3 col-1">
                            <Link to="/edit-product"><button className="button-edit">edit</button></Link>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="daftar-jual">
                    <div className="card">
                        <div className="col-xl-1 col-sm-1 col-1 pl-2" style={{ width: '50px' }}>
                            <img src={profilpenjual} alt='profilpenjual' className="img-fluid" style={{ width: '48px' }} />
                        </div>
                        <div className="col-xl-10  col-sm-6 col-9">
                            <p className="fw-bold mb-1" style={{ fontSize: '14px' }}>Nama Penjual</p>
                            <p className="mb-1" style={{ fontSize: '10px' }}>Kota</p>
                        </div>
                        <div className="col-xl-1  col-sm-3 col-1">
                            <Link to="/edit-product"><button className="btn btn-custom borderradius8">edit</button></Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="daftar-jual">
                <div className="row my-4 ">
                    <div className="col-3 card  p-3 mr-2" style={{ height : "180px", boxShadow: 'rgb(153 153 153 / 65%) 0px 5px 15px', borderRadius:'20px' }}>
                        <p className="fw-bold" style={{ fontSize: '16px' }}>Kategori</p>
                        <div className="table-category">
                            <table>
                                <tr>
                                <a href="/list">
                                    <td><FiBox /></td>
                                    <td>Semua Produk</td>
                                    <td><FiChevronRight /></td>
                                </a>
                                <hr style={{ color:'#000000', margin:'0'}} />
                                </tr>
                                <tr>
                                <a href="/diminati">
                                    <td><FiHeart /></td>
                                    <td>Diminati</td>
                                    <td><FiChevronRight /></td>
                                </a>
                                <hr style={{ color:'#000000', margin:'0'}} />
                                </tr>
                                <tr>
                                <a href="/terjual">
                                    <td><FiDollarSign /></td>
                                    <td>Terjual</td>
                                    <td><FiChevronRight /></td>
                                </a>
                                </tr>
                            </table>
                        </div>
                    </div>
                        {/* <ul className="p-0" style={{ fontSize: '16px', listStyle: 'none' }}>
        <li className="list-style-none"><FiBox />  Semua Produk <FiChevronRight className="right" /></li>
        <li className="list-style-none"> <FiHeart />  Diminati <FiChevronRight /></li>
        <li className="list-style-none"><FiDollarSign /> Terjual <FiChevronRight /></li>
    </ul> */}
                    <div className="col-9 ">
                        <div className="row" style={{ paddingLeft: '20px'}}>
                            <div className="col-md-4 col-xl-4 col-sm-12 card mb-1 ml-1 justify-content-center justify-align-center" style={{
                                borderStyle: "dashed", border: '3px dashed', color: '#D0D0D0', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', borderRadius: '4px'
                            }}>
                                <a href="#" className="text-decoration-none m-auto" style={{ color: 'black' }}>
                                    <div className=" m-auto">
                                        <FiPlus className="align-center " />
                                    </div>
                                    <div>
                                        <p>Tambah Produk</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-xl-4 col-sm-12">
                                <a href="/halamanproduk" className="text-decoration-none" style={{ color: 'black' }}>
                                    <div className="card " style={{ border: "none", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', gap: '8px', borderRadius: '4px' }}>
                                        <div className="d-flex justify-content-center ">
                                            <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} alt='test' />
                                        </div>
                                        <div class="card-body mb-3">
                                            <h6 class="card-title text-decoration-none" style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                            <p className="text-decoration-none" style={{ fontsize: '10px' , color: '#8a8a8a' }}>Aksesoris</p>
                                            <p class="text-decoration-none" style={{ fontsize: '14px' }}>Rp 250.000</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-xl-4 col-sm-12">
                                <a href="/halamanproduk" className="text-decoration-none" style={{ color: 'black' }}>
                                    <div className="card " style={{ border: "none", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', gap: '8px', borderRadius: '4px' }}>
                                        <div className="d-flex justify-content-center ">
                                            <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} alt='test' />
                                        </div>
                                        <div class="card-body mb-3">
                                            <h6 class="card-title text-decoration-none" style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                            <p className="text-decoration-none" style={{ fontsize: '10px', color: '#8a8a8a' }}>Aksesoris</p>
                                            <p class="text-decoration-none" style={{ fontsize: '14px' }}>Rp 250.000</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-xl-4 col-sm-12">
                                <a href="/halamanproduk" className="text-decoration-none" style={{ color: 'black' }}>
                                    <div className="card " style={{ border: "none", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', gap: '8px', borderRadius: '4px' }}>
                                        <div className="d-flex justify-content-center ">
                                            <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} alt='test' />
                                        </div>
                                        <div class="card-body mb-3">
                                            <h6 class="card-title text-decoration-none" style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                            <p className="text-decoration-none" style={{ fontsize: '10px', color: '#8a8a8a' }}>Aksesoris</p>
                                            <p class="text-decoration-none" style={{ fontsize: '14px' }}>Rp 250.000</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-xl-4 col-sm-12">
                                <a href="/halamanproduk" className="text-decoration-none" style={{ color: 'black' }}>
                                    <div className="card " style={{ border: "none", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', gap: '8px', borderRadius: '4px' }}>
                                        <div className="d-flex justify-content-center ">
                                            <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} alt='test' />
                                        </div>
                                        <div class="card-body mb-3">
                                            <h6 class="card-title text-decoration-none" style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                            <p className="text-decoration-none" style={{ fontsize: '10px' , color: '#8a8a8a'}}>Aksesoris</p>
                                            <p class="text-decoration-none" style={{ fontsize: '14px' }}>Rp 250.000</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-xl-4 col-sm-12">
                                <a href="/halamanproduk" className="text-decoration-none" style={{ color: 'black' }}>
                                    <div className="card " style={{ border: "none", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', gap: '8px', borderRadius: '4px' }}>
                                        <div className="d-flex justify-content-center ">
                                            <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} alt='test' />
                                        </div>
                                        <div class="card-body mb-3">
                                            <h6 class="card-title text-decoration-none" style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                            <p className="text-decoration-none" style={{ fontsize: '10px', color: '#8a8a8a' }}>Aksesoris</p>
                                            <p class="text-decoration-none" style={{ fontsize: '14px' }}>Rp 250.000</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-xl-4 col-sm-12">
                                <a href="/halamanproduk" className="text-decoration-none" style={{ color: 'black' }}>
                                    <div className="card " style={{ border: "none", boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)', padding: '8px, 8px, 16px, 8px', gap: '8px', borderRadius: '4px' }}>
                                        <div className="d-flex justify-content-center ">
                                            <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} alt='test' />
                                        </div>
                                        <div class="card-body mb-3">
                                            <h6 class="card-title text-decoration-none" style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                            <p className="text-decoration-none" style={{ fontsize: '10px', color: '#8a8a8a' }}>Aksesoris</p>
                                            <p class="text-decoration-none" style={{ fontsize: '14px' }}>Rp 250.000</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}