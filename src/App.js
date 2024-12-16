import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProductList from './user/pages/ProductList';
// import Home from './user/pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
