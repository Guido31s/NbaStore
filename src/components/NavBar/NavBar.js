import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ data }) => {
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
        {data.map((data) => {
          return (
            <li>
              <Link className="Navigation" key={data} to={`/category/${data}`}>
                {data}
              </Link>
            </li>
          );
        })}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
