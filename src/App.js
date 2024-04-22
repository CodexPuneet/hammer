import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  return (
    <div className="App"> 
     <Header />
     <Navbar />
     <AllRoutes />
    </div>
  );
}

export default App;
