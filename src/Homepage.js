import React, { useState, useEffect } from "react";
import "./App.css";
import optplaced from './optplaced.json';
import OptPlaced from "./OptPlaced";

function Homepage() {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center me-0">         
          <h5 className="display-5 text-decoration-underline text-center my-5">
            Consolidate Placement - Opted vs Placed
          </h5>
          <h1 className="text-center text-primary bg-warning">M.Sc.IT</h1>
          <OptPlaced data={optplaced.MScIT} cols="col-md-4" type="bar" />
          <br />
          <h1 className="text-center text-primary bg-warning">B.Sc.IT</h1>
          <OptPlaced data={optplaced.BScIT} cols="col-md-4" type="bar" />
          <br />
          <h1 className="text-center text-primary bg-warning">BCA</h1>
          <OptPlaced data={optplaced.BCA} cols="col-md-4" type="bar" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
