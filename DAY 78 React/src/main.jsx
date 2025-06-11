import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import "./index.css"
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <App />
      <ToastContainer position='top-center' />
    </div>
  </StrictMode>,
)
