import './App.css';
import Restaurants from './components/Restaurants';
import Navbarglobal from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbarglobal />
      <Restaurants />
    </div>
  );
}

export default App;
