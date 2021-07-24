import React from "react";
import axios from "axios";
import './App.css'
import Heart from './heart.png'

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
    description(event, beer){
      console.log(beer.description)
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
                  <h2>Click on the beer to log a descprition</h2>
                  <h3>Click the heart to add it to your like list</h3>
                  {this.state.beers.map(beer => {
                    return(                     
                    <li key={beer.id} onClick={event => this.description(event, beer)}>
                      <span id="beer">{beer.name}</span>
                      <img id="heart" alt="heart" src={Heart} onClick={event => this.addToLikeList(event, beer.name)}></img><br></br>          
                  </li>)})}
                </ul>
            </div>
        );
    }
}
export default App;
