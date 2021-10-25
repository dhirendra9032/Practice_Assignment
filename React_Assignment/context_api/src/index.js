import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AuthContextProvider} from './component/AuthContextProvider';
import { ThemeContextProvider } from './component/ThemeContextProvider';



ReactDOM.render(
  <React.StrictMode>
  <ThemeContextProvider>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


