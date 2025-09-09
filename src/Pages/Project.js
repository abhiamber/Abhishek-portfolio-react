import style from "../Style/project.module.css";
import { useLocation } from "react-router-dom";
// import skincareimg from "../image/Skincarescreenshot.png";
// import chatappimg from "../image/chatpp.png";

function Project() {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === "/project" ? style.about : style.containers
      }
    >
      <div className={style.titles}>
        <p>Projects</p>
        <div className={style.profiles}>
          <div>
            <img
              src="https://github.com/user-attachments/assets/9dce3184-6703-4015-9398-85b993f4f903"
              alt="KindMeal"
            />
            <h1>Kindmeal.my</h1>
            <p>
              Developed a clone of KindMeal, a meal-sharing platform, with a focus on replicating its core features and functionality.
            </p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript, React Js</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/knowing-kiss-8592"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://kind-mealclone.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site{" "}
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://i.postimg.cc/bN0yLgLP/Screenshot-1075.png"
              alt="IdeaKart"
            />
            <h1>IdeaKart</h1>
            <p>
              Ideakart is a site that gives you an idea about the book you want
              to buy.{" "}
            </p>
            Tech Stack: <span>HTML5, CSS 3, JavaScript</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/fabulous-vest-203-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>
              </button>
              <button>
                {" "}
                <a
                  href="https://fabulous-vest-203.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://github.com/user-attachments/assets/ab7af35f-ab06-4fa9-a70b-46d031aa96e9"
              alt="Ideakart"
            />
            <h1>Task Management</h1>
            <p>
              Built a task management web application with intuitive user interfaces and robust functionality. Features include task creation, categorization, prioritization, deadline tracking, and user collaboration. Integrated real-time updates for seamless team productivity. Designed with scalability and a focus on user experience.
            </p>
            Tech Stack:{" "}
            <span>HTML5, CSS 3, React Js, Express JS, MongoDb</span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/Task-management-web-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://task-management-web-application-beige.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://i.postimg.cc/Zq4CZvmD/Web-capture-19-12-2022-173114-timely-cucurucho-1b7757-netlify-app.jpg"
              alt="SkinCare"
            />
            <h1>Skin Store</h1>
            <p>
              Skin Store is the online platform to buy your best skin care, hair
              care, hair growth and makeup products,
            </p>
            Tech Stack:{" "}
            <span>
              HTML5, CSS 3, React Js, Chakra UI, Express JS, MongoDb, JWT
            </span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/AnasQu7/-organic-horn-8005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://timely-cucurucho-1b7757.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://github.com/user-attachments/assets/9192883f-45c8-4561-ac93-56339b30ed2b"
              // src={chatappimg}
              alt="chatapp"
            />
            <h1>Chat Application</h1>
            <p>
              Developed an instant communication platform with user authentication, supporting real-time one-to-one/group
              chats and video calls, with call management features like ring notifications, call control.
            </p>
            Tech Stack:{" "}
            <span>
              HTML5, CSS 3, React Js, Chakra UI, Express JS, MongoDb,
              JWT,socket.io
            </span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/chat-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://chatapp2121.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://github.com/user-attachments/assets/671496b9-e410-451a-a9b3-776c2280ba6d"
              alt="Purpelbeauty"
            />
            <h1>Purplle</h1>
            <p>
              Developed a full-stack e-commerce platform with advanced user and admin functionalities. Features include dynamic product catalog, secure checkout, real-time order tracking, and an admin panel for inventory, orders and user management. Designed for scalability and seamless user experience.
            </p>
            Tech Stack:{" "}
            <span>
              HTML5, CSS 3, React Js, Chakra UI, Express JS, MongoDb, JWT
            </span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/Purpple.com-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://frontend-lyart-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://github.com/user-attachments/assets/bafb30b6-67b7-49a8-8bae-4a5870ca77c5"
              alt="aiassistant"
            />
            <h1>
              Context-Aware AI Assistant</h1>
            <p>
              Built an AI-powered personal assistant using tool calling, RAG, vector search, and memory caching to deliver context-aware responses            </p>
            Tech Stack:{" "}
            <span>
              HTML5, Tailwind CSS, JavaScript, LangChain, Express JS, Groq Cloud API, Tavily, Pinecone, Cohere Embedding Model, Node Cache
            </span>
            <br /> <br />
            <div className={style.hoisting}>
              <button>
                {" "}
                <a
                  href="https://github.com/abhiamber/chat-boat-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Git Repo
                </a>{" "}
              </button>
              <button>
                {" "}
                <a
                  href="https://assistifyaiagent.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
