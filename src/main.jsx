import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/Form.jsx'
import Resume from './components/Resume.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <Resume />
  </StrictMode>,
)
