import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Skills from "./skills.js";
//import Shape from './shape.js'
//import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  //const [myNums, setNums] = useState(savedNumbers);

  return (
    <div className="App">
      <main>
        <section>
          <div>
            <h1>Define your shape</h1>
            <p>
              <a href="https://www.ravi-mehta.com/product-manager-roles/">
                {" "}
                Ravi Mehta
              </a>{" "}
              defines the product roles as a lorem ipsum dolor sit amet
            </p>
          </div>
          <h3>Rate your skills</h3>
          <div className="SkillsAndShape">
            <Skills />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
