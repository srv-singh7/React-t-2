import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      currentInput: "",
      previousInput: "",
      operator: ""
    };
  }

  handleNumberClick = (num) => {
    const { display, currentInput, operator } = this.state;

    if (display === "0" || operator === "=") {
      this.setState({
        display: num,
        currentInput: num,
        operator: ""
      });
    } else {
      this.setState({
        display: currentInput + num,
        currentInput: currentInput + num
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { currentInput, previousInput } = this.state;

    if (currentInput !== "") {
      this.calculateResult();
      this.setState({
        operator,
        previousInput: currentInput,
        currentInput: ""
      });
    } else if (previousInput !== "") {
      this.setState({
        operator
      });
    }
  };

  calculateResult = () => {
    const { currentInput, previousInput, operator } = this.state;
    let result = "";

    switch (operator) {
      case "+":
        result = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case "-":
        result = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case "*":
        result = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case "/":
        result = parseFloat(previousInput) / parseFloat(currentInput);
        break;
      default:
        result = currentInput;
    }

    this.setState({
      display: result.toString(),
      currentInput: result.toString(),
      operator: "=",
      operands: []
    });
  };

  handleClearClick = () => {
    this.setState({
      display: "0",
      currentInput: "",
      previousInput: "",
      operator: ""
    });
  };

  render() {
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="display">{this.state.display}</div>
          <div className="current-operand"></div>
        </div>
        <button onClick={() => this.handleClearClick()} className="span-three">
          {" "}
          AC{" "}
        </button>
        <button onClick={() => this.handleOperatorClick("/")}> ÷ </button>
        <button onClick={() => this.handleNumberClick("1")}> 1 </button>
        <button onClick={() => this.handleNumberClick("2")}> 2 </button>
        <button onClick={() => this.handleNumberClick("3")}> 3 </button>
        <button onClick={() => this.handleOperatorClick("*")}> * </button>
        <button onClick={() => this.handleNumberClick("4")}> 4 </button>
        <button onClick={() => this.handleNumberClick("5")}> 5 </button>
        <button onClick={() => this.handleNumberClick("6")}> 6 </button>
        <button onClick={() => this.handleOperatorClick("+")}> + </button>
        <button onClick={() => this.handleNumberClick("7")}> 7 </button>
        <button onClick={() => this.handleNumberClick("8")}> 8 </button>
        <button onClick={() => this.handleNumberClick("9")}> 9 </button>
        <button onClick={() => this.handleOperatorClick("-")}> - </button>
        <button onClick={() => this.handleNumberClick(".")}> . </button>
        <button onClick={() => this.handleNumberClick("0")}> 0 </button>
        <button
          onClick={() => this.handleOperatorClick("=")}
          className="span-two"
        >
          {" "}
          ={" "}
        </button>
      </div>
    );
  }
}
export default Calculator;
