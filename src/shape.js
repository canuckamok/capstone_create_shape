import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Shape = ({ myNumbers }) => {
  useEffect(() => {
    const colors = ["#3f51b5"];
    const labelColor = ["#c5c6c7"];
    setState({
      options: {
        chart: {
          id: "your-shape",
        },
        xaxis: {
          categories: myNumbers.map(({ text }) => text),
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },

        },
        fill: {
          colors: colors,
          opacity: .7,
        },
        stroke: {
          show: true,
          colors: colors,
          width: 2,
          curve: "smooth",
        },
        markers: {
          colors: colors,
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
        labels: {
            style: {
              //colors: labelColor,
            },
          },
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
