import SideBar from './components/SideBar';
import Orders from './components/Orders';
import './App.css';


function App() {
  return (
    <div className="App">
      <SideBar className="SideBar" />
      <Orders className="Orders" />
    </div>
  );
}

export default App;
