import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  a: string[][] = [["1", "2", "3"],["4", "5", "6"],["7", "8", "9"]];
  playerTurn: string = "X";
  turn: number = 0;
  winnerText: string = "";
  gameEnd: boolean = false;

  constructor() {
  }
  

  handleMove(row: number, col: number, event:any) {

    this.a[row][col] = this.playerTurn;
    event.target.innerHTML = this.playerTurn;
    event.target.setAttribute("disabled", "true");
    event.target.setAttribute("class", "btn btn-dark");
    this.turn++;
    this.playerTurn == "X"? this.playerTurn = "O": this.playerTurn = "X";

    this.checkWinner();

    if (this.turn == 9) {
      this.winnerText = "Tie";
      this.gameEnd = true;
    }
      
    
  }
  checkWinner() {
    if (this.a[0][0] == this.a[0][1] && this.a[0][1] == this.a[0][2]) {
      this.winnerText = this.a[0][0];
      this.gameEnd = true;
    } else if (this.a[1][0] == this.a[1][1] && this.a[1][1] == this.a[1][2]) {
      this.winnerText = this.a[1][0];
      this.gameEnd = true;
    } else if (this.a[2][0] == this.a[2][1] && this.a[2][1] == this.a[2][2]) {
      this.winnerText = this.a[2][0];
      this.gameEnd = true;
    } else if (this.a[0][0] == this.a[1][1] && this.a[1][1] == this.a[2][2]) {
      this.winnerText = this.a[0][0];
      this.gameEnd = true;
    } else if (this.a[0][0] == this.a[1][0] && this.a[1][0] == this.a[2][0]) {
      this.winnerText = this.a[0][0];
      this.gameEnd = true;
    } else if (this.a[0][1] == this.a[1][1] && this.a[1][1] == this.a[2][1]) {
      this.winnerText = this.a[0][1];
      this.gameEnd = true;
    } else if (this.a[0][1] == this.a[1][1] && this.a[1][1] == this.a[2][1]) {
      this.winnerText = this.a[0][1];
      this.gameEnd = true;
    } else if (this.a[0][2] == this.a[1][2] && this.a[1][2] == this.a[2][2]) {
      this.winnerText = this.a[0][2];
      this.gameEnd = true;
    }
  }

  resetGame() {
    this.a= [["1", "2", "3"],["4", "5", "6"],["7", "8", "9"]];
    this.playerTurn = "X";
    this.turn = 0;
    this.winnerText = "";
    this.gameEnd = false;
  }
}
