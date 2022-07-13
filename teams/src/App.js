import React from "react";
import logo from './logo.svg';
import List from './components/List';
import Counter from './components/Counter';
import teams from './teams.json'
import './App.css';
import './index.css';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
        count: 10,
    }
  
  }

  handleClickMinus = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  handleClickPlus = () => {
    if (this.state.count < teams.length) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }
  render() {
    return (
      <div>
        <h1 className="title">Teams</h1>
        <Counter plus={this.handleClickPlus} 
        count={this.state.count}
        substract={this.handleClickMinus}/>
        <div className="big-container">
        {
          teams
          .filter((team, i) => {return i < this.state.count})
          .map((team) => {
          return  <List 
            name={team.shortName}
            image={team.crestUrl}
            stade={team.venue}
            address={team.address}
            email={team.email}
            tel={team.phone}
            date={team.founded}
            />
          })
        }
        </div>
      </div>
    );
  }
}


export default App;
