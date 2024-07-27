import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Team';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <Router basename='/'>
      <div>
        <Navbar />
        <Header />
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Contact id="contact" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
