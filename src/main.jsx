import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import GitHub from './components/GitHub/GitHub'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitHub/>
    <App />
  </React.StrictMode>,
)
