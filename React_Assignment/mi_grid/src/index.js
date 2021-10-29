import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import {AuthContextProvider} from './component/AuthContextProvider';
import { ThemeContextProvider } from './component/ThemeContextProvider';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContextProvider>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

