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
  
    function calcSquare(value, squareClick){
      return (
        <button className='numberBox' onClick={squareClick}>
          {value}
          </button>
      )
    }
  
    function gamePanel(){
        function click(i){
          for(i = 0; i < 999; i++){
            calc.append(i);
            calc.myAppendFunction(i);
            calc.Operation(i);
          if(i === 'c'){
            calc.clear();
            calc.setClear();
          }
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
            <calcSquare className = "clear" value= 'c' squareClick = {() => click('c')}/>
            <calcSquare className = "number" value='0' squareClick = {()=> click(0)}/>
            <calcSquare className = "Operation" value='=' squareClick = {()=> click('=')}/>
            <calcSquare className = "Operation" value='/' squareClick = {()=> click('/')}/>
          </div>
        </>
        );
      
    }
  
  
  