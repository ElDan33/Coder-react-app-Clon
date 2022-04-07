import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ContactUs from './components/pageSections/ContactUs';
import Products from './components/pageSections/Products';
import AboutUs from './components/pageSections/AboutUs';
import Home from './components/pageSections/Home';
import NavBar from './components/NavBar';


function App() {


  return (
    <div className="">
        <NavBar/>
        <Router>
          <Routes>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/AboutUs" element={<AboutUs />} ></Route>
            <Route path="/" element={<Home />} ></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
