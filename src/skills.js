import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import Shape from "./shape";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

/* **************TO DO LIST******************/
/* 1.[X] Set value from slider
/* 2.[/] Save values in localstorage
/* 3.[] Styling fixes
*/

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      markLabel:{
      color: "#c5c6c7"
      },
      markLabelActive: {
        color: "markLabel"
      },
      root: {
        width:'20rem'
      }
    }
}
});

const marks = [
  {
    value: 0,
    label: "None",
  },
  {
    value: 1,
    label: "Need focus",
  },
  {
    value: 2,
    label: "On track",
  },
  {
    value: 3,
    label: "Outperform",
  },
];

function Skills() {
  const savedNumbers = JSON.parse(localStorage.getItem("myNumbers")) || [
    {
      text: ["Feature ", "specification"],
      numValue: 0,
    },
    {
      text: ["Product ", "delivery"],
      numValue: 0,
    },
    {
      text: ["Quality ", "assurance"],
      numValue: 0,
    },
    {
      text: ["Fluency ", "with ", "data"],
      numValue: 0,
    },
    {
      text: ["Voice of the ", "customer"],
      numValue: 0,
    },
    {
      text: ["User ", "experience ", "design"],
      numValue: 0,
    },
    {
      text: ["Business ", "outcome ", "ownership"],
      numValue: 0,
    },
    {
      text: ["Product ", "vision" ," & roadmapping"],
      numValue: 0,
    },
    {
      text: ["Strategic ", "impact"],
      numValue: 0,
    },
    {
      text: ["Stakeholder ",  "management"],
      numValue: 0, 
    },
    {
      text: ["Team ", "leadership"],
      numValue: 0,
    },
    {
      text: "Managing up",
      numValue: 0,
    },
  ];
  const [myNumbers, setNumbers] = useState(savedNumbers);
  useEffect(() => {
    localStorage.setItem("myNumbers", JSON.stringify(myNumbers));
  }, [myNumbers]);

  //const [currentNumber, setCurrentNumber] = useState("");

  /*const handleChange = (event, newValue) => {
  //const myNumbersValues = [...myNumbers];
  //const myCurrentNumber = [...currentNumber]
  setCurrentNumber(newValue);
  //setNumbers(myNumbersValues);
  if ({currentNumber} == ""){setCurrentNumber(newValue);}
  console.log({currentNumber});
  console.log(event.target);
}*/

  function valueText(value, index) {
    const myNumbersValues = [...myNumbers];
    const label = myNumbersValues[index].text;
    return `${label}`;
  }

  function handleChange(index, event, value) {
    const myNumbersValues = [...myNumbers];
    myNumbersValues[index].numValue = value;
    setNumbers(myNumbersValues);
    //console.log(myNumbersValues[index]);
  }

  return (
    <>
      <div className="text-and-slider">
        {myNumbers.map((text, index) => (
          <div className="Skills" key={index}>
            <div className="text">
              <p>{text.text}</p>
            </div>
            <div className="Slider">
              <ThemeProvider theme={muiTheme}>
              <Slider
                value={text.numValue}
                getAriaValueText={(value) => valueText(index, value)}
                aria-labelledby="experience-selector"
                step={1}
                marks={marks}
                min={0}
                max={3}
                valueLabelDisplay="auto"
                onChangeCommitted={(e, value) => handleChange(index, e, value)}
              />
              </ThemeProvider>
            </div>
          </div>
        ))}
      </div>
      <div className="Shape">
        <Shape myNumbers={myNumbers} />
      </div>
    </>
  );
}

export default Skills;
