import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Shape = ({ myNumbers }) => {
  useEffect(() => {
    //const s = box.offsetWidth;
    setState({
      options: {
        chart: {
          id: "your-shape",
        },
        xaxis: {
          categories: myNumbers.map(({ text }) => text),

        },
        fill: {
          colors: "#3f51b5",
          opacity: .7,
        },
        stroke: {
          show: true,
          colors: "#3f51b5",
          width: 2,
        },
        markers: {
          colors: "#3f51b5"
        },
        plotOptions: {
        radar: {
          size: 180,
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
      // plotOptions: {
      //   radar: {
      //     //offsetX: 10,
      //     //offsetY: 50,
      //   },
      // },
    },
    series: [
      {
        name: "shape",
        data: myNumbers.map(({ numValue }) => numValue),
      },
    ],
  });

  //const w = window.innerWidth/3;
  //const h = window.innerHeight/4;

  return (
    <div className="Radar">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width= "100%"

            //height= {w}
            //startAngle="0"
          />
    </div>
  );
};

export default Shape;
