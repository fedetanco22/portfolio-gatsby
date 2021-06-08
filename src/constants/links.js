import React from "react"
import { Link } from "gatsby"
import Nav from "react-bootstrap/Nav"

const MENU_LINKS = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "servicios", url: "/" },
  { id: 3, text: "edtech", url: "/" },
  { id: 4, text: "bitway", url: "/" },
  { id: 5, text: "blog", url: "/" },
  { id: 6, text: "contacto", url: "/" },
]

const Links = ({ styleClass }) => {
  return (
    <Nav className="NavBar__List ">
      {MENU_LINKS.map(({ id, text, url }) => (
        <Nav.Item key={id} className="NavBar__Item">
          <Link
            to={url}
            className={`NavBar__Link ${styleClass ? styleClass : ""}`}
          >
            {text}
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}

export default Links
