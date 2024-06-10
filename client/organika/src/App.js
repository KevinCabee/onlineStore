
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js;';
import QuantityPicker from './components/quantityPicker';
import Catalog from './components/pages/catalog';
import Home from './components/pages/home';
import About from './components/pages/about';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/pages/admin';
import GlobalProvider from './context/globalProvider';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
