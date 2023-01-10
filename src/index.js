import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BookProvider from './context/bookcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookProvider>
    <App />
  </BookProvider>
);
