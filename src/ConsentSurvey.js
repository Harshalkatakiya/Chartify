import React, { useState, useEffect } from "react";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import DynamicChart from "./components/DynamicChart";

function ConsentSurvey() {
  const [sampleChartData, setSampleChartData] = useState([]);

  useEffect(() => {
    setSampleChartData([
      {
        program: "B.C.A.",
        year: "2020-2021",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [34, 33, 12, 21],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2020-2021",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [35, 28, 18, 19],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2020-2021",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [2, 10, 2, 1],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.C.A.",
        year: "2021-2022",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [61,43,22,20],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2021-2022",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [41,22,14,20],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2021-2022",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [0,22,7,5],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.C.A.",
        year: "2022-2023",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [19,24,18,3],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "B.Sc.I.T.",
        year: "2022-2023",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [21,19,7,0],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      },
      {
        program: "M.Sc.I.T.",
        year: "2022-2023",
        columns: ["Higher Studies", "Job", "Entrepreneur/Businessman", "Other"],
        row: [0,7,0,0],
        backgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        hoverBackgroundColor: ["#00cc99", "#C55858", "#3883F5", "#ffff00"],
        pdfUrl:
          "https://www.meity.gov.in/writereaddata/files/National-Data-Governance-Framework-Policy.pdf",
      }
    ]);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center me-0">          
          <PrimeReactProvider>
            {sampleChartData.map((data, index) => {
              return (
                <div key={index} className="my-2 col-md-4 mx-0">
                  <DynamicChart
                    columns={data.columns}
                    row={data.row}
                    backgroundColor={data.backgroundColor}
                    hoverBackgroundColor={data.hoverBackgroundColor}
                    pointStyle={true}
                    year={data.year}
                    pdfUrl={data.pdfUrl}
                    type="pie"
                    program={data.program}
                  />
                </div>
              );
            })}
          </PrimeReactProvider>
        </div>
      </div>
    </>
  );
}

export default ConsentSurvey;
