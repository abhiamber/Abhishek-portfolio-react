import { Link } from "react-router-dom";
import style from "../Style/Home.module.css";

function Home() {
  return (
    <div className={style.container}>


    <div  className={style.title}>

    <p> Hello, I'm a</p>

    <h2> Full Stack Web Developer</h2>

    <Link><button>Resume</button></Link>
  
    
    </div>
     </div>
  );
}
export default Home;
