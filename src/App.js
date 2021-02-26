import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Navigation/Routes";
import Header from "./Navigation/Header";

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className="App-body">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;