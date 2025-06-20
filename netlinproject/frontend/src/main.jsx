import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Cardprovider} from "./Cardcontext.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Cardprovider>
                <App />
       </Cardprovider>
        
  
   
  </StrictMode>,
)
