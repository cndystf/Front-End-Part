import React from "react";
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../images/fi_arrow-left.png";
import rectangle from "../../images/rectangle-purple.png";
import Group1 from "../../images/Group1.png"

import { FiLogOut, FiSettings, FiEdit3 } from 'react-icons/fi';

export default function InfoProfil() {
  return (
    <div className="info-profil">
      <nav className="navbar navbar-expand-lg bg-light d-inline-flex"
        style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="d-inline-flex" style={{ padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <a className="navbar-brand" href='/home'> <img src={rectangle} alt='' />
          </a>
        </div>

        <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-brand mb-0 h1" style={{ fontWeight: '400px' }}>Akun Saya</span>
        </div>

        <div className="d-inline-flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <span className="navbar-brand mb-0 h1"></span>
        </div>
      </nav>

      <section>
        <form>
          <div className="container" style={{ padding: '30px', width: '70%' }}>
            <a href="/home"> <img src={arrow} alt="" /></a>
            <label for="file-input" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
              <img src={Group1} alt="" />
            </label>
            <input id='file-input' type="file" style={{ display: 'none' }} accept=".jpg,.jpeg,.png" />
            {/* <div className="edit-account">
              <FiEdit3>
                Ubah Akun
              </FiEdit3>
            </div>
            <div className="setting-account">
              <FiSettings>
                Pengaturan Akun
              </FiSettings>
            </div>
            <div className="logout">
              <FiLogOut>
                Logout
              </FiLogOut>
            </div> */}
            <div className="table-profile">
              <table>
                <tr>
                  <a href="/lengkapi-akun">
                  <td><FiEdit3 /></td>
                  <td>Ubah Akun</td>
                  </a>
                  {/* <hr style={{ width:'1000px', color:'#000000', margin:'0'}} /> */}
                </tr>
                <tr>
                  <a href="#">
                  <td><FiSettings /></td>
                  <td>Pengaturan Akun</td>
                  </a>
                  {/* <hr style={{ color:'#000000', margin:'0'}} /> */}
                </tr>
                <tr>
                  <a href="/logout">
                    <td><FiLogOut /></td>
                    <td>Logout</td>
                    </a>
                </tr>
              </table>
            </div>
          </div>
        </form>
      </section>

    </div>
  )
}