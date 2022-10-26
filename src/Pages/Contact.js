import style from "../Style/contact.module.css";
import { useLocation } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdCall } from "react-icons/md";

function Contact() {
  const location = useLocation();

  const handleSubmit=()=>{
    
  }

  return (
    <div
      className={
        location.pathname === "/contact" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>Contacts</p>
        <div className={style.profiles}>
          <div className={style.getintouch}>
            <h1>Get in Touch</h1>
            <div className={style.reactIcon}>
              <TfiEmail />
              <p>abhiamber191@gmail.com</p>
            </div>

            <div className={style.reactIcon}>
              <AiFillGithub />
              <p>
                {" "}
                <a
                  href="https://github.com/abhiamber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  GItHub
                </a>{" "}
              </p>
            </div>

            <div className={style.reactIcon}>
              <AiFillLinkedin />
              <p>
                <a
                  href=" https://www.linkedin.com/in/abhishek-kumar-amber/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  linkedin
                </a>{" "}
              </p>
            </div>

            <div className={style.reactIcon}>
              <MdCall />
              <p>+91 903936282</p>
            </div>
          </div>

          <div className={style.messageme}>
            <h1>Message me</h1>
            <div className={style.formsection}>
              <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" /> <br />
                <input type="email" placeholder="Email" /> <br />
                <input type="text" placeholder="Subject" /> <br />
                <textArea type="text" placeholder="Message" /> <br />
                <input type="submit" value="Send message" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
