import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Links from "../../constants/links"
import logo from "../../images/logoprincipal.png"
import { Link } from "gatsby"
import "./_NavBar.scss"

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="NavBar ">
        <Link to="/">
          {/* <img
            src={logo}
            alt="Logo Bitlogic"
            className="d-inline-block align-top NavBar__Logo"
          /> */}
        </Link>
        <Navbar.Toggle
          className="NavBar__Toggler"
          aria-controls=" basic-navbar-nav"
        />
        <Navbar.Collapse id=" basic-navbar-nav" className="NavBar__Collapse">
          {/* Menu Links */}
          <Links />
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
