import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HomeLayout from './LandingPage/Home/HomeLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HomeLayout/>
  </StrictMode>,
)
