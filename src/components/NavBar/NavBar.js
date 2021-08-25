import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div>
        <p>Coffee Store</p>
      </div>
      <ul>
        <Link className="Navigation" exact to="/">
          Inicio
        </Link>

        <Link className="Navigation" to="/about">
          Nosotros
        </Link>

        <Link className="Navigation" to="/contact">
          Contacto
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
