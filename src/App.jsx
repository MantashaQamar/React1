import React from 'react';
import './styles/App.scss';
import NavBar from './components/Navbar';
import Content from './components/content';
import Footer from './components/footer';

function MainApp() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default MainApp;
