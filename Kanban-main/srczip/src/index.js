import React from 'react';
import ReactDOM from 'react-dom/client';
import MainHome from './mercor/MainHome';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import './index.css';
// import Home from "./mercor/Home";
// import ResponsiveDrawer from './kanban/sidedrawer';
// import App from './App';
// import TopNavBar from './mercor/TopNavBar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ResponsiveDrawer/> */}
    {/* <Home/> */}
    {/* <TopNavBar/> */}
    <MainHome/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()





