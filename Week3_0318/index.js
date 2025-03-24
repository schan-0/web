// Essentials
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Components
import Clock from './Clock';
import BinaryClock from './BinaryClock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
      <BinaryClock />
    </React.StrictMode>
  );
})

reportWebVitals();
