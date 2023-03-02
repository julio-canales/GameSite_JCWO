import { Component } from '@angular/core';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.css']
})
export class RpsComponent {
  compText: string = "";
  playerWins: number = 0;
  compWins: number = 0;
  gameStarted: boolean = false;
  round: number = 0;
  roundStatus: string = "";
  compEmoji: string = "";

  makeMove(selection:number):void {
    // 1 Rock, 2 Paper, 3 Scissors
    this.gameStarted = true;
    this.round++;
    
    let compChoice = (Math.floor(Math.random() * 3)) + 1;

    this.displayCompChoice(compChoice);

    this.decideWinner(selection, compChoice);
    
  }

  decideWinner(selection: number, compChoice: number): void {

    if (selection == compChoice) {
      this.roundStatus = "Tie";
    } else if ((selection == 1 && compChoice == 2) || (selection == 2 && compChoice == 3) || (selection == 3 && compChoice == 1)) {
      this.roundStatus = "Lose";
      this.compWins++;
    } else {
      this.roundStatus = "Win";
      this.playerWins++;
    }

  }

  displayCompChoice (compChoice: number) {
    switch(compChoice) {
      case 1: this.compText = "Computer chose Rock.";
              this.compEmoji = "&#9994;";
        break;
      case 2: this.compText = "Computer chose Paper.";
              this.compEmoji = "&#9995;";
        break;
      case 3: this.compText = "Computer chose Scissors.";
              this.compEmoji = "&#9996;";
        break;
    }
  } 

  resetGame() {
    this.compText = "";
    this.compWins = 0;
    this.playerWins = 0;
    this.gameStarted = false;
    this.round = 0;
    this.roundStatus = "";
    this.compEmoji = "";
  }
}
