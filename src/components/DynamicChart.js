import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function DynamicChart(props) {
  const { program, year, columns, row, backgroundColor, hoverBackgroundColor, pdfUrl, pointStyle } =
    props;
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: columns,
      datasets: [
        {
          data: row,
          backgroundColor: backgroundColor,
          hoverBackgroundColor: hoverBackgroundColor,
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: pointStyle,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [program, year, columns, row, backgroundColor, hoverBackgroundColor, pdfUrl, pointStyle]);

  return (
    <div className="d-flex justify-content-center my-3">
      <div className="card" style={{ width: "80%" }}>
        <div className="card-header d-flex justify-content-center align-items-center">
          <div>
            <h4 className="mb-0"> Academic Year: {year}</h4>
          </div>
        </div>
        <div className="card-body d-flex align-items-center justify-content-center">
          <a rel="noreferrer" href={pdfUrl} target="_blank">
            <Chart
              height="250px"
              width="250px"
              type={props.type}
              data={chartData}
              options={chartOptions}
            />
          </a>
        </div>
        <div className="card-footer d-flex justify-content-center align-items-center">
          <div>
            <h4 className="mb-0">Program: {program}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
