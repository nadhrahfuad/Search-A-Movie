import React from 'react'
import { useState } from 'react'
import CartContext from './CartContext'
import { useEffect } from 'react'

const CartContextProvider = ({children}) => {


  const [cartList, setCartList] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [toggleCart, setToggleCart] = useState(false)
  const [currInd, setCurrInd] = useState(null)
  const [error, setErrorInd] = useState(null)

  const [errorMessage, setErrorMessage] = useState("")

   function openCart(){
    
    setToggleCart(!toggleCart)
  }


  function addToCart(ele,ind){

    const duplicate = cartList.find(function(movie){
        return movie.imdbID === ele.imdbID
    })

    if(duplicate){
         setErrorInd(ele.imdbID)
         console.log("already added")
         setErrorMessage("Already added")
        
         
    }else{
        const updatedCartList = [
            ...cartList,
            ele
        ]
        setCartList(updatedCartList)
    }
   
    
   console.log("ind", ind)

   console.log("duplicate", duplicate)
   console.log("cartcount", cartCount)

    
  }


  function removeFromCart(ele){

    const duplicate = cartList.find(function(movie){
        return movie.imdbID === ele.imdbID
    })

    if(duplicate){
        const updatedList = cartList.filter(function(movie){
            return movie.imdbID !== ele.imdbID
        })

        setCartList(updatedList)
    }


  }

        
    function toggleReview(movieInd){
        console.log("clicked")
        // setCurrInd(movieInd)
        if (currInd === movieInd){
            setCurrInd(null)
        }else{
            setCurrInd(movieInd)
        }

        

    }

    console.log(currInd)
    

   useEffect(()=>{
    setCartCount(cartList.length)
    // console.log("cartcount", cartCount)

   },[cartList]) 
  




  return (
    <CartContext.Provider
    value={
        {cartList,
        setCartList,
        cartCount,
        openCart,
        setToggleCart,
        toggleCart,
        currInd,
        setCurrInd,
        setCartCount,
        addToCart,
        error,
        setErrorInd,
        removeFromCart,
        toggleReview,
        errorMessage
    
    
    }
    }
    
    >

    {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider