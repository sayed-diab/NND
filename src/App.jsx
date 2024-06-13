// src/App.js
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; import Header from './components/Header';
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
    <>
      {loading ? <Preloader /> : (
        <>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Options" element={<Options />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
