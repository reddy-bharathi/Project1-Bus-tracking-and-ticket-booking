import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import {
    createBrowserRouter,
    RouterProvider,
    Route,
  
} from "react-router-dom";
import ResultsPage from './components/ResultsPage';
import LandingPage from './components/LandingPage';

const router =createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },

  {
    path: "ResultsPage",
    element: <ResultsPage/>,
  },
]);
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 // <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
