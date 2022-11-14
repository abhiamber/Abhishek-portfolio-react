import './App.css';
import Allroute from './Allroutes/Allroute';
import Navbar from './Navbar/Navbar';
import Favicon from "react-favicon";

function App() {
  return (    <div className="App" >
  <Favicon url="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"></Favicon>
    
    <Navbar/>
<Allroute/>

     </div>
  );
}

export default App;
