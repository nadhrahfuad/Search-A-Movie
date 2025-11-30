import React, { useContext, useEffect, useState } from 'react'
import CartContext from './CartContext'
import SavedContext from './SavedContext'

const CartContextProvider = ({children}) => {

    // const {removeFromList} = useContext(SavedContext)

    //  const {openCart, cartCount, toggleCart} = useContext(CartContext)

    
    const [openCart, setOpenCart] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [priceList, setPriceList] = useState([])
    const [cartErrorMessage, setCartErrorMessage] = useState("")
    const [cartErrorInd, setCartErrorInd] = useState(null)

    
      const [cartList, setCartList] = useState(() => {
    const cartList = localStorage.getItem('cartlist');
    return cartList && cartList !== "undefined" ? JSON.parse(cartList) : []})

   useEffect(()=>{
          localStorage.setItem('savedlist', JSON.stringify(cartList))
        },[cartList])
  


    function toggleCart(){
        setOpenCart(!openCart)
    }
    
    function addToCart(ele){

        const found = cartList.find(function(movie){
            return movie.imdbID == ele.imdbID
        })

        if(found){
            setCartErrorInd(ele.imdbID)
            setCartErrorMessage("Already added!")
        }else{

            setCartList([
            ...cartList,
            ele
        ])
        setOpenCart(true)
        setPriceList(
            [...priceList,
            ele.Price]
        )
        // removeFromList(ele)

        }
 
        
    }

    function removeFromCart(ele, ind){
        const updatedList = cartList.filter(function(movie){
            return movie.imdbID !== ele.imdbID
        })

        setCartList(updatedList)

        const updatedPriceList = priceList.slice()
        
        updatedPriceList.splice(ind, 1)

        setPriceList(updatedPriceList)

        
    }

    useEffect(()=>{

            setCartCount(cartList.length)
        
    }, [cartList])



    console.log("Cart item",cartList)

    useEffect(()=>{

        if(priceList.length === 0){
            setTotalPrice(0)
        }

            const total = priceList.reduce(function(first, second){
            return Number(first) + Number(second)
        },0)

        setTotalPrice(total.toFixed(2))


        
    }, [priceList])

  return (
    <CartContext.Provider
    value={
        {

            addToCart,
            cartList,
            toggleCart,
            cartCount,
            openCart,
            totalPrice,
            cartErrorInd,
            cartErrorMessage,
            priceList,
            removeFromCart

        }
    }
    
    >

    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider