import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { boards } from './board';

@Component({
  selector: 'app-sudoko',
  templateUrl: './sudoko.component.html',
  styleUrls: ['./sudoko.component.scss']
})
export class SudokoComponent implements OnInit{
  boards = boards[0];
  message = '';
  valid!:boolean;

  board = [
    [0, 3, 0, 6, 0, 8, 9, 0, 0],
    [6, 0, 2, 0, 9, 5, 0, 4, 8],
    [1, 9, 8, 0, 0, 0, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 0, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 0, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 5, 2, 8, 6, 1, 7, 0]
  ];
  currentBoard = JSON.parse(JSON.stringify(this.board));
  constructor(){

  }

  ngOnInit(){
    // const num = this.getRandomNumber(); 
  }

  validateInput(event: any, i: number, j: number): void {
    const inputValue = Number(event.target.value);
    this.currentBoard[i][j] = inputValue;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  checkSolution() {
    this.valid = this.isValidSudoku(this.currentBoard);
  }

  isValidSudoku(currentBoard:any) {
    
    // Validate rows
    for (let i = 0; i < 9; i++) {
        let s = new Set();
        for (let j = 0; j < 9; j++) {
            if (currentBoard[i][j] !== '.') {
                if (s.has(currentBoard[i][j])) {
                    return false;
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
                    return false;
                }
                s.add(currentBoard[j][i]);
            }
        }
    }

    // Validate 3x3 subgrids
    for (let i = 0; i < 9; i++) {
        let s = new Set();
        let startRow = Math.floor(i / 3) * 3;
        let startCol = (i % 3) * 3;

        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
                if (currentBoard[r][c] !== '.') {
                    if (s.has(currentBoard[r][c])) {
                        return false;
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
