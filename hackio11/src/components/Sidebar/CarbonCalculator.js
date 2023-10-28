import React, { Component } from 'react';
import './Carbon.css';

class CarbonCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0, // Set your default values
      value2: 0,
      result: null,
    };
  }

  handleSubmit = () => {
    const data = {
      value1: this.state.value1,
      value2: this.state.value2,
    };

    fetch('/calculateEmm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ result: data.result });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div>
        <div>
          <label>Value 1 (kWh):</label>
          <input
            type="number"
            value={this.state.value1}
            onChange={(e) => this.setState({ value1: e.target.value })}
          />
        </div>
        <div>
          <label>Value 2 (Waste):</label>
          <input
            type="number"
            value={this.state.value2}
            onChange={(e) => this.setState({ value2: e.target.value })}
          />
        </div>
        <button onClick={this.handleSubmit}>Calculate Emission</button>
        {this.state.result !== null && (
          <div>
            <p>Result: {this.state.result}</p>
          </div>
        )}
      </div>
    );
  }
}

export default CarbonCalculator;
