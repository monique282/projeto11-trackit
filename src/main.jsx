import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Reset from '..//src/style/ResetStyle';
import Global from '../src/style/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
  <Reset/>
<Global/>
    <App />
    </React.StrictMode>
)
