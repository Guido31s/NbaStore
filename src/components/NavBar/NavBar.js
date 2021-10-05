import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import image from "../NavBar/NBALOGO.png"

const NavBar = () => {


  return (
  <Navbar className="styles" bg="danger" expand="lg">
      <Link to="/"><img src={image} alt="NBA Logo" width="50"/></Link>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="my-2 my-lg-0 align-items-center m-auto"
          style={{ maxHeight: '100px' }}>
          <div className=" d-flex align-items-center">
              <Link className="navLink" exact to="/">
                  Inicio
                </Link>
                      <li>
                      <Link className="navLink"  to={`/category/hat`}>
                        Gorras
                      </Link>
                      </li>
                      <li>
                      <Link className="navLink"  to={`/category/jersey`}>
                        Camisetas
                      </Link>
                      </li>
                      <li>
                      <Link className="navLink" to={`/category/socks`}>
                        Medias
                      </Link>
                      </li>
            </div>
            <Link className="navLink" to="/cart">
                      <CartWidget />
                </Link> 
        </Nav>
        </Navbar.Collapse>
  </Navbar>
)};



export default NavBar;


