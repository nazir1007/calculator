//------ importing CSS file from Styles folder ------//
import "../Styles/App.css";

//----- importing Hookes  ---- //
import { useState, useEffect } from "react";

// ------  importing  NumberFormat for number formating ------ //
import NumberFormat from "react-number-format";

function App() {
  //----  define useState hookes -----//
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  //-----  function for inputNum   -----//
  const inputNum = (e) => {
    if (current.includes(".") && e.target.innerText === ".0") return;
    if (total) {
      setPrevious("");
    }
    current
      ? setCurrent((pre) => pre + e.target.innerText)
      : setCurrent(e.target.innerText);
    setTotal(false);
  };

  //----- useEffect hook  ------//
  useEffect(() => {
    setInput(current);
  }, [current]);

  useEffect(() => {
    setInput(0);
  }, []);

  //------ operatorType function for using operator  ------//
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (current === "") return;
    if (previous !== "") {
      equals();
    } else {
      setPrevious(current);
      setCurrent("");
    }
  };

  //----- equals function for equal operator ------//
  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }

    //------- define a result variable for result ---------//
    let result;

    //---------  switch case for performing the operators operations ------- //
    switch (operator) {
      case "+":
        result = String(parseFloat(previous) + parseFloat(current));
        console.log(result);
        break;
      case "x":
        result = String(parseFloat(previous) * parseFloat(current));
        break;
      case "-":
        result = String(parseFloat(previous) - parseFloat(current));
        break;
      case "÷":
        result = String(parseFloat(previous) / parseFloat(current));
        break;
      default:
        return;
    }
    setInput("");
    setPrevious(result);
    setCurrent("");
  };

  // minusPlus function for  performing minusPlus operations //
  const minusPlus = () => {
    if (current.charAt(0 === "-")) {
      setCurrent(current.substring(1));
    } else {
      setCurrent("-" + current);
    }
  };

  //----- percent function for finding  percent ------//
  const percent = () => {
    previous
      ? setCurrent(String((parseFloat(current) / 100) * previous))
      : setCurrent(String(parseFloat(current) / 100));
  };

  //----- clear function for perfoming clear button operation ----- //
  const clear = () => {
    setPrevious("");
    setCurrent("");
    setInput("0");
  };

  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="screen">
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={previous}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className="btn light-grey" onClick={clear}>
          C
        </div>
        <div className="btn light-grey" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn light-grey" onClick={percent}>
          %
        </div>
        <div className="btn orange" onClick={operatorType}>
          ÷
        </div>
        <div className="btn" onClick={inputNum}>
          7
        </div>
        <div className="btn" onClick={inputNum}>
          8
        </div>
        <div className="btn" onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          x
        </div>

        <div className="btn" onClick={inputNum}>
          4
        </div>
        <div className="btn" onClick={inputNum}>
          5
        </div>
        <div className="btn" onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn" onClick={inputNum}>
          1
        </div>
        <div className="btn" onClick={inputNum}>
          2
        </div>
        <div className="btn" onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn" onClick={inputNum}>
          00
        </div>
        <div className="btn" onClick={inputNum}>
          0
        </div>
        <div className="btn" onClick={inputNum}>
          .
        </div>
        <div className="btn orange" onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
