import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import { LandingPage, HalamanProduk, InfoProduk, DaftarJual } from './component';
// import { Home } from './component'
// import { InfoProfil } from './component';
// import { Login } from './component';
// import { Register } from './component';
// import { Buyer } from './component'
// import { StatusSuccess } from './component'

import { LandingPage, Login, Register, Home } from './component';
import DaftarJual from './component/DaftarJual/DaftarJual';
import User from './component/InfoProfil/InfoProfil';

import Product from './component/InfoProduk/InfoProduk';
import ProdukDiminati from'./component/Seller/ProdukDiminati';
import InfoPenawar from './component/Seller/InfoPenawar';
import StatusPenawar from './component/Seller/PenawaranDiterima';

import HalamanProdukBuyer from './component/Buyer/HalamanProduk';
import HalamanProdukSeller from './component/Seller/HalamanProduk';
// import StatusSuccess from './component/Buyer/StatusSukses';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/list" element={<DaftarJual />} />
      <Route path="/user" element={<User />} />
      {/* lanjutin di bawah sini. buat test route/ngeliat page*/}
      <Route path="/edit-product" element={<Product />} />
      <Route path="/diminati" element={<ProdukDiminati />} />
      <Route path="/info-penawar" element={<InfoPenawar />} />
      <Route path="/penawar" element={<StatusPenawar />} />
      
      <Route path="/seller" element={<HalamanProdukSeller />} />
      <Route path="/buyer" element={<HalamanProdukBuyer />} />
      {/* <Route path="/bargain-success" element={<StatusSuccess />} /> */}

      {/* Route di bawah ini masih perkiraan */}
      {/* <Route path="/form-product" element={<InfoProduk />} />
      <Route path="/sell-product" element={<HalamanProduk />} /> 
      <Route path="/edit-product" element={<InfoProduk />} />
      <Route path="/user-profile" element={<EditProfil />} />
      <Route path="/info-product" element={<HalamanProdukBuyer />} />
      <Route path ="/bargain-success" element={<StatusSuccess />} /> */}
      {/* <Route path="/notif-user" element={< NotifUser/>} />
      <Route path="/notif-seller" element={< NotifSeller />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();