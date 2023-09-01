import React, { useState, useEffect } from "react";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import DynamicChart from "./components/DynamicChart";

function OptPlaced(props) {
  const [sampleChartData, setSampleChartData] = useState([]);

  useEffect(() => {
    setSampleChartData(props.data);
  }, []);

  return (
    <>
          <PrimeReactProvider>
            {sampleChartData.map((data, index) => {
              return (
                <div key={index} className={`my-2 mx-0 ${props.cols}`}>
                  <DynamicChart
                    columns={data.columns}
                    row={data.row}
                    backgroundColor={data.backgroundColor}
                    hoverBackgroundColor={data.hoverBackgroundColor}
                    pointStyle={true}
                    year={data.year}
                    type={props.type}
                    pdfUrl={data.pdfUrl}
                    program={data.program}
                  />
                </div>
              );
            })}
          </PrimeReactProvider>
    </>
  );
}

export default OptPlaced;
