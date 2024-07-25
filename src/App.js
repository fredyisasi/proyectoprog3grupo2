import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Home from './pages/Home';
import News from './pages/News';
import Tutorials from './pages/Tutorials';
import Login from './pages/Login';
import ArticleDetail from './pages/ArticleDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/Tutorials" element={<Tutorials />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ArticleDetail" element={<ArticleDetail />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
};
export default App;
