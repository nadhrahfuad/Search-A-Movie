import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContextProvider from './context/MovieContextProvider.jsx'
import CartContextProvider from './context/CartContextProvider.jsx'
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieContextProvider>
      <CartContextProvider>
    <App />
    </CartContextProvider>
    </MovieContextProvider>
  </StrictMode>,
)
