import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SearchBoxApp } from './SearchBoxApp';
import reportWebVitals from './reportWebVitals';

const element = document.getElementById('search-box-container') as HTMLElement;
const root = ReactDOM.createRoot(element);
const appConfig = element.getAttribute('data-app-config') || 'search-config.json';

fetch(appConfig)
  .then(response => response.json())
  .then(config => {
    root.render(
      <React.StrictMode>
        <SearchBoxApp appConfig={config} />
      </React.StrictMode>
    );
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
