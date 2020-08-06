import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Shape = ({ myNumbers }) => {
  /*console.log(props);
  const savedNumbers = JSON.parse(localStorage.getItem("myNumbers")) || [
  {
    text: "Feature specification",
    numValue: 0
  },
  {
    text: "Product delivery",
    numValue: 0
  },
  {
    text: "Quality assurance",
    numValue: 0
  },
  {
    text: "Fluency with data",
    numValue: 0
  },
  {
    text: "Voice of the customer",
    numValue: 0
  },
  {
    text: "User experience design",
    numValue: 0
  },
  {
    text: "Business outcome ownership",
    numValue: 0
  },
  {
    text: "Product vision & roadmapping",
    numValue: 0
  },
  {
    text: "Strategic impact",
    numValue: 0
  },
  {
    text: "Stakeholder management",
    numValue: 0
  },
  {
    text: "Team leadership",
    numValue: 0
  },
  {
    text: "Managing up",
    numValue: 0
  }
];*/
  useEffect(() => {
    setState({
      options: {
        chart: {
          id: "your-shape",
        },
        xaxis: {
          categories: myNumbers.map(({ text }) => text),
        },
        plotOptions: {
        radar: {
          offsetX: 10,
          offsetY: 50,
        },
      },
      },
      series: [
        {
          name: "shape",
          data: myNumbers.map(({ numValue }) => numValue),
        },
      ],
    });
  }, [myNumbers]);
  const [state, setState] = useState({
    options: {
      chart: {
        id: "your-shape",
      },
      xaxis: {
        categories: myNumbers.map(({ text }) => text),
      },
      plotOptions: {
        radar: {
          offsetX: 10,
          offsetY: 50,
        },
      },
    },
    series: [
      {
        name: "shape",
        data: myNumbers.map(({ numValue }) => numValue),
      },
    ],
  });

  return (
    <div className="Shape">
      <div className="Row">
        <div className="chart">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="800"
            height="500"
            //startAngle="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Shape;
