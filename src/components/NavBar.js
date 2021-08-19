import "../App.css";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <nav className="navStyle">
      <div>
        <p>Coffee Store</p>
      </div>
      <a href="#">Inicio</a>

      <a href="#">Nosotros</a>

      <a href="#">Contacto</a>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
