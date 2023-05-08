import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <h1 className="navbarLogo">BOOKSTORE</h1>

        <div>
          <button className="tipos">Infantiles</button>
          <button className="tipos">Clásicos</button>
          <button className="tipos">Auto Ayuda</button>
        </div>
        <CartWidget />
      </nav>
    </div>
  )
};

export default Navbar;