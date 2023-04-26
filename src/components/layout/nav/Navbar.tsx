import React from "react";

function Navbar() {
  return (
    <header className="main-menu">
      <nav className="main-menu__nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>My skills</li>
          <li>Proyects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <ul className="main-menu__social">
        <li>
          <a href="#">
            <img src={""} alt="Icono de Likedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AngelMrles7">
            <img src={""} alt="Icono de Github" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
