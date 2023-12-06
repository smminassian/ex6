class Calculator {

  constructor() {
    this.prevNumber = '';
    this.currentNumber = '';
    this.operation = '';
    this.result = '';
  }
  clear() {
    this.prevNumber = '';
    this.currentNumber = '';
    this.operation = '';
    this.result = '';
  }

  append(value) {
    this.prevNumber = this.currentNumber.toString();
    this.currentNumber = value.toString();
    this.display(this.currentNumber);
    return this.currentNumber;
  }

  calculate() {

    let result = 0

    if (this.operation === '+') {
      result = Number(this.prevNumber) + Number(this.currentNumber);
    }
    else if (this.operation === '-') {
      result = Number(this.prevNumber) - Number(this.currentNumber);
    }
    else if (this.operation === '*') {
      result = Number(this.prevNumber) * Number(this.currentNumber);
    }
    else if (this.operation === '/') {
      if ((Number(this.currentNumber)) != 0) {
        result = Number(this.prevNumber) / Number(this.currentNumber);
      }
      else {
        console.log("NaN");
        result = "NaN";
      }
    }

    this.result = result.toString();
    let strResult = ''
    strResult = this.prevNumber + this.operation + this.currentNumber + "=" + this.result;
    this.display(strResult);

  }

  operate(event) {
    let val = event.target.value;

    if (val === '+' || val === '-' || val === '*' || val === '/') {
      this.operation = val;
    }
    else if (val === '=')
      this.calculate();
  }

  myAppendFunction(event) {
    let val = event.target.value;
    if (!isNaN(val)) {
      this.append(val);
      this.display(val);
    }

  }

  setClear() {
    this.clear();
    this.display(this.currentNumber);
  }

  display(value) {
    const input = document.getElementById('inputBox');
    if (value != NaN) {
      input.value = value;
    }
  }
}

const calc = new Calculator();

function GamePanel() { //this is the panel component

  function click(i) {
    const newCalcSquares = calcSquares.slice();
    if (newCalcSquares[i] = '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9') {
      calc.myAppendFunction(newCalcSquares[i]);
    }
    else if (newCalcSquares[i] = '+' || '-' || '/' || '*' || '=') {
      calc.operate(newCalcSquares[i]);
    }
    else if (newCalcSquares[i] = 'c') {
      calc.setClear(newCalcSquares[i]);
    }

    calcHistory(newCalcSquares);
  }
  
  function CalcSquare({value, squareClick}) {
    return (
      <button className='numberBox' onClick={() => {squareClick}}>
        {value}
      </button>
    )
  }

  return (
    <>
      <CalcSquare value={'7'} squareClick={() => click(7)} />
      <CalcSquare value={'8'} squareClick={() => click(8)} />
      <CalcSquare value={'9'} squareClick={() => click(9)} />
      <CalcSquare value={'+'} squareClick={() => click('+')} />
      <br />
      <CalcSquare value={'4'} squareClick={() => click('4')} />
      <CalcSquare value={'5'} squareClick={() => click('5')} />
      <CalcSquare value={'6'} squareClick={() => click('6')} />
      <CalcSquare value={'-'} squareClick={() => click('-')} />
      <br />
      <CalcSquare value={'1'} squareClick={() => click('1')} />
      <CalcSquare value={'2'} squareClick={() => click('2')} />
      <CalcSquare value={'3'} squareClick={() => click('3')} />
      <CalcSquare value={'*'} squareClick={() => click('*')} />
      <br />
      <CalcSquare value={'c'} squareClick={() => click('c')} />
      <CalcSquare value={'0'} squareClick={() => click('0')} />
      <CalcSquare value={'='} squareClick={() => click('=')} />
      <CalcSquare value={'/'} squareClick={() => click('/')} />

    </>
  )

}


export default function main() {
  return (
    <div className='outer'>
      <input type="text" className='inputBox' />
      <GamePanel />
    </div>
  )
}