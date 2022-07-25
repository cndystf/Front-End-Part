import React from "react";
import Navigation from "../Navigation/Navigation";
import "../../css/style.css"
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiBox, FiHeart, FiDollarSign, FiChevronRight, FiPlus } from "react-icons/fi";
import Rectangle from '../../images/Rectangle 23.png';
import Minat from '../../images/not-interested.png';
import seller from '../../images/seller.png';
import { Link } from 'react-router-dom';

export default function ProdukDiminati() {
    return (
        <><Navigation />
        <div className="container" style={{marginTop:"80px"}}>
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
                    </div>
                </div>
            </div> 
                       
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
                        
                    <div className="col-9 ">
                        <div className="row" style={{ paddingLeft: '20px'}}>
                            <img src={Minat} alt="minat" style={{ maxWidth:'fit-content', marginLeft:'300px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}