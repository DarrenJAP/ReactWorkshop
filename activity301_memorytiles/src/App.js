
import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
      currentLevel: 1,
      tileNumbers: [
        [1, 5, 3, 7, 2, 6, 6, 9, 0], // level 1
        [0, 1, 9, 3, 5, 7, 3, 2, 6], // level 2
        [5, 8, 2, 9, 1, 0, 2, 4, 3]  // level 3
      ],
      answerKeys: [6, 3, 2],
      showTiles: [
        false, false, false,
        false, false, false,
        false, false, false
      ],
      clickedNumbersRight: 0,
      levelInput: 1
    }

    this.newGameOnClick = this.newGameOnClick.bind(this);
    this.levelInputOnChange = this.levelInputOnChange.bind(this);
  }

  displayClicks() {
    return (
      <div className="clicksNum">
        <h3>Clicks: {this.state.clicks}</h3>
      </div>
    )
  }

  newGameOnClick(levelIndex) {
    this.setState({
      clicks: 0,
      currentLevel: levelIndex+1,
      clickedNumbersRight: 0,
      showTiles: [
        true, true, true,
        true, true, true,
        true, true, true
      ]
    })

    setTimeout(() => this.setState({
      showTiles: [
        false, false, false,
        false, false, false,
        false, false, false
      ]
    }), 1000);
  }

  tileOnClick(tileIndex) {
    if (this.state.clicks < 8) {
      let newShowTiles = this.state.showTiles;
      newShowTiles[tileIndex] = !newShowTiles[tileIndex];

      if (this.state.tileNumbers[this.state.currentLevel-1][tileIndex] == this.state.answerKeys[this.state.currentLevel-1]) {
        this.setState({
          clickedNumbersRight: this.state.clickedNumbersRight + 1
        })
      }

      this.setState({
        showTiles: newShowTiles,
        clicks: this.state.clicks + 1
      });
    } 
    setTimeout(() => this.checkIfWin(), 500);
  }

  checkIfWin() {
    if (this.state.clickedNumbersRight == 2) {
      alert("YOU WIN");
    } else if (this.state.clicks > 6) {
      alert("YOU FAILED!");
    }
  }

  displayTile(levelIndex, tileIndex) {
    let tileNumber = this.state.tileNumbers[levelIndex][tileIndex];
    return (
      <div className="Tile" key={`${levelIndex}${tileIndex}`}
      onClick={() => this.tileOnClick(tileIndex)}>
        {this.state.showTiles[tileIndex] ? `${tileNumber}` : "Flip"}
      </div>
    )
  }

  renderTiles() {
    return (
      <div className="parentTile">
        {
          this.state.tileNumbers[this.state.currentLevel-1].map((individualTileNumber, tileIndex) => this.displayTile(this.state.currentLevel-1, tileIndex))
        }
      </div>
    )
  }

  levelInputOnChange(event) {
    this.setState({
      levelInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        {this.displayClicks()}
        <p>Level: </p><textarea onChange={this.levelInputOnChange} className="levelInput">1</textarea>
        <br/>
        <button className="newGameButton" onClick={() => this.newGameOnClick(this.state.levelInput-1)}>New Game</button>
        {this.renderTiles()}
      </div>
    )
  }
}

export default App;
