import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import imgg from "./ok.jpg"
 


function App() {
  return (
    <div className="App">
   <Header/>
   <Main/>
   <Footer/>
    <img src={imgg}/>
    </div>
  );
}

export default App;
