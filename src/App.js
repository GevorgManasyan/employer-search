import logo from './logo.svg';
import './App.scss';
import SideBar from './components/sideBar/sideBar';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Main/>
    </div>
  );
}

export default App;
