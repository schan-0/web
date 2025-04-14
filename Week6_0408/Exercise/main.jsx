import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './CounterUseState'
import CounterState from './CounterState'
import CounterUseState from './CounterUseState'
import Area from './Area'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterState />
    <hr></hr>
    <CounterUseState />
    <hr></hr>
    <Area />
  </StrictMode>,
)
