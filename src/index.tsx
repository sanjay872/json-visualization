import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router';
import ComponentPage from './components/component_page/component_page';
import JsonData from './components/JsonData/jsonData';
import Nav from './components/nav/nav';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/components" element={<ComponentPage/>} />
        <Route path="/jsondata" element={<JsonData/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();