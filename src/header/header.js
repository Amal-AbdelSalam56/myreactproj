import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img1 from "../img/favicon.png";
import { MdLocationPin } from "react-icons/md";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import './header.css'
import { NavDropdown } from "react-bootstrap";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Header = () => {

  // const {lang } = useContext(langContext); 
  // const counter = useSelechrefr((state) => {
  //   return state.counter.counter;
  // });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const url = "#"

  return (<>

    <Navbar expand="lg" className=" navbar navbar-expand-lg navbar-light bg-light transparent-navbar sticky-hrefp  fixed-top" fragment="68152b6af2"
      style={{ height: "140px", opacity: ".9", padding: "0" }}>
      <Nav className="container " >
        <a href={url} className="navbar-brand">
          <img style={{ width: "100px", height: "100px", top: "0" }} loading="lazy" src={img1} alt="logo" className="img-fluid mx-3" />
        </a>
        <div id="mainNavigation navbarNavDropdown" className="collapse navbar-collapse " style={{ fontWeight: "500" }}>
          <ul className="navbar-nav mx-auhref flex-wrap justify-content-center  " >
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Wesrern Sweets
              </a>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item " href={url}>Gateaux</a></li>
                <li><a className="dropdown-item " href={url}>Cakes</a></li>
                <li><a className="dropdown-item " href={url}>Ice Cream Cake</a></li>
              </ul>
            </li> */}
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title=" Wesrern Sweets" menuVariant="light">
                  <NavDropdown.Item href="#action/3.1">Gateaux</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Cakes </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Ice Cream Cake</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <li className="nav-item " >
              <a href={url} className="nav-link" id="nav-dropdown-dark-example">Oriental Sweets</a>
            </li>
            <li className="nav-item ">
              <a href={url} className="nav-link" id="nav-dropdown-dark-example">Bakery</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a href={url} className="nav-link   dropdown-toggle">Nuts And Yameesh </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={url}>Nuts</a></li>
                <li><a className="dropdown-item" href={url}>Yameesh</a></li>
              </ul>
            </li>  */}
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title=" Nuts And Yameesh " menuVariant="light">
                  <NavDropdown.Item href="#action/3.1">Nuts</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Yameesh </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* <li className="nav-item dropdown">
              <a href={url} className="nav-link   dropdown-toggle">Kahk And Biscuits </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={url}>Biscuits</a></li>
                <li><a className="dropdown-item" href={url}>Kahk</a></li>
                <li><a className="dropdown-item" href={url}>Ghorayeba</a></li>
                <li><a className="dropdown-item" href={url}>Petits-fours</a></li>
              </ul>
            </li> */}
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title=" Kahk And Biscuits " menuVariant="light">
                  <NavDropdown.Item href="#action/3.1">Biscuits</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Kahk </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Ghorayeba</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Petits-fours</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            {/* <li className="nav-item dropdown">
              <a href={url} className="nav-link  dropdown-toggle">Beverages  </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={url}>Hot Drinks</a></li>
                <li><a className="dropdown-item" href={url}>COLD Drinks</a></li>
              </ul>
            </li> */}
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title=" Beverages  " menuVariant="light">
                  <NavDropdown.Item href="#action/3.1">Hot Drinks</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">COLD Drinks </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <li className="nav-item "  style={{marginRight:"40PX" }}>
              <a href={url} className="nav-link" id="nav-dropdown-dark-example">Halawet El Moluled</a>
            </li>
            <li className="nav-item ">
              <a href={url} className="navbar-brand" onClick={handleShow}>
                <i style={{ color: "#6f3c2e", fontSize: "20px" }}><FaSearch /></i>
              </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="search" placeholder="search" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
       
      </Modal>









              <a href={url} className="navbar-brand">
                <i style={{ color: "#6f3c2e", fontSize: "20px" }} ><FaUserAlt /></i>
              </a>
              <a href={url} className="navbar-brand">
                <i style={{ color: "#6f3c2e", fontSize: "23px" }}><FaShoppingBasket />
                <span className="badge rounded-pill" style={{ backgroundColor: "#f6b0ab", fontSize: "15px", padding: "1px 5px",
                 verticalAlign: "super", opacity: "1", fontWeight: "100" }}>0</span>
                 </i>
              </a>
              <a href={url} className="navbar-brand">
                <i style={{ color: "#6f3c2e", fontSize: "25px" }} ><MdLocationPin /></i>
              </a>

            </li>
          </ul>
        </div>

      </Nav>
    </Navbar>
  </>
  )
}



export default Header;