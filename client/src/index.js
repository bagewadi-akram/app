import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer, { initialState } from "./Context/reduxStore";
import { StateProvider } from "./Context/StateProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
      <App />
  </StateProvider>
    </React.StrictMode>
);
