import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App"> 
     <Header />
     <Navbar />
     <AllRoutes />
     <Footer/>
    </div>
  );
}

export default App;
