import { useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import SwitchButton from "../../ui/Switch_Button";
import logo from "../../../assets/logo.svg";
import {
  FaHome,
  FaIdCardAlt,
  FaAngellist,
  FaLaptopCode,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

type NavbarProps = {
  showPanel: boolean;
};
type Theme = string | "light";

function Navbar({ showPanel }: NavbarProps) {
  const {
    language: { navigation },
    languageState,
    toggleLanguage,
  } = useLanguage();

  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") || ""
  );

  const toggleTheme = () => setTheme(theme === "" ? "light" : "");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.className = theme;
  }, [theme]);

  return (
    <header className={showPanel ? "main-menu open-menu" : "main-menu"}>
      <div className="main-menu__logo">
        <img src={logo} alt="" />
      </div>
      <nav className="main-menu__nav">
        <ul className="main-menu__nav__list">
          <li className="main-menu__nav__list__item">
            <Link
              className="main-menu__nav__list__item__link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
            >
              <FaHome className="icon" /> <span>{navigation.home}</span>
            </Link>
          </li>
          <li className="main-menu__nav__list__item">
            <Link
              className="main-menu__nav__list__item__link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
            >
              <FaIdCardAlt className="icon" />
              <span>{navigation.About}</span>
            </Link>
          </li>
          <li className="main-menu__nav__list__item">
            <Link
              className="main-menu__nav__list__item__link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
            >
              <FaAngellist className="icon" />
              <span>{navigation.skills}</span>
            </Link>
          </li>
          <li className="main-menu__nav__list__item">
            <Link
              className="main-menu__nav__list__item__link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={200}
            >
              <FaLaptopCode className="icon" />
              <span>{navigation.projects}</span>
            </Link>
          </li>
          <li className="main-menu__nav__list__item">
            <Link
              className="main-menu__nav__list__item__link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={200}
            >
              <FaEnvelopeOpenText className="icon" />{" "}
              <span>{navigation.contact}</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-menu__switch-box">
        <SwitchButton
          id="language"
          isChecked={languageState === "en" ? true : false}
          toggle={toggleLanguage}
          textLeft="Es"
          textRight="En"
        />
        <SwitchButton
          id="theme"
          isChecked={theme === "" ? true : false}
          toggle={toggleTheme}
          textLeft="Light"
          textRight="Dark"
          IconLeft={<FiSun />}
          IconRight={<FiMoon />}
        />
      </div>
      <ul className="main-menu__social">
        <li>
          <a href="https://github.com/AngelMrles7" target="_blank">
            <FaGithubSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/angel-morales-chocue-441037205/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
