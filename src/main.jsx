import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Bootstrap JS bundle (Popper included)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Bootstrap CSS + Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Custom styles (compiled CSS — see src/styles/ for full SCSS source)
// To switch to SCSS: run `npm install sass` then import './styles/main.scss'
import './styles/main.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
