import React, { useState } from 'react'

function CounterUseState() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>UseState</h1>
        <p>총 {count}번 클릭</p>
        <button onClick={() => {setCount(count+1); console.log(count);}}>
            click
        </button>
    </div>
  )
}

export default CounterUseState