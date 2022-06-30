//page klo penawaran produk diterima seller (yang ada tombol status sama Hub Whatsapp)
import React from "react";
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../images/fi_arrow-left.png";
import rectangle from "../../images/rectangle-purple.png";
import buyer from "../../images/buyer.png";
import product from "../../images/exp-product.png";
import wa from "../../images/fi_whatsapp.svg";

export default function PenawaranDiterima() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light d-inline-flex"
        style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="d-inline-flex" style={{ padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <a className="navbar-brand" href='/home'> <img src={rectangle} alt='' />
          </a>
        </div>

        <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-brand mb-0 h1" style={{ fontWeight: '400px' }}>Info Penawar</span>
        </div>

        <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-brand mb-0 h1"></span>
        </div>
      </nav>

      <section>
        <div className="container" style={{ padding: '30px', width: '70%' }}>
            <a href="/home"> <img src={arrow} alt="" /></a>
            <div className="container" style={{ width:'90%'}}>
                <div className="about-buyer">
                    <div className="card">
                        <img src={buyer} alt="buyer" width="48px" height="48px"/>
                        <div className="card-body">
                            <span className="card-title">Nama Penawar</span>
                            <p className="card-text">
                                Kota
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bargained-product">
                    <span style={{fontSize:'16px', fontWeight: 'bold'}}>Daftar Produkmu yang Ditawar</span>
                    <div className="card">
                        <img src={product} alt="product" width="48px" height="48px"/>
                        <div className="card-body">
                            <span className="card-title">Penawaran Produk</span>
                            <span className="card-time">20 Apr, 14:04</span>
                            <p className="card-text">
                                Jam Tangan Casio
                                <br></br>Rp 250.000
                                <br></br>Ditawar Rp 200.000
                            </p>
                        </div>
                    </div>
                    <button className="btn-wa">Hubungi di <img src={wa} alt="wa"/></button>
                    <button className="btn-status">Status</button>
                </div>
            </div>
        </div>
      </section>
      
    </div>
  )
}