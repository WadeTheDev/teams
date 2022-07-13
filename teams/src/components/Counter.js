import React from "react"
import teams from '../teams.json'
import '../index.css';


 
class Counter extends React.Component {
  render() {
    return (
        <div className="counter">
        <button onClick={this.props.substract}>-</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.plus}>+</button>
        </div>
        )
  }
}

export default Counter