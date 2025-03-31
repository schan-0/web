import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import CommentList from './Comp_comment/CommentList'
import NotificationList from './Comp_Notification/NotificationList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList/>
    <NotificationList/>
  </React.StrictMode>
);

reportWebVitals();
