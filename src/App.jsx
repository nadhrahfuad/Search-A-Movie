
// import { useState } from 'react'
import "./styles/app.css"
import Searchbar from './components/Searchbar'
import Display from './components/Display'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from './components/Cart'
import { useContext } from 'react'
import CartContext from './context/CartContext'
import MovieLogo from "./assets/13-26-07-593_512.webp"





function App() {


  const {openCart, cartCount, toggleCart} = useContext(CartContext)



  return (

  
    <div className='maindiv'>
      <div className="maintop">
      <div className="header">
      <h1 className='siteheader txtlight'>The Movie Database</h1>
      <img className="imglogo" src={MovieLogo} alt="" />
      </div>

    <div className="searchNCart flex">
        <Searchbar />
    
    <div className="carticoncontainer">

    <span className= {`cartnum txtlight`}>{cartCount}</span>
    <FontAwesomeIcon className={`${cartCount > 0? "primary" : "txtlight"}`}  onClick={openCart} icon={faCartShopping} />

    </div>
    </div>
     </div>

    {
      toggleCart &&
      <Cart />

    }
     

   
  

    <Display 
    
    />

    
   
     </div>

  )
}

export default App
