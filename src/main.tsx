import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home.tsx'
import Save from './components/Save.tsx'
import GetAll from './components/GetAll.tsx'
import ButtonAppBar from './components/Headers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>    
    <BrowserRouter>
    <ButtonAppBar/>
    <center>        
    <Save/>
    <GetAll/>
    </center>
    </BrowserRouter>
  </React.StrictMode>,
)
