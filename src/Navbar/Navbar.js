import { Link } from "react-router-dom";
import style from "../Style/Navbar.module.css";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  ABOUT_CLICK,
  CONTACT_CLICK,
  HOME_CLICK,
  PROJECT_CLICK,
  SKILLS_CLICK,
} from "../redux/clickpages/click.type";
// import { useDispatch } from "react-redux";
// import { aboutClick } from "../redux/clickpages/click.action";

function Navbar() {
  let [ham, setHam] = useState(false);

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  console.log("dbhj");

  function HandleHamberg(data) {
    setHam(!ham);
    // dispatch(aboutClick(data));
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [colorChange]);

  return (
    <div
      className={colorChange ? style.containercolorChanges : style.container}
    >
      <div className={style.Navbar}>
        <div className={style.logo}>
          <Link to="/">Abhishek Kumar Amber</Link>
        </div>
        <div className={ham ? style.hambergoperation : style.navbarsection}>
          {ham ? (
            <button onClick={HandleHamberg}>
              <FiX />
            </button>
          ) : null}

          <Link onClick={() => HandleHamberg(HOME_CLICK)} to="/">
            Home
          </Link>
          <Link onClick={() => HandleHamberg(ABOUT_CLICK)} to="/about">
            About
          </Link>
          <Link onClick={() => HandleHamberg(SKILLS_CLICK)} to="/skills">
            Skills
          </Link>
          <Link onClick={() => HandleHamberg(PROJECT_CLICK)} to="/project">
            Project
          </Link>
          <Link onClick={() => HandleHamberg(CONTACT_CLICK)} to="/contact">
            Contact
          </Link>
        </div>

        <div className={style.hamberg}>
          <FiAlignJustify onClick={HandleHamberg} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
