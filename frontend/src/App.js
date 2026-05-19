import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);