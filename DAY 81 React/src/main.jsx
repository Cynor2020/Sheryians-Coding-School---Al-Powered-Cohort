import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import "./index.css"
import { ToastContainer } from 'react-toastify'
import Wrapper from './Wrapper.jsx'

createRoot(document.getElementById('root')).render(
<Wrapper>
  <h1>Gadakh</h1>
    <div>
      <App />
      <ToastContainer position='top-center' />
    </div>
</Wrapper>
)



    