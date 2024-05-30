
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js;';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/pages/catalog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catalog />
      <Footer/>
    </div>
  );
}

export default App;
