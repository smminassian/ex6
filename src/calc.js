import {useState} from 'react';

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
  
    function CalcSquare(value, squareClick){
      return (
        <button className='numberBox' onClick={squareClick}>
          {value}
          </button>
      )
    }
  
  function gamePanel(){ //This is the panel of calc
      const[calcSquares, setCalcSquares] = useState(Array(9).fill(null));
        function click(i){
            const squareArray = calcSquares.slice();
            for(i = 0; i< squareArray.length; i++){
              calc.append(i);
              calc.myAppendFunction(i);
              calc.Operation(i);
            if(i === 'c'){
              calc.clear();
              calc.setClear();
            }
          }
          //I am getting an error where it says "Objects are not valid as a react child". It has to do with the jsx in calcSquares. 
          //Ill figure out how to fix it. We are almost finished with 2 of the react components. 
          //I just have to get the buttons to show up on the calculator and they need to work
          
        
      }
        return(
          <>
            <CalcSquare value={calcSquares[7]} squareClick={()=> click(7)}/>
            <CalcSquare value={calcSquares[8]} squareClick = {()=> click(8)}/>
            <CalcSquare value={calcSquares[9]} squareClick = {()=> click(9)}/>
            <CalcSquare value={calcSquares['+']} squareClick = {()=> click('+')}/>
            <br/>
            <CalcSquare value={calcSquares[4]} squareClick = {()=> click(4)}/>
            <CalcSquare value={calcSquares[5]} squareClick = {()=> click(5)}/>
            <CalcSquare value={calcSquares[6]} squareClick = {()=> click(6)}/>
            <CalcSquare value={calcSquares['-']} squareClick = {()=> click('-')}/>
            <br/>
            <CalcSquare value={calcSquares[1]} squareClick = {()=> click(1)}/>
            <CalcSquare value={calcSquares[2]} squareClick = {()=> click(2)}/>
            <CalcSquare value={calcSquares[3]} squareClick = {()=> click(3)}/>
            <CalcSquare value= {calcSquares['x']} squareClick = {()=> click('*')}/>
            <br/>
            <CalcSquare value= {calcSquares['c']} squareClick = {() => click('c')}/>
            <CalcSquare value={calcSquares[0]} squareClick = {()=> click(0)}/>
            <CalcSquare value={calcSquares['=']} squareClick = {()=> click('=')}/>
            <CalcSquare  value= {calcSquares['/']} squareClick = {()=> click('/')}/>
        </>
        );
    }
    
    export default function main(){ //this is the main function

      return(
        <div className='outer'>
          <input type = "text" className='inputBox'/>
            <gamePanel/>
        </div>
      )
    }
  
  