import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/stylesheet.css'
import {Profile} from "./components/profile/Profile";

// import 'bootstrap/js/src/modal'

function App() {
  return (
    <div className="wrapper" >
      <Home/>
      {/*<Profile/>*/}
    </div>
  );
}

export default App;
