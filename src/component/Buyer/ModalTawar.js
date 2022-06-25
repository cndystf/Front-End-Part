import React from 'react'
import { useState } from "react";
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import product from "../../images/exp-product.png";
import { Link } from "react-router-dom"

// import ModalSuccess from './BuyermodalSuccess';
import StatusSuccess from './StatusSukses';

export default function ModalTawar ({ closeModalTawar }){

    const [openModalSuccess, setOpenModalSuccess] = useState(false);

    return(
        <div className="modal-tawar">
            <div className="container">
                <div className="close-button">
                    <button onClick={() => closeModalTawar(false)}>x</button>
                </div>
                    <span style={{fontWeight:"bold"}}>Masukkan Harga Tawarmu</span>
                    <p>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual</p>
                    <div className="detail-product">
                            <div className="card">
                                <div className="product-pic">
                                <img src={product} alt="..." width="48px" height="48px"/>
                                </div>
                                <div className="product-bargain">
                                    <p><span style={{fontWeight:"bold"}}>Jam Tangan Casio</span>
                                    <br></br>Rp 250.000</p>
                                </div>
                                <div className="form-bargain">
                                    <form>
                                    <label for="form_bargain" className="form-label">Harga</label>
                                    <input type="text" className="form-control py-3" placeholder="Rp 0,00" aria-label="Price" />
                                    </form>
                                </div>
                            </div>
                        </div>

                    <Link to="/bargain-success" className="bargain-price-btn"
                    onClick={() => { 
                    setOpenModalSuccess(true);
                    }}> Kirim</Link>
                    {openModalSuccess && <StatusSuccess closeModalSuccess={setOpenModalSuccess} />}           
            </div>
        </div>
    )
}