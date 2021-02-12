import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accueil from './Containers/app';
import NameForm from './Containers/liste';
import Filmlist from './Components/video-list';
import Serachbar from'./Components/search-bar';


ReactDOM.render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>,
  document.getElementById('root')
  //ReactDOM.render(element,document.getElementById('t3'));
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
