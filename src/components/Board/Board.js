import React from 'react';
import PropTypes from 'prop-types';

export const getGameStatus = board => {
  const getSymbolFromBoard = (x, y) => {return board[x][y]}
  const checkForWinnerInRow = player => board.some(row => row.every(cell => cell === player));
  // const checkForWinnerInColumn = player => board.every(row => row[0] === player);
  // const checkForWinnerInColumnRon = player => board.some(row, value, index => board.map(row => row[index] === player));
  const checkForWinnerInColumnTomer = player => [0,1,2].some(index => board.map(row => row[index]).every(cell => cell === player));
  const checkForWinnerInDiagnel = function(player) {
    return ([0,1,2].every(index => getSymbolFromBoard(index,index) === player))
  }
  
  if (checkForWinnerInRow('X')) {
    return 'X';
  } else if (checkForWinnerInRow('O')) {
    return 'O';
  } else if (checkForWinnerInColumnTomer('X')) {
      return 'X';
    } else if (checkForWinnerInColumnTomer('O')) {
      return 'O';
    } else if (checkForWinnerInDiagnel('X'))
        return 'X';
      else if (checkForWinnerInDiagnel('O')){
        return 'O';
      }
};

class Board extends React.Component {
  constructor() {
    super();
    this.state = {board: [['', '', ''], ['', '', ''], ['', '', '']], currentPlayer: 'X'};
  }
  
  isBoardFull = () => this.state.board.every(row => row.every(cell => cell != ''));
  
  cellClicked(rowI, cellI) {
    if (this.state.board[rowI][cellI] === '')
    {
      const board = this.state.board.map((row, rowIndex) =>
      rowIndex !== rowI ? row : row.map((cell, cellIndex) => cellI !== cellIndex ? cell : this.state.currentPlayer));

    if (getGameStatus(board)) {
      this.props.onGameOver({winner: this.state.currentPlayer});
    }

    if (this.isBoardFull()) {
      this.props.onTieGame();
    }

    const nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({board, currentPlayer: nextPlayer});
    }
  }

  render() {
    return (<div>
      <table>
        <tbody>
          {this.state.board.map((row, rowIndex) =>
            <tr key={rowIndex}>{row.map((cell, cellIndex) =>
              <td data-hook="cell" onClick={() => this.cellClicked(rowIndex, cellIndex)} key={cellIndex}>{cell}</td>)}</tr>)}
        </tbody>
      </table>
    </div>);
  }
}

Board.propTypes = {
  onGameOver: PropTypes.func.isRequired
};

export default Board;
