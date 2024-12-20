import "./Header.css";
import logo from "../../assets/SSH_logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <div className="header__container">
        <h1 className="header__title">Scholar Search Hub</h1>
        <div className="header__button-container">
          <button className="header__button">Sign up</button>
          <button className="header__button">Log in</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
