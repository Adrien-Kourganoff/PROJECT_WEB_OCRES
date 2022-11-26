import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Topbar />
      </div>

    </div>
  );
}

export default App;
