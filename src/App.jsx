
// import { useState } from 'react'
import "./styles/app.css"
import Searchbar from './components/Searchbar'
import Display from './components/Display'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import Saved from './components/Saved'
import { useContext, useEffect, useState } from 'react'
import SavedContext from './context/SavedContext'
import MovieLogo from "./assets/13-26-07-593_512.webp"
import Cart from "./components/Cart"
import CartContext from "./context/CartContext"





function App() {


  const {openList, savedCount, toggleList} = useContext(SavedContext)
  const {openCart, cartCount, toggleCart} = useContext(CartContext)



  return (

  
    <div className='maindiv'>
      <div className="maintop">
      <div className="header">
      <h1 className='siteheader txtlight'>The Movie Database</h1>
      <img className="imglogo" src={MovieLogo} alt="" />
      </div>

    <div className="searchNSave flex">
        <Searchbar />
    
    <div className="savediconcontainer">

    <span className= {`savednum txtlight`}>{savedCount}</span>
    <FontAwesomeIcon className={`${savedCount > 0? "primary" : "txtlight"}`}  onClick={toggleList} icon={faBookmark} />

    </div>
     <div className="savediconcontainer">

    <span className= {`savednum txtlight`}>{cartCount}</span>
    <FontAwesomeIcon className={`${cartCount > 0? "primary" : "txtlight"}`}  onClick={toggleCart} icon={faShoppingBag} />

    </div>
    </div>
     </div>

    {
      openList &&
      <Saved />

    }
     
     {
      openCart && 
      <Cart


      
      />
     }

   
  

    <Display 
    
    />

    
   
     </div>

  )
}

export default App
