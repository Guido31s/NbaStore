import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Form, Button, FormControl, NavDropdown, Nav } from "react-bootstrap";

const NavBar = ({ data }) => {
  return (
<Navbar className="bg-light" bg="light" expand="lg">
  <Navbar.Brand href="#">NBA Store</Navbar.Brand>
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
          {data.map((data) => {
              return (
                <li>
                  <Link className="navLink" key={data} to={`/category/${data}`}>
                    {data}
                  </Link>
                </li>
              );
            })}
          </NavDropdown>
          <Link className="navLink" to="/contact">
              Contacto
            </Link>
            <Link className="navLink" to="/cart">
                  <CartWidget />
            </Link> 
        </div>
    </Nav>
   
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 rounded-0"
        aria-label="Search"
      />
      <Button variant="btn btn-outline-secondary rounded-0">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>)};



export default NavBar;


