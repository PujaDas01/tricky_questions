import React, { useState } from 'react';
import './answer-code.css';

const AnswerCode = () => {
    const [isShowNanOutput, setIsShowNanOutput] = useState(false);

    const checkNanComparison = () => {
        if(NaN === NaN) {
            console.log('Hello');
        } else {
            console.log('Bye Bye');
        }
        setIsShowNanOutput(true);
    }
  return (
    <div className='answer-code-wrapper'>
        <h2>Answer Code:-</h2>
        <h5>Q1. What will be printed to the console when the following JavaScript code is executed?</h5>
        <pre>
        <code className='code'>
        {`
        if (NaN === NaN) {
            console.log('Hello');
        } else {
            console.log('Bye Bye');
        }`}
        </code>
      </pre>
      <button className='check-button' onClick={checkNanComparison}>Check Answer</button>
      {isShowNanOutput && <p className='result-text'><span>Result: </span>Bye Bye</p>}
      {isShowNanOutput && <p className='reason-text'><span>Reason: </span>NaN in JavaScript is a specific type of numerical value that cannot be compared with anything, neither true, nor null, nor itself, that's why here the result is Bye Bye. </p>}
    </div>
  )
}

export default AnswerCode;