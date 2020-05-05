import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      cout: 0,
      status: 'Х начинает',
      defaultClass: "gameInfo"

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
        this.setState({ status: 'Победил: ' + s })
        this.setState({ defaultClass: 'gameWin' })
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) });
          this.setState({ cout: 0 });
          this.setState({ status: 'Х начинает' });
          this.setState({ defaultClass: 'gameInfo' })
        },
          1000)
      }
    }
  }
  gameReset = () => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ cout: 0 });
    this.setState({ status: 'Х начинает' });
    this.setState({ defaultClass: 'gameInfo' })
  }

  clickHandler = (e) => {
    let data = e.target.getAttribute('data');
    let currentSqueres = this.state.squares;
    if (currentSqueres[data] === null) {
      currentSqueres[data] = (this.state.cout % 2 === 0) ? 'X' : 'O';
      currentSqueres[data] === 'X' ? this.setState({ status: 'O ходит' }) : this.setState({ status: 'X ходит' });
      this.setState({ cout: this.state.cout + 1 });
      this.setState({ squares: currentSqueres });
      console.log(currentSqueres);
    } else {
      this.setState({ status: 'Так нельзя!' })
    }
    this.isWinner();
  }

  render() {

    return (<div >
      < div className="App" > {
        Object.keys(this.state.squares).map((block, index) => (< div className='ttt-grid'
          onClick={this.clickHandler} key={index} data={index}>
          {this.state.squares[block]}</div>)
        )}
      </div>
      <div className={this.state.defaultClass}>{this.state.status}</div>
      <button className='gameReset btn btn-primary' onClick={this.gameReset}>Сброс игры</button>
    </div>)
  }
}

export default App;