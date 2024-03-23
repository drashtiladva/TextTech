import React, { useState } from "react";
import Fnr from "./Fnr";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    var newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("lowercase was clicked");
    var newText = text.toLowerCase();
    setText(newText);
  };
  const handleclClick = () => {
    // console.log("clear was clicked");
    var newText = "";
    let find = (document.getElementById("find").value = "");
    let replace = (document.getElementById("replace").value = "");

    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handlefnr = () => {
    let find = document.getElementById("find").value;
    let replace = document.getElementById("replace").value;
    let newText = text.replace(find, replace);
    setText(newText);
  };
  

  const [text, setText] = useState("");
  //text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#495057" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Handle extra spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-2 bg-primary"
          disabled={text.length === 0}
          onClick={handleclClick}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2 my-2 bg-primary"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy
        </button>
        
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black",
        display: "flex",
     }}
       
      >
        <div>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes it take to read
        </p>
        </div>
        
              
              

        </div>
        
        
        <div className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "30%" }}>
            <h2>Find and Replace</h2>

            <div className="form-floating mb-3">
              <input
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "dark" ? "#495057" : "white",
                }}
                type="text"
                className="form-control"
                id="find"
                placeholder="name@example.com"
              />
              <label
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                for="find"
              >
                Find
              </label>
            </div>
            <div className="form-floating">
              <input
                style={{
                  color: props.mode === "dark" ? "white" : "black",
                  backgroundColor: props.mode === "dark" ? "#495057" : "white",
                }}
                type="text"
                className="form-control"
                id="replace"
                placeholder="Password"
              />
              <label
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                for="replace"
              >
                Replace
              </label>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-primary my-3"
                onClick={handlefnr}
                disabled={text.length === 0}
              >
                ReplaceAll
              </button>
            </div>
          </div>
          <div style={{ width: "10%" }}></div>
          <div style={{ width: "60%" }}>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
