import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Recommend from './components/Recommend';
import Top_Recommend from './components/Top_Recommend';
import Footer from './components/Footer';  // Correct for default export


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Recommend />
      <Top_Recommend />
      <Footer />
    </div>
  );
}

export default App;
