import React from 'react';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      number2: '',
      operator: '',
      result: '',
      equal: false,
      displayStatus: ''
    };
  };

  round = (x) => (Number.parseFloat(x).toFixed(4));

  clearHandler = () => {
    this.setState({
      number: '',
      number2: '',
      operator: '',
      result: '',
      equal: false,
      displayStatus: ''
    });
  };

  decimalHandler = () => {
    if (!this.state.number.includes('.')) {
      this.setState((prevState) => ({ number: prevState.number.concat('.') }));
    };
  };

  numberHandler = (e) => {
    const number = e.target.value;
    if (this.state.number === '0' && number === '0') {
     return null;
    } else if (this.state.result && !this.state.number) {
      this.clearHandler();
    } else if (this.state.number.length >= 12) {
      this.setState(() => ({ displayStatus: 'sm-size' }));
    } else if (this.state.number.length >= 18) {
      this.setState(() => ({ displayStatus: 's-size' }));
    } if (this.state.number.length === 24) {
      return null;
    }
    
     this.setState((prevState) => ({ number: prevState.number.concat(number) }));
  }
    

  operatorHandler = (e) => {
    const operator = e.target.value;
    // if (!this.state.number && !this.state.result) {
    //   return null;
    // }
    if (!this.state.number2 && !this.state.equal) {
      this.setState((prevState) =>  ({ 
        number2: prevState.number,
        number: '',
        operator,
        displayStatus: ''
       }));
     } else if (this.state.equal) {
      this.setState((prevState) => ({ operator, number2: prevState.result, result: '', equal: false }))
    } else {
      this.setState({ operator })
    };
  };

  equalHandler = () => {
    const operator = this.state.operator;
    switch (operator) {
      case '÷':
        const num1 = (+this.round(+this.state.number2 / +this.state.number)).toString();
        this.setState(() => ({ result: num1, equal: true, number: '', number2: '' }));
        break;
      case '×':
        const num2 = (+this.round(+this.state.number2 * +this.state.number)).toString();
        this.setState(() => ({ result: num2, equal: true, number: '', number2: '' }));
        break;
      case '-':
        const num3 = (+this.round(+this.state.number2 - +this.state.number)).toString();
        this.setState(() => ({ result: num3, equal: true, number: '', number2: '' }));
        break;
      case '+':
        const num4 = (+this.round(+this.state.number2 + +this.state.number)).toString();
        this.setState(() => ({ result: num4, equal: true, number: '', number2: '' }));
        break;
      default:
        return null;
    };
  };

  percentageHandler = () => {
    this.setState(() => (
      { 
        number: ((this.state.number || this.state.result) / 100).toString(),
        result: '',
        equal: false
      }));
  };

  plusMinusHandler = () => {
    this.setState(() => ({ number: (this.state.number * -1).toString() }));
  };

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div id="display">
            <p 
              className={`display-number ${this.state.displayStatus}`}
            >
              {this.state.result? this.state.result : this.state.number}
            </p>
          </div>
          <div className="keypad">
            <button id="clear" onClick={this.clearHandler}>C</button>
            <button id="plus-minus" onClick={this.plusMinusHandler}>±</button>
            <button id="percentage" onClick={this.percentageHandler}>%</button>
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
