import React from 'react';
import Header from './components/header/header';
import Home from './pages/home';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
