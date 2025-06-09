import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Transition from './Transition.jsx'
import DefferedValue from './DefferedValue.jsx'
import PasswordField from './PasswordField.jsx'
import MouseTracker from './MouseTracker.jsx'
import FetchData from './FetchData.jsx'
import Accommodate from './Accommodate.jsx'
import ExpensiveCalc from './ExpensiveCalc.jsx'
import OptimizedCalc from './OptimizedCalc.jsx'
import OptimizedCalc2 from './OptimizedCalc2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Transition />
    <DefferedValue />
    <PasswordField />
    <MouseTracker />
    <FetchData />
    <Accommodate />
    <ExpensiveCalc />
    <OptimizedCalc />
    <OptimizedCalc2 />

  </StrictMode>,
)
