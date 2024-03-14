import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
// import About from './components/About';
// import Features from './components/Features';
// import Artpart from './components/Artpart';
// import Reglogin from './components/Reglogin';
import { Route, Routes} from "react-router-dom";
import Gallery from './components/Gallery';
import {auth} from "./firbase";
import Footer from './components/Footer';
import './mediaquery.css';
function App() {
  const [userName, setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if (user){
        setUserName(user.displayName);
      }
      else setUserName("");
    });
  }
  ,[])
  return (
    <div className="App">
      <Navbar name={userName}/>
      <Routes>
      <Route path='/' element={<Homepage />} />
      </Routes>
      <Routes>
      <Route path="/artgallery" Component={Gallery}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;