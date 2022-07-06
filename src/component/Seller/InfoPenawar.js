// import React, { useState } from "react";
// import "../../css/style.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import arrow from "../../images/fi_arrow-left.png";
// import Rectangle127 from "../../images/rectangle-purple.png";
// import profilpenjual from "../../images/seller.png";
// import profilproduk from "../../images/exp-product.png";
//import {Stack, Button, Toast} from "react-bootstrap";
// import Jam from "../../images/Rectangle 23.png";

import React from "react";
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { useState } from "react";

import arrow from "../../images/fi_arrow-left.png";
import rectangle from "../../images/rectangle-purple.png";
import buyer from "../../images/buyer.png";
import product from "../../images/exp-product.png";
import wa from "../../images/fi_whatsapp.svg";

function ModalTerima(props) {
    return (
        <Modal
          {...props}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                <span style={{ fontWeight : "bold", fontSize: "14px" }}>Yeay kamu berhasil mendapat harga yang sesuai</span>
                <p style={{ marginTop: "14px", textAlign: "justify", fontSize: "12px", color: "#8a8a8a" }}>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="about-bargain">
            <div className="row p-1">
              <div className="card">
                <span style={{ fontWeight:"bold", textAlign:"center", fontSize:"14px"}}>Product Match</span>
                <div className="info-buyer">
                  <div className="card">
                    <img src={buyer} alt="buyer" width="48px" height="48px"/>
                      <div className="card-body">
                        <span className="card-title">Nama Pembeli</span>
                          <p className="card-text">
                            Kota
                          </p>
                      </div>
                  </div>
                </div>
                <div className="info-product">
                  <div className="card">
                    <img src={product} alt="buyer" width="48px" height="48px"/>
                      <div className="card-body">
                        <p className="card-text">
                            Jam Tangan Casio
                            <br />
                            <s>Rp 250.000</s>
                            <br />
                            Ditawar Rp 200.000
                        </p>
                      </div>
                  </div>
                </div>
              </div>
              <Link to="/penawar"><button className="wa-btn">Hubungi via Whatsapp <img src={wa} alt="wa"/></button></Link>
            </div>
          </div>
          </Modal.Body>
          {/* <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
      </Modal>
    )
  }

export default function InfoPenawaran () {
    const [modalTerima, setModalTerima] = React.useState(false);

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
                    <button className="btn-acc" onClick={() => setModalTerima(true)}>Terima</button>
                    <button className="btn-decline">Tolak</button>
                </div>
                <div>
                  <ModalTerima
                    show={modalTerima}
                    onHide={() => setModalTerima(false)}
                  />
                </div>
            </div>
        </div>
      </section>   
    </div>
    )
}
 
// export default function InfoPenawaran() {
//     let [show, setShow] = useState(false);

//     // Data Dummy
//     const produkDitawar = [];
//     // Buat orderan baru masuk
//     for (let i = 1; i <= 2; i++) {
//         produkDitawar.push({
//             id: i,
//             nama: "Jam Tangan Casio",
//             gambar: "Jam",
//             harga: "Rp. 250.000",
//             ditawar: "Rp. 200.000",
//             date: "20 Apr, 14:04",
//             status: "Ditawarkan",
//         });
//     }

//     // Buat orderan udah diterima
//     for (let i = 1; i <= 2; i++) {
//         produkDitawar.push({
//             id: i,
//             nama: "Jam Tangan Casio",
//             gambar: "Jam",
//             harga: "Rp. 250.000",
//             ditawar: "Rp. 200.000",
//             date: "20 Apr, 14:04",
//             status: "Diterima",
//         });
//     }

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg bg-light d-inline-flex" style={{justifyContent: "space-between", alignItems: "center", width: "100%"}}>
//                 <div className="d-inline-flex" style={{padding: "10px", justifyContent: "center", alignItems: "center"}}>
//                     <a className="navbar-brand" href="/">
//                         {" "}
//                         <img src={Rectangle127} alt="" />
//                     </a>
//                 </div>

//                 <div className="d-inline-flex" style={{justifyContent: "center", alignItems: "center"}}>
//                     <span className="navbar-brand mb-0 h1" style={{fontWeight: "400px"}}>
//                         Info Penawar
//                     </span>
//                 </div>

//                 <div className="d-inline-flex" style={{justifyContent: "center", alignItems: "center"}}>
//                     <span className="navbar-brand mb-0 h1"></span>
//                 </div>
//             </nav>
//             <section className="d-flex justify-content-center">
//                 <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="position-absolute notifToast px-2">
//                     <Toast.Body>Status produk berhasil diperbarui</Toast.Body>
//                 </Toast>
//                 <div className="container mt-3" style={{maxWidth: "700px"}}>
//                     <a href="/">
//                         {" "}
//                         <img src={arrow} alt="" />
//                     </a>
//                     <Stack direction="horizontal" gap={3} className="infoPenjual mt-4">
//                         <img src={profilpenjual} alt="" className="imageSmall" />
//                         <div>
//                             <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "24px"}}>
//                                 Nama Pembeli
//                             </h5>
//                             <p className="my-auto" style={{fontSize: "14px", color: "#BABABA"}}>
//                                 Kota
//                             </p>
//                         </div>
//                     </Stack>
//                     <div className="mt-4" style={{padding: "5px"}}>
//                         <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "24px"}}>
//                             Daftar Produkmu yang Ditawar
//                         </h5>
//                         {produkDitawar.map((produk, index) => {
//                             return (
//                                 <div key={`modal${index}`}>
//                                     <div style={{marginTop: "10px", marginBottom: "70px"}}>
//                                         <Stack direction="horizontal" gap={3}>
//                                             <img src={Jam} alt="" className="imageSmall align-self-start mt-1" />
//                                             <div>
//                                                 <p className="my-auto" style={{fontSize: "12px", color: "#BABABA"}}>
//                                                     Penawaran Produk
//                                                 </p>
//                                                 <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "26px"}}>
//                                                     {produk.nama}
//                                                 </h5>
//                                                 <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "26px"}}>
//                                                     {produk.harga}
//                                                 </h5>
//                                                 <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "26px"}}>
//                                                     {produk.ditawar}
//                                                 </h5>
//                                             </div>
//                                             <p className="align-self-start ms-auto" style={{fontSize: "12px", color: "#BABABA"}}>
//                                                 {produk.date}
//                                             </p>
//                                         </Stack>
//                                         {produk.status === "Ditawarkan" ? (
//                                             <div className="float-end mt-2">
//                                                 <Button className="btnOutline me-2 px-5">Tolak</Button>
//                                                 <Button className="btnPrimary px-5" data-bs-toggle="modal" data-bs-target={`#modal${produk.id}`}>
//                                                     Terima
//                                                 </Button>
//                                             </div>
//                                         ) : (
//                                             <div className="float-end mt-2">
//                                                 <Button className="btnOutline me-2 px-5" data-bs-toggle="modal" data-bs-target={`#status${produk.id}`}>
//                                                     Status
//                                                 </Button>
//                                                 <Button className="btnPrimary px-3">
//                                                     Hubungi di <i className="bi bi-whatsapp ms-2"></i>
//                                                 </Button>
//                                             </div>
//                                         )}

//                                         {/* Modal Terima*/}
//                                         <div className="modal fade" id={`modal${produk.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                             <div className="modal-dialog modal-dialog-centered">
//                                                 <div className="modal-content modalPenawaran">
//                                                     <div className="modal-header">
//                                                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                                     </div>
//                                                     <div className="modal-body">
//                                                         Yeay kamu berhasil mendapat harga yang sesuai
//                                                         <p className="align-self-start ms-auto" style={{fontSize: "14px", color: "#BABABA"}}>
//                                                             Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
//                                                         </p>
//                                                         <Stack gap={3} className="modalProduk">
//                                                             <div className="text-center fw-bold">Product Match</div>
//                                                             <Stack direction="horizontal" gap={3}>
//                                                                 <img src={profilpenjual} alt="" className="imageSmall" />
//                                                                 <div>
//                                                                     <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "24px"}}>
//                                                                         Nama Pembeli
//                                                                     </h5>
//                                                                     <p className="my-auto" style={{fontSize: "14px", color: "#BABABA"}}>
//                                                                         Kota
//                                                                     </p>
//                                                                 </div>
//                                                             </Stack>
//                                                             <Stack direction="horizontal" gap={3}>
//                                                                 <img src={profilproduk} alt="" className="imageSmall align-self-start mt-1" />
//                                                                 <div>
//                                                                     <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "26px"}}>
//                                                                         {produk.nama}
//                                                                     </h5>
//                                                                     <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "26px"}}>
//                                                                         <del>{produk.harga}</del>
//                                                                     </h5>
//                                                                     <h5 className="my-auto" style={{fontSize: "14px", lineHeight: "26px"}}>
//                                                                         Ditawar {produk.ditawar}
//                                                                     </h5>
//                                                                 </div>
//                                                             </Stack>
//                                                         </Stack>
//                                                         <button type="button" className="btn btnPrimary mt-3 w-100" id="btnSubmit" onClick={() => setShow(true)} data-bs-dismiss="modal">
//                                                             Hubungi via Whatsapp <i className="bi bi-whatsapp ms-2"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {/* Modal Status */}
//                                         <div className="modal fade" id={`status${produk.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                             <div className="modal-dialog modal-dialog-centered">
//                                                 <div className="modal-content modalPenawaran">
//                                                     <div className="modal-header">
//                                                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                                     </div>
//                                                     <div className="modal-body">
//                                                         <Stack gap={3}>
//                                                             <div>Perbarui status penjualan produkmu</div>
//                                                             <div className="form-check">
//                                                                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
//                                                                 <label className="form-check-label" htmlFor="flexRadioDefault1">
//                                                                     Berhasil terjual
//                                                                 </label>
//                                                                 <p className="my-auto" style={{fontSize: "14px", color: "#BABABA"}}>
//                                                                     Kamu telah sepakat menjual produk ini kepada pembeli
//                                                                 </p>
//                                                             </div>
//                                                             <div className="form-check">
//                                                                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
//                                                                 <label className="form-check-label" htmlFor="flexRadioDefault2">
//                                                                     Batalkan transaksi
//                                                                 </label>
//                                                                 <p className="my-auto" style={{fontSize: "14px", color: "#BABABA"}}>
//                                                                     Kamu membatalkan transaksi produk ini dengan pembeli
//                                                                 </p>
//                                                             </div>
//                                                         </Stack>
//                                                         <button type="button" className="btn btnPrimary mt-3 w-100" id="btnSubmit" onClick={() => setShow(true)} data-bs-dismiss="modal">
//                                                             Kirim
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <hr className="mb-4"></hr>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }