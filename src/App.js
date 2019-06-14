import React from 'react';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      number2: '',
      operator: '',
      result: '',
      equal: false
    };
  };

  clearHandler = () => {
    this.setState({
      number: '',
      number2: '',
      operator: '',
      result: '',
      equal: false
    });
  };

  decimalHandler = () => {
    if (!this.state.number.includes('.')) {
      this.setState((prevState) => ({ number: prevState.number.concat('.') }));
    };
  };

  numberHandler = (e) => {
    const number = e.target.value;
    if (this.state.number === '0') {
     return null 
    } else if (this.state.result && !this.state.number) {
      this.clearHandler();
    }
    this.setState((prevState) => ({ number: prevState.number.concat(number) }));
  }

  operatorHandler = (e) => {
    const operator = e.target.value;
    if (!this.state.number2) {
      this.setState((prevState) =>  ({ 
        number2: prevState.number,
        number: '',
        operator
       }));
     } else if (this.state.equal) {
      this.setState((prevState) => ({ number: prevState.result, result: '', equal: false }))
    } 
    else {
      this.setState({ operator })
    };
  };

  equalHandler = () => {
    const operator = this.state.operator;
    switch (operator) {
      case '÷':
        this.setState((prevState) => ({ result: +prevState.number2 / +prevState.number, equal: true, number: '', number2: '' }));
        break;
      case '×':
        this.setState((prevState) => ({ result: +prevState.number2 * +prevState.number, equal: true, number: '', number2: '' }));
        break;
      case '-':
        this.setState((prevState) => ({ result: +prevState.number2 - +prevState.number, equal: true, number: '', number2: '' }));
        break;
      case '+':
        this.setState((prevState) => ({ result: +prevState.number2 + +prevState.number, equal: true, number: '', number2: '' }));
        break;
      default:
        return null;
    };
  };

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div id="display">{this.state.result? this.state.result : this.state.number}</div>
          <div className="keypad">
            <button id="clear" onClick={this.clearHandler}>C</button>
            <button id="plus-minus">±</button>
            <button id="percentage">%</button>
            <button id="divide" value="÷" onClick={this.operatorHandler}>÷</button>
            <button id="seven" value="7" onClick={this.numberHandler}>7</button>
            <button id="eight" value="8" onClick={this.numberHandler}>8</button>
            <button id="nine" value="9" onClick={this.numberHandler}>9</button>
            <button id="multiply" value="×" onClick={this.operatorHandler}>×</button>
            <button id="four" value="4" onClick={this.numberHandler}>4</button>
            <button id="five" value="5" onClick={this.numberHandler}>5</button>
            <button id="six" value="6" onClick={this.numberHandler}>6</button>
            <button id="subtract" value="-" onClick={this.operatorHandler}>-</button>
            <button id="one" value="1" onClick={this.numberHandler}>1</button>
            <button id="two" value="2" onClick={this.numberHandler}>2</button>
            <button id="three" value="3" onClick={this.numberHandler}>3</button>
            <button id="add" value="+" onClick={this.operatorHandler}>+</button>
            <button id="zero" value="0" onClick={this.numberHandler}>0</button>
            <button id="decimal" onClick={this.decimalHandler}>.</button>
            <button id="equals" onClick={this.equalHandler}>=</button>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
