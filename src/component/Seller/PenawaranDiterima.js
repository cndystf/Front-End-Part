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

function ModalStatus(props) {
  
  const [formData, setFromData] = useState ({
    choice : ""
  })

  const handleChange = e => {
    // e.persist();
    // console.log(e.target.value);

    // setFromData(prevState => ({
    //   ...prevState,
    //   formData: e.target.value
    // }));
  };

  // const [modalSuccess, setModalSuccess] = React.useState(false);

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-status">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span style={{ fontWeight: "bold", fontSize: "14px" }}>Perbarui status penjualan produkmu</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              name="choice"
              label="Berhasil terjual"
              value="berhasil_terjual"
              type="radio"
              aria-label="radio1"
              style={{ fontSize: "14px" }}
              onChange={handleChange} 
              // checked={formData === "berhasil_terjual"}
            />
            <p className="desc-status">Kamu telah sepakat menjual produk ini kepada pembeli</p>
            <Form.Check
              name="choice"
              label="Batalkan transaksi"
              value="batalkan_transaksi"
              type="radio"
              aria-label="radio2"
              style={{ fontSize: "14px" }}
              onChange={handleChange} 
              // checked={formData === "batalkan_transaksi"} 
            />
            <p className="desc-status">Kamu membatalkan transaksi produk ini dengan pembeli</p>
            {/* <button className="status-btn" type="submit" onClick={() => setModalSuccess(true)}>Kirim</button> */}
            <button className="status-btn" type="submit">Kirim</button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer> */}
      </div>
    </Modal>
  )
}

// function ModalSuccess(props) {
//   return (
//       <Modal
//         {...props}
//         size="sm"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//               <span style={{ fontWeight : "bold", fontSize: "14px" }}>Yeay kamu berhasil mendapat harga yang sesuai</span>
//               <p style={{ marginTop: "14px", textAlign: "justify", fontSize: "12px", color: "#8a8a8a" }}>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         </Modal.Body>
//         {/* <Modal.Footer>
//             <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer> */}
//     </Modal>
//   )
// }

export default function PenawaranDiterima() {

  const [modalStatus, setModalStatus] = React.useState(false);

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
                    <button className="btn-status" onClick={() => setModalStatus(true)}>Status</button>
                </div>
                <div>
                  <ModalStatus
                    show={modalStatus}
                    onHide={() => setModalStatus(false)}
                  />
                </div>
            </div>
        </div>
      </section>   
    </div>
  )
}