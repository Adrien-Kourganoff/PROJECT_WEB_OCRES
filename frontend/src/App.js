import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import DashBoard from './Components/DashBoard/DashBoard'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Reglage from './Components/Reglage/Reglage';




function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route  path ="/" element = {<DashBoard />} />
        <Route  path ="/reglage" element = {<Reglage />} />
       </Routes>
    </BrowserRouter>



    /*<div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Topbar />
      </div>

    </div>*/
  );
}

export default App;
