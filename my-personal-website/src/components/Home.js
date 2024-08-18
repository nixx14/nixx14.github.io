// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './Homepage';

const Home = () => {
  return (
    <div className="container">
        <Navbar />
        <HomePage />
        <Footer />
    </div>
  );
}

export default Home;