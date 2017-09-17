import React from 'react';
import Board from '../Board';
import s from './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      winner: '',
      tie: ''
    };
  }

  render() {
    return (
      <div data-hook="app" className={s.root}>
        <Board onGameOver={({winner}) => this.setState({winner})} 
                onTieGame={() => this.setState({tie: 'tie'})}/>
        {this.state.winner && <div data-hook="winner-message">{`${this.state.winner} wins!`}</div>}
        {this.state.tie && <div data-hook="tie-message">{'This Is a Tie!!'}</div>}
      </div>
    );
  }
}

export default App;
