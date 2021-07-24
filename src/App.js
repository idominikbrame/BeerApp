import React from "react";
import axios from "axios";
import './App.css'
import Heart from './heart.svg'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        beers: [],
        likes:[]
      };
    }
    addToLikeList(event, beer){
      this.setState({
        likes:[...this.state.likes, {beer}]
      })
      console.log(this.state.likes)
    }
    componentDidMount() {
        axios.get("https://api.punkapi.com/v2/beers").then((res) => {
            const beers = res.data;
            this.setState({beers})
        });
    }

    render() {
        return (
            <div className="App">
                <ul>
                  {this.state.beers.map(beer => {
                    return(                     
                    <li key={beer.id}>
                      <br></br>{beer.name}
                      <img id="heart" alt="heart" src={Heart} onClick={event => this.addToLikeList(event, beer.name)}></img>           
                  </li>)})}
                </ul>
            </div>
        );
    }
}
export default App;
