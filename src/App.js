import React, { Component } from "react";
import FantasyCard from "./components/fantasyCard";
import Nav from "./components/nav";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import fantasy from "./fantasy.json";
import "./App.css";

function shuffleDragons(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    fantasy,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    } this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Ouch! Need some Aloe?",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledDragon = shuffleDragons(fantasy);
    this.setState({ fantasy: shuffledDragon });
  };



  render() {
    return (
      <Wrapper>
         <Nav
          title="Fantasy Memory"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Title>
        Be Careful or get Burned
        </Title>
            {this.state.fantasy.map(dragon=> (
                <FantasyCard
                  key={dragon.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={dragon.id}
                  image={dragon.image}
                />              
            ))}    
      </Wrapper>
    );
  }
}

export default App;