import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      cout: 0

    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  }
  isWinner = () => {
    let s = (this.state.cout % 2 === 0) ? 'X' : 'O';
    console.log(s)
    for (let item in this.winnerLine) {
      console.log(this.winnerLine.item);
      let line = this.winnerLine[item];
      if (this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
        alert(s + ' Win!!');
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ cout: 0 });
        },
          3000)
      }
    }
  }

  clickHandler = (e) => {
    let data = e.target.getAttribute('data');
    let currentSqueres = this.state.squares;
    if (currentSqueres[data] === null) {
      currentSqueres[data] = (this.state.cout % 2 === 0) ? 'X' : 'O';
      this.setState({ cout: this.state.cout + 1 });
      this.setState({ squares: currentSqueres });
      console.log(currentSqueres);
    }
    else { alert('Not!!!!!'); }
    this.isWinner();
  }

  render() {

    return (< div className="App" > {
      Object.keys(this.state.squares).map((block, index) => (< div className='ttt-grid'
        onClick={this.clickHandler} key={index} data={index}>
        {this.state.squares[block]}</div>)
      )}
    </div>)
  }
}

export default App;