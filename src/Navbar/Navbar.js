import { Link } from "react-router-dom";
import style from "../Style/Navbar.module.css";
import { FiAlignJustify,FiX } from "react-icons/fi";
import { useState } from "react";



function Navbar() {
  let [ham, setHam] = useState(false);

  function HandleHamberg() {
    setHam(!ham);
  }

  

  return (
    <div className={ style.container}>
      <div className={style.Navbar}>
        <div className={style.logo}>
          <Link to="/">Abhishek Kumar Amber</Link>
        </div>
        <div  className={ham? style.hambergoperation: style.navbarsection } >
        {ham? <button onClick={HandleHamberg} ><FiX/></button>:null}
      

          <Link   onClick={HandleHamberg}  to="/">Home</Link>
          <Link  onClick={HandleHamberg}  to="/about">About</Link>
          <Link  onClick={HandleHamberg}  to="/skills">Skills</Link>
          <Link  onClick={HandleHamberg}  to="/project">Project</Link>
          <Link  onClick={HandleHamberg}  to="/contact">Contact</Link>
        </div>

        <div className={style.hamberg}>
          <FiAlignJustify onClick={HandleHamberg} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
