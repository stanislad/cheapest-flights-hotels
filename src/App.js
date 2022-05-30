import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Title from "./components/Title";
import About from "./components/About/About";
import FindFlight from "./components/Home/FindFlight";

const App= () =>{
    const [showSearch, setShowSearch] = useState(true);

  return (
      <Router>
          <div className='ui container'>
                <Title/>
                <FindFlight show={showSearch}/>
                <Routes>
                  <Route path='/' element={<Home showSetter={setShowSearch}/>}/>
                  <Route path='/about/:index' element={<About showSetter={setShowSearch}/>}/>
                </Routes>
          </div>

      </Router>
  );
}

export default App;
