import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/styles.css'

import { Router, Route, Link, useNavigate } from 'react-router-dom';

import Navbar from './model/Navbar.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />

  </React.StrictMode>,
)

