/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../../css/style.css"
import "../../css/responsive.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink }  from "react-router-dom";

import icon from '../../images/rectangle-purple.png';
import { FiLogIn, FiSearch } from "react-icons/fi";

// import Navigation from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { Navbar, Container } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='light' variant='light' >
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Brand><a href="/"><img src={icon} alt="" /></a></Navbar.Brand>
                <form className="d-flex border buttonradius12 ">
                    <input className="form-control me-2 border-0" type="search" placeholder="Cari di sini ..." aria-label="Cari"></input>
                    <button className="btn" type="submit"><FiSearch /></button>
                </form>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <ul className="navbar-nav  mb-1 mb-lg-0 ms-auto" >
                        <li className="nav-item mx-1">
                            <NavLink to="/login" className="nav-link" aria-current="page">
                                <button 
                                    type="button" 
                                    className="btn btn-sm btn-custom nav-link text-light buttonradius12 active">
                                    <FiLogIn/>
                                    Masuk
                                </button>
                            </NavLink>
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