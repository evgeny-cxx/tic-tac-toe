import React from 'react';
import './App.css';

import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      cout: 0,
      flag: false,
      status: 'Х начинает',
      defaultClass: "gameInfo"

    }
    /**
     * массив выйгрышных линий 
     */
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

  /**
   * метод определения победы или ничьей
   */
  isWinner = () => {
    let s = (this.state.cout % 2 === 0) ? 'X' : 'O';

    for (let item in this.winnerLine) {
      let line = this.winnerLine[item];
      if (this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
        this.setState({ flag: true })
        this.setState({ status: 'Победил: ' + s })
        this.setState({ defaultClass: 'gameWin' })
        setTimeout(this.gameReset, 3000);

      }
      else
        if (this.state.cout === 8 && this.state.flag === false) {
          this.setState({ status: 'Ничья!' });
          this.setState({ defaultClass: 'gameOver' })
          this.setState({ flag: true })
          setTimeout(this.gameReset, 3000);
        }
    }

  }

  /**
   * сброс игры
   */
  gameReset = () => {
    this.setState({ squares: Array(9).fill(null) });
    this.setState({ cout: 0 });
    this.setState({ flag: false });
    this.setState({ status: 'Х начинает' });
    this.setState({ defaultClass: 'gameInfo' })
  }

  /**
   * состояние ячеек при клике
  */
  clickHandler = (e) => {

    let data = e.target.getAttribute('data');
    let currentSqueres = this.state.squares;

    if (currentSqueres[data] === null && this.state.flag === false) {
      if (this.state.cout % 2 === 0) {
        currentSqueres[data] = 'X';
        this.setState({ status: 'O ходит' })
      } else {
        currentSqueres[data] = 'O';
        this.setState({ status: 'X ходит' })
      }
      this.setState({ cout: this.state.cout + 1 });
      this.setState({ squares: currentSqueres });
    } else {
      this.setState({ status: 'Так нельзя!' })
    }
    this.isWinner();
  }

  render() {
    let title = this.props.title;
    let contacts = this.props.contacts;

    return (
      <div className='App App-header container '>
        <h1 className='gameName'>{this.props.title}</h1>
        < div className="Game" > {
          Object.keys(this.state.squares).map((block, index) => (< div className='block'
            onClick={this.clickHandler} key={index} data={index}>
            {this.state.squares[block]}</div>)
          )}
        </div>
        <div className={this.state.defaultClass}>{this.state.status}</div>
        <button className='gameReset button-primary button-round' onClick={this.gameReset}>Сброс игры</button>
        <Footer title={title}
          contacts={contacts}
        />
      </div>)
  }
}

export default App;