import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Title from "./components/Title";
import About from "./components/About";

function App() {

  return (
      <Router>

          <div className='ui container'>
                <Title/>
                <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                </Routes>
          </div>

      </Router>
  );
}

export default App;
