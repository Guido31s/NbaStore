import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import {  NavDropdown, Nav } from "react-bootstrap";
import image from "../NavBar/NBALOGO.png"

const NavBar = () => {


  return (
<Navbar className="bg-light styles" bg="light" expand="lg">
<Link to="/"><img src={image} alt="NBA Logo" width="50"/></Link>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="my-2 my-lg-0 align-items-center m-auto"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <div className=" d-flex align-items-center">
          <Link className="navLink" exact to="/">
              Inicio
            </Link>
            <Link className="navLink" to="/about">
              Nosotros
            </Link>
          <NavDropdown className="navLink text-black" title="Categorias" id="navbarScrollingDropdown">
                  <li>
                  <Link className="navLink"  to={`/category/hat`}>
                    Hat
                  </Link>
                  </li>
                  <li>
                  <Link className="navLink"  to={`/category/jersey`}>
                    Jersey
                  </Link>
                  </li>
                  <li>
                  <Link className="navLink" to={`/category/socks`}>
                    Socks
                  </Link>
                  </li>
          </NavDropdown>
            <Link className="navLink" to="/cart">
                  <CartWidget />
            </Link> 
        </div>
    </Nav>

  </Navbar.Collapse>
</Navbar>)};



export default NavBar;


