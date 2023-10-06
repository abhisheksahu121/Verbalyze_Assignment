import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import {Home} from "./pages/Home";
import {Contactus} from "./pages/Contactus";
import {Design} from "./pages/Design";
import {Development} from "./pages/Development";
import {Marketing} from "./pages/Marketing";
import {Services} from "./pages/Services";
import {Signup} from "./pages/Signup";
import { Alanai } from "./pages/Alanai";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/marketing" element={<Marketing/>}></Route>
          <Route path="/development" element={<Development/>}></Route>
          <Route path="/design" element={<Design/>}></Route>
          <Route path="/machinelearning" element={<Alanai/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
