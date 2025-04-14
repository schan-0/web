import React, { useState } from 'react'

function CounterState() {
  let count = 0;

  return (
    <div>
        <h1>Default</h1>
        <p>총 {count}번 클릭</p>
        <button onClick={() => {count++; console.log(count)}}>
            click
        </button>
    </div>
  )
}

export default CounterState