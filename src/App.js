import "./App.css";
import About from "./COMPONENTS/About";
import Alert from "./COMPONENTS/Alert";
import Navbar from "./COMPONENTS/Navbar";
import TextForm from "./COMPONENTS/textform";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "7px",
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      //document.title = "TextUtils - Dark";
      showAlert("Dark Mode has been enabled!", "Success");
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
        borderRadius: "7px",
      });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
     // document.title = "TextUtils - Light";
      showAlert("Light Mode has been enabled!", "Success");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "7px",
      });
    }
  };

  const redMode = () => {
    if ((mode === "light", "dark")) {
      setMode("danger");
      document.body.style.backgroundColor = "red";
    //  document.title = "TextUtils - Red";
      showAlert("Red Mode has been enabled!", "Success");
      setMyStyle({
        color: "white",
        backgroundColor: "orange",
        border: "1px solid white",
        borderRadius: "7px",
      });
    }
  };

  const greenMode = () => {
    if ((mode === "light", "dark")) {
      setMode("success");
      document.body.style.backgroundColor = "green";
    //  document.title = "TextUtils - Green" ;
      showAlert("Green Mode has been enabled!", "Success");
      setMyStyle({
        color: "white",
        backgroundColor: "lightgreen",
        border: "1px solid white",
        borderRadius: "7px",
      });
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        redMode={redMode}
        greenMode={greenMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About myStyle={myStyle} />
          </Route>
          <Route exact path="/">
          <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
      />
          </Route>
        </Switch>
      </div>
      </Router>
      
    </>
  );
}

export default App;
