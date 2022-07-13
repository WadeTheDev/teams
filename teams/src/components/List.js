import React from "react"
import teams from '../teams.json'
import '../index.css';


 
class List extends React.Component {
  render() {
    return (
        <div className="container-teams">
           <h2>{this.props.name}</h2>
           <img src={this.props.image}/>
           <h3>{this.props.stade}</h3>
           <h3>{this.props.address}</h3>
           <h3>{this.props.email}</h3>
           <h3>{this.props.tel}</h3>
           <h3>{this.props.date}</h3>
        </div>
        )
  }
}

export default List