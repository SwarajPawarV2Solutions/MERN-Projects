import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* we have wrapped App in AuthContext and TaskContext */}
   <AuthProvider>
    <App />
   </AuthProvider>
  
  </StrictMode>,
)
