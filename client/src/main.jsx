import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React>
    <App />
  </React>,
)
// don't forget to turn off strict mode in vite.config.js and during deployment