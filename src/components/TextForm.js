import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Alert } from "react-bootstrap";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
    const [disabledBtns, setDisabledBtns] = useState(true);

    function handleAlert() {
        setTimeout(() => {
          setAlertMsg("");
        }, 3000);
      }
  
    function handleClick(event) {
      event.preventDefault();
      let newText = text.toUpperCase();
      setText(newText);
      setDisabledBtns(true);
      setAlertMsg(`Successfully ${event.target.innerText} `);
      handleAlert();
    }
  
    function handleClick2(event) {
      event.preventDefault();
      let newText = text.toLowerCase();
      setText(newText);
      setDisabledBtns(true);
      setAlertMsg(`Successfully ${event.target.innerText} `);
      handleAlert();
    }
  
    function handleClick3(event) {
      event.preventDefault();
      let newText = "";
      setText(newText);
      setDisabledBtns(false);
      setAlertMsg(`Successfully ${event.target.innerText} `);
      handleAlert();
    }
  
    function handleClick4(event) {
      event.preventDefault();
      setText(text.split(/[ ]+/).join(" "));
      setDisabledBtns(true);
      setAlertMsg(`Successfully ${event.target.innerText} `);
      handleAlert();
    }
  
    function handleClick5(event) {
      event.preventDefault();
      navigator.clipboard.writeText(text);
      setAlertMsg(`Successfully ${event.target.innerText} `);
      handleAlert();
    }
  
    function handleOnChange(event) {
      setText(event.target.value);
      setDisabledBtns(false);
      setAlertMsg("");
      handleAlert();
    }
  
    function handleBtnClick(event) {
        setAlertMsg(`Successfully ${event.target.innerText} `);
        handleAlert();
    }

    return (
        <>
          {alertMsg !== "" && (
            <Alert variant="success" onClose={() => setAlertMsg("")} dismissible>
              {alertMsg}
            </Alert>
          )}
    
          <div
            className="container"
            style={{ color: props.theme === "dark" ? "white" : "black" }}
          >
            <h1>{props.heading}</h1>
            <textarea
              className="form-control mb-3"
              id="myBox"
              rows="8"
              value={text}
              style={{
                backgroundColor: props.theme === "dark" ? "#212529" : "white",
                color: props.theme === "dark" ? "white" : "black",
              }}
              onChange={handleOnChange}
            />
            <Button
              variant="primary"
              className="mx-1 my-1"
              onClick={handleClick}
              disabled={disabledBtns}
              onClickCapture={handleBtnClick}
            >
              Converted to UpperCase
            </Button>
            <Button
              variant="primary"
              className="mx-1 my-1"
              onClick={handleClick2}
              disabled={disabledBtns}
              onClickCapture={handleBtnClick}
            >
              Converted to LowerCase
            </Button>
            <Button
              variant="primary"
              className="mx-1 my-1"
              onClick={handleClick4}
              disabled={disabledBtns}
              onClickCapture={handleBtnClick}
            >
              Removed Spaces
            </Button>
            <Button
              variant="primary"
              className="mx-1 my-1"
              onClick={handleClick5}
              disabled={disabledBtns}
              onClickCapture={handleBtnClick}
            >
              Copied Text
            </Button>

               <Button
          variant="primary"
          className="mx-1 my-1"
          onClick={handleClick3}
          disabled={text === ""}
          onClickCapture={handleBtnClick}
        >
          Cleared Text
        </Button>
            </div>
            <div className="container my-3" style={{color:props.theme === 'dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} Word and {text.length} Characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Your Text Above To Preview It Here"}</p>
            </div>
        </>
    )
}
