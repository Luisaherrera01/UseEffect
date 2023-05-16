import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    <App />
//</React.StrictMode>, //se quita esto para que no duplique la imformacion en el render
)
