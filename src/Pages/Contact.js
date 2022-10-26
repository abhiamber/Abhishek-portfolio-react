
import style from "../Style/contact.module.css";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/contact" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>Contacts me</p>
        <div className={style.profiles}>
        
          </div>
      </div>
    </div>
  );
}
export default Contact;



















