import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { boards } from './board';

@Component({
  selector: 'app-sudoko',
  templateUrl: './sudoko.component.html',
  styleUrls: ['./sudoko.component.scss']
})
export class SudokoComponent implements OnInit{
  boards = boards[0];
  currentBoard:any;
  message = '';
  valid!:boolean;

  board: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
  
  
  constructor(){

  }

  ngOnInit(){
    const num = this.getRandomNumber();
    this.currentBoard = this.boards[0]; 
    this.createBoard(this.currentBoard);
  }

  validateInput(event: any, i: number, j: number): void {
    const inputValue = Number(event.target.value);
    if (inputValue >= 1 && inputValue <= 9) {
      this.currentBoard[i][j] = inputValue;
    } else if (!inputValue) {
      this.currentBoard[i][j] = 0; // Allow clearing the cell
    } else {
      // Invalid input, reset the value
      event.target.value = "";
    }
  }



  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  createBoard(board:any) {
  const boardContainer = document.querySelector("#sudoku-board tbody");

  board.forEach((row:any, i:any) => {
  const rowElement = document.createElement("tr");
  row.forEach((value:any, j:any) => {
      const cellElement = document.createElement("td");
      
      if (value !== 0) {
      cellElement.textContent = value;
      } else {
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.min = String(1);
      inputElement.max = String(9);
      inputElement.maxLength = 1; // Limit input to 1 character (digit)
      
      // Validate the input when it changes
      inputElement.addEventListener("input", () => {
          const inputValue = Number(inputElement.value);
          
          // Check if the input is a number between 1 and 9
          if (inputValue >= 1 && inputValue <= 9) {
          // Valid input, update the board
            board[i][j] = Number(inputValue);
          } else if (!inputValue) {
          // Allow clearing the cell
            board[i][j] = 0;
          } else {
          // Invalid input, clear the input field
          inputElement.value = "";
          }
      });
      
      cellElement.appendChild(inputElement);
      }

      rowElement.appendChild(cellElement);
  });
  boardContainer?.appendChild(rowElement);
  });

  }

  checkSolution() {
    this.valid = this.isValidSudoku(this.currentBoard);
    

    if (this.valid) {
      this.message = "Congratulations! You solved the puzzle!";
    } else {
      this.message = "Oops! Some numbers are incorrect. Try again.";
    }
  }

  isValidSudoku(currentBoard:any) {
    
    // Validate rows
    for (let i = 0; i < 9; i++) {
        let s = new Set();
        for (let j = 0; j < 9; j++) {
            if (currentBoard[i][j] !== '.') {
                if (s.has(currentBoard[i][j])) {
                    return false; // Duplicate value in the row
                }
                s.add(currentBoard[i][j]);
            }
        }
    }

    // Validate columns
    for (let i = 0; i < 9; i++) {
        let s = new Set();
        for (let j = 0; j < 9; j++) {
            if (currentBoard[j][i] !== '.') {
                if (s.has(currentBoard[j][i])) {
                    return false; // Duplicate value in the column
                }
                s.add(currentBoard[j][i]);
            }
        }
    }

    // Validate 3x3 subgrids
    for (let i = 0; i < 9; i++) {
        let s = new Set();
        // Determine the starting row and column of the 3x3 subgrid
        let startRow = Math.floor(i / 3) * 3;
        let startCol = (i % 3) * 3;

        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (currentBoard[r][c] !== '.') {
                    if (s.has(currentBoard[r][c])) {
                        return false; // Duplicate value in the subgrid
                    }
                    s.add(currentBoard[r][c]);
                }
            }
        }
    }

    return true; 
};


}


  
// createBoard();
