// src/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Options from './pages/Options';
import Checkout from './pages/Checkout';
import Preloader from './components/Preloader'; // استيراد Preloader
import './fontAwesome';
import './App.css';
import 'normalize.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      {loading ? <Preloader /> : (
        <>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/Options" element={<Options />} />
              <Route path="/Checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
