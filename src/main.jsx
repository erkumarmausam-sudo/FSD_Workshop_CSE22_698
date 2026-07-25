import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Component/Dashboard.jsx'
import Home from './Component/Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Dashboard/>
  </StrictMode>,
)
