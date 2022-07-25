import React from "react";
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../images/fi_arrow-left.png";
import rectangle from "../../images/rectangle-purple.png";
import Group1 from "../../images/Group1.png"
import axios from "axios";
import { useState, useEffect } from 'react'
import { FiLogOut, FiSettings, FiEdit3 } from 'react-icons/fi';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function InfoProfil() {
  // const [data, setdata] = useState(null);
  // const [isLoading, setisLoading] = useState(false);
  // const [isError, setisError] = useState(false);

  // useEffect(() => {
  //   setisLoading(true);
  //    axios
  //   .get("https://second-hand-binar.herokuapp.com/api/user/list")
  //   .then(function (response) {
  //     console.log(response);
  //     cookies.set("jwt", response.data.data.token, {
  //         path: "/",
  //         expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  //     });
  // })
  //   .catch(function (error) {
  //     console.log(error.response.data);
  //   });
  // }, []);
     
//   const logout = () => {
//     axios
//         .get("https://second-hand-binar.herokuapp.com/api/user/logout", {
//             username: userName
//         })
//         .then(function (response) {
//             console.log(response);
//             cookies.set("jwt", response.data.data.token, {
//                 path: "/",
//                 expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//             });
//         })
//         .catch(function (error) {
//             console.log(error.response.data);
//         });
// };
  // if (isLoading) return <h1>No User Found</h1>;
  // else if (data && !isError)

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
        <div className="container" style={{ padding: '30px', width: '70%' }}>
          <a href="/home"> <img src={arrow} alt="" /></a>
          <label for="file-input" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <img src={Group1} alt="" />
          </label>
          <input id='file-input' type="file" style={{ display: 'none' }} accept=".jpg,.jpeg,.png" />
          <h2>Halo!</h2>
            <div className="table-profile">
              <table>
                <tr>
                  <a href="/lengkapi-akun">
                  <td><FiEdit3 /></td>
                  <td>Ubah Akun</td>
                  </a>
                </tr>
                <tr>
                  <a href="#">
                  <td><FiSettings /></td>
                  <td>Pengaturan Akun</td>
                  </a>
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
        </section>
    </div>
  )
}