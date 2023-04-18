import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import App from './App';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.createRoot(
//   <AuthProvider>
//     <App />
//   </AuthProvider>,
//   document.getElementById('root')


  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <AuthProvider>
   <App />
  </AuthProvider>,
);

document.getElementById('root')
  


