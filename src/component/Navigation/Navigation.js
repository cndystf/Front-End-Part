/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../../css/style.css"
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink }  from "react-router-dom";

import icon from '../../images/rectangle-purple.png';
import { FiSearch, FiList, FiBell, FiUser, FiLogOut } from "react-icons/fi";

// import Navigation from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Navbar, Container } from "react-bootstrap";

// import list from "../../images/fi_list.svg";
// import user from "../../images/fi_user.svg";
// import notification from "../../images/fi_bell.svg";

import product from "../../images/exp-product.png";
// import search from "../../src/images/fi_search.svg"

export default function Navigation() {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light' >
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Brand><a href="/home"><img src={icon} alt="" /></a></Navbar.Brand>
                <form className="d-flex border buttonradius12 ">
                    <input className="form-control me-2 border-0" type="search" placeholder="Cari di sini ..." aria-label="Cari"></input>
                    <button className="btn" type="submit"><FiSearch /></button>
                </form>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <ul className="navbar-nav  mb-1 mb-lg-0 ms-auto" >
                        <li className="nav-item mx-1">
                            <NavLink to="/list" className="nav-link" aria-current="page"><FiList /><span className="nav-name">Product</span></NavLink>
                        </li>
                        <li className="nav-item mx-1">
                            <a href="#notification" className="nav-link"><FiBell /><span className="nav-name">Notification</span></a>
                                <a href="#" id="notification">
                                    <div className="notification-card">
                                        <div className="notification">
                                            <img src= {product} alt="product" />
                                                <div className="title">
                                                    <p>Penawaran produk</p>
                                                </div>   
                                                <div className="date">
                                                    <p>20 Apr, 14:04</p>
                                                </div>    
                                                <div className="detail">
                                                    <p>Jam tangan Casio
                                                    <br /><br />Rp 250.000
                                                    <br /><br />Ditawar Rp 200.000</p> 
                                                </div> 
                                        </div>
                                        <br />
                                        <div className="notification">
                                            <img src={product} alt="product" />
                                                <div className="title">
                                                    <p>Berhasil diterbitkan</p>
                                                </div>   
                                                <div className="date">
                                                    <p>19 Apr, 14:04</p>
                                                </div>    
                                                <div className="detail">
                                                    <p>Jam tangan Casio
                                                    <br /><br />Rp 250.000
                                                    </p> 
                                                </div> 
                                        </div>
                                    </div>
                                </a>
                        </li>
                        <li className="nav-item mx-1">
                            <NavLink to="/user" className="nav-link"><FiUser /><span className="nav-name">User</span></NavLink>
                        </li>
                    </ul>
                    {/* <Nav>
                        <Nav.Link href='/list'><FiList /></Nav.Link>
                        <Nav.Link href='/notification'><FiBell /></Nav.Link>
                        <Nav.Link href='/user'><FiUser /></Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}