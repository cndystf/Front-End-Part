/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../../css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink }  from "react-router-dom";

import icon from '../../images/rectangle-purple.png';
import { FiLogIn, FiSearch, FiList, FiBell, FiUser, FiLogOut } from "react-icons/fi";

import Navigation from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

import list from "../../images/fi_list.svg";
import user from "../../images/fi_user.svg";
import notification from "../../images/fi_bell.svg";

import product from "../../images/exp-product.png";
// import search from "../../src/images/fi_search.svg"

export default function Navbar() {

    return (
            <Navigation collapseOnSelect expand="lg" variant='light'>
                <Container>
                    <Navigation.Brand><a href="/home"><img src={icon} alt="" /></a></Navigation.Brand>
                    <Navigation.Toggle aria-controls="responsive-navbar-nav" />
                    <Navigation.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">
                                <form className="d-flex border buttonradius12 ">
                                    <input className="form-control me-2 border-0" type="search" placeholder="Cari di sini ..." aria-label="Cari"></input>
                                    <button className="btn" type="submit"><FiSearch /></button>
                                </form>
                            </Nav.Link>
                        </Nav>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-1 mb-lg-0 ms-auto" >
                                <li className="nav-item mx-1">
                                    <NavLink to="/list" className="nav-link" aria-current="page"><img src={list} alt=""/></NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <a href="#notification" className="nav-link"><img src={notification} alt=""/></a>
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
                                    <NavLink to="/user" className="nav-link"><img src={user} alt=""/></NavLink>
                                </li>
                            </ul>
                        </div>
                    </Navigation.Collapse >
                </Container >
            </Navigation >
    )
}