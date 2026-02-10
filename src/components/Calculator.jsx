import React from 'react'
import {useState} from 'react'

export const Calculator = () => {
    const [num1,setNum1]= useState('');
    const [num2,setNum2]=useState('');
    const [result,setResult]=useState(null);
function sum(){
    let num = parseFloat(num1)+parseFloat(num2);
    setResult(num);
}
function handleClear(){
    setNum1('');
    setNum2('');
    setResult(null);
}
  return (
    <div>
      <div>
        <input
          className="form-control"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder=" enter number1"
        />
        <input
          form-control="form-control"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="enter number2"
        />
        <button className="btn btn-success" onClick={sum}>
          calculator sum
        </button>
        <button className="btn btn-danger" onClick={handleClear}>clear</button>
      </div>
      <p>Results: {result}</p>
    </div>
  );
}

