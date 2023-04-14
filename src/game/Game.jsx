import React from 'react';
import Layout from './Layout/Layout';
import Player from './Player';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players:[new Player("red") , new Player("yellow")],
      board: "",
      turn: 0
    };
    this.play = this.play.bind(this);
  }

  play(id) {
    for (let x = 6; x >= 0; x--) {
      let columns = document.getElementById("x-"+x);
      for (let y = 5; y >= 0; y--) {
        let column = columns.childNodes[y];
        if (column.id == "y-"+id && column.style.backgroundColor == "") {
          column.style.backgroundColor = this.state.players[this.state.turn].color;
          this.turn();
          this.checkWin();
          return;
        }
      }

    }
  }

  turn() {
    if (this.state.turn == 0) {
      this.setState({turn: 1});
    } else {
      this.setState({turn: 0});
    }
  }

  checkWin() {
    if (this.checkHorizontal() || this.checkVertical() || this.checkDiagonal()) {
      this.win();
    }
  }

  win() {
    if (this.state.turn == 0) {
      alert(this.state.players[0].color + " wins");
    } else {
      alert(this.state.players[1].color + " wins");
    }
    this.reset();
  }

  checkHorizontal() {
    let color = this.state.players[this.state.turn].color;
    for (let x = 6; x >= 0; x--) {
      let columns = document.getElementById("x-"+x);
      let count = 0;
      for (let y = 5; y >= 0; y--) {
        let column = columns.childNodes[y];
        if (column.style.backgroundColor == color && column.style.backgroundColor != "") {
          count++;
        } else {
          count = 1;
          color = column.style.backgroundColor;
        }
        if (count == 4) {
          console.log("Horizontal win");
          return true;
        }
      }
    }
  }

  checkVertical() {
    let color = this.state.players[this.state.turn].color;
    for (let y = 5; y >= 0; y--) {
      let count = 0;
      for (let x = 6; x >= 0; x--) {
        let columns = document.getElementById("x-"+x);
        let column = columns.childNodes[y];
        if (column.style.backgroundColor == color && column.style.backgroundColor != "") {
          count++;
        } else {
          count = 1;
          color = column.style.backgroundColor;
        }
        if (count == 4) {
          console.log("Vertical win");
          return true;
        }
      }
    }
  }

  checkDiagonalRight(x, y, color) {
    let count = 0;
    console.log("x : " ,x);
    for (let i = 0; i < 4; i++) {
      console.log(i);
      console.log(y);
      let columns = document.getElementById("x-"+(x+i));
      console.log(columns);
      if (columns == null) return false;
      let column = columns.childNodes[y-i];
      console.log(column);
      if (column.style.backgroundColor == color) {
        count++;
      } else {
        return false;
      }
    }
    if (count == 4) {
      console.log("Diagonal right win");
      return true;
    }
  }

  checkDiagonalLeft(x, y, color) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      let columns = document.getElementById("x-"+(x-i));
      if (columns == null) return false;
      let column = columns.childNodes[y-i];
      if (column.style.backgroundColor == color) {
        count++;
      } else {
        return false;
      }
    }
    if (count == 4) {
      console.log("Diagonal left win");
      return true;
    }
  }

  checkDiagonal() {
    let color = this.state.players[this.state.turn].color;
    for (let x = 6; x >= 0; x--) {
      let columns = document.getElementById("x-"+x);
      for (let y = 5; y >= 0; y--) {
        let column = columns.childNodes[y];
        if (column.style.backgroundColor != "") {
          if (this.checkDiagonalRight(x, y, column.style.backgroundColor)) {
            return true;
          }
          if (this.checkDiagonalLeft(x, y, column.style.backgroundColor)) {
            return true;
          }
        }
      }
    }
  }

reset() {
    for (let x = 6; x >= 0; x--) {
      let columns = document.getElementById("x-"+x);
      for (let y = 5; y >= 0; y--) {
        let column = columns.childNodes[y];
        column.style.backgroundColor = "";
      }
    }
}
 

  render() {
    if (this.state.players.length == 2) {
      return <div id="game">
        <Layout play={this.play} x={7} y={6}/>
      </div>;
    }
  }

  componentDidMount() {
    this.setState({board: document.getElementById("game")});

  }
}

export default Game;
