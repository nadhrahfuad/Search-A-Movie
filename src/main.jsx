import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContextProvider from './context/MovieContextProvider.jsx'
import SavedContextProvider from './context/SavedContextProvider.jsx'
import "./styles/main.css"
import CartContextProvider from './context/CartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieContextProvider>
      <SavedContextProvider>
      <CartContextProvider>
        
          <App />
          </CartContextProvider>
        </SavedContextProvider>
      
    </MovieContextProvider>
  </StrictMode>,
)
