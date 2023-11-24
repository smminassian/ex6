import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class calculator{
      
  constructor(){
        this.prevNumber = '';
        this.currentNumber = '';
        this.operation = '';
        this.result = '';
    }
    clear(){
        this.prevNumber = '';
        this.currentNumber = '';
        this.operation = '';
        this.result = '';
    }
          
    append(value){
        this.prevNumber = this.currentNumber.toString();
        this.currentNumber = value.toString();
        this.display(this.currentNumber); 
        return this.currentNumber;
    }

    calculate(){

      let result = 0
              
        if(this.operation === '+'){
            result= Number(this.prevNumber) + Number(this.currentNumber);
        }
        else if(this.operation === '-'){
            result= Number(this.prevNumber) - Number(this.currentNumber);
        }
        else if(this.operation === '*'){
            result= Number(this.prevNumber) * Number(this.currentNumber);
        }
        else if(this.operation === '/'){
            if((Number(this.currentNumber)) != 0){
                result= Number(this.prevNumber) / Number(this.currentNumber);
           }
        else{
            console.log("NaN");
            result = "NaN";
           }
       }

          this.result = result.toString();
          let strResult=''
          strResult = this.prevNumber + this.operation + this.currentNumber+"="+this.result;
          this.display(strResult);
        
    }

    Operation(event){
        let val = event.target.value;

        if(val === '+' || val === '-' || val === '*' || val === '/'){  
            this.operation = val;
         } 
        else  if(val ==='=')
          this.calculate();
    }

    myAppendFunction(event){
        let val = event.target.value;
       if(!isNaN(val)){
        this.append(val);
        this.display(val);
       }

    }

    setClear(){
        this.clear();
        this.display(this.currentNumber);
    }

     display(value){
        const input = document.getElementById('inputBox');
        if(value != NaN){
            input.value = value;
        }
     }
    }

  const calc = new calculator();

  function gamePanel({numberBox, squareClick}){
      function click(i){
        for(i = 0; i < 999; i++){
          calc.append(i);
          calc.myAppendFunction(i);
        }
    
    
      }
      return(
        <>
        <div className='board-row'>
          <calcSquare className = "number" value='7' squareClick={()=> click(7)}/>
          <calcSquare className = "number" value='8' squareClick = {()=> click(8)}/>
          <calcSquare className = "number" value='9' squareClick = {()=> click(9)}/>
          <calcSquare className = "operation" value='+' squareClick = {()=> click('+')}/>
        </div>
        <div className='board-row'>
          <calcSquare className = "number" value='4' squareClick = {()=> click(4)}/>
          <calcSquare className = "number" value='5' squareClick = {()=> click(5)}/>
          <calcSquare className = "number" value='6' squareClick = {()=> click(6)}/>
          <calcSquare className = "operation" value='-' squareClick = {()=> click('-')}/>
        </div>
        <div className='board-row'>
          <calcSquare className = "number" value='1' squareClick = {()=> click(1)}/>
          <calcSquare className = "number" value='2' squareClick = {()=> click(2)}/>
          <calcSquare className = "number" value='3' squareClick = {()=> click(3)}/>
          <calcSquare className = "operation" value= 'X' squareClick = {()=> click('*')}/>
        </div>
        <div className='board-row'>
          <calcSquare className = "clear" value= 'c' squareClick = {calc.clear}/>
          <calcSquare className = "number" value='0' squareClick = {()=> click(0)}/>
          <calcSquare className = "Operation" value='=' squareClick = {()=> click('=')}/>
          <calcSquare className = "Operation" value='/' squareClick = {()=> click('/')}/>
        </div>
      </>
      );
    }  

function calcSquare(value, squareClick){
  return (
    <button className='numberBox' onClick={squareClick}>
      {value}
      </button>
  )
}
function calcCLear(){
  return(
    <button className = 'clear' onClick={Clear}></button>
  )
}
