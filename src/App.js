import React, { useState, useEffect } from "react";
import "./App.css";
import ConsentSurvey from "./ConsentSurvey";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ConsentSurvey cols="col-md-4" />} />        
          <Route path="/survey" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
