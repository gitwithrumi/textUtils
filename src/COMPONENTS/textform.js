import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    props.showAlert("Converted to UPPERCASE!", "Success");
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    props.showAlert("Converted to lowercase!", "Success");
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "Success");
  };
  const handleCut = () => {
    navigator.clipboard.writeText(text);
    let newText = "";
    setText(newText)
  };
  const handleClearClick = () => {
    let newText = "";
    props.showAlert("Textbox has been cleared!", "Success");
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#13466e"
                  : "white" && props.mode === "danger"
                  ? "orange"
                  : "white" && props.mode === "success"
                  ? "lightgreen"
                  : "white",
              color:
                props.mode === "dark"
                  ? "white"
                  : "black" && props.mode === "danger"
                  ? "white"
                  : "black" && props.mode === "success"
                  ? "black"
                  : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter your text here "
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary  my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary ms-2  my-1" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-success ms-2  my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-warning ms-2  my-1" onClick={handleCut}>
          Cut Text
        </button>
        <button disabled={text.length===0} className="btn btn-danger ms-2  my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {" "}
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters{" "}
          </b>
        </p>
        <p>
          <b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</b>{" "}
          <i>(for average reader)</i>
        </p>
        <div
          className={`card text-bg-${
            props.mode === "light"
              ? "light"
              : "dark" && props.mode === "danger"
              ? "danger"
              : "dark" && props.mode === "success"
              ? "success"
              : "dark"
          } border-dark`}
        >
          <h2 className="card-header">Preview</h2>
          <div className="card-body">
            <p className="card-text">
              <b>
                <i>
                  {text.length > 0
                    ? text
                    : "Enter something in the textbox above to preview here"}
                </i>
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
