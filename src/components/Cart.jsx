import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import "../styles/cart.css"
import "../styles/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMinus } from '@fortawesome/free-solid-svg-icons'
import EmptyImg from "../assets/empty.webp"


const Cart = () => {

    const {cartList, totalPrice,priceList,toggleCart, removeFromCart} = useContext(CartContext)





  return (
    <div className='cartoutercontainer'>
        <div className="carttitle">
             <h3 className='listtxt txtlight'>Your Cart</h3>
            <FontAwesomeIcon onClick={toggleCart} className='txtlight closeicon' icon={faClose} />

        </div>

        <div className='cartitemcontainer'>
        {cartList?.length > 0 ?
        (cartList.map(function(ele,ind){
            return(
                <div className='cartitem' key={ind}>
                    <div className="titlentype">
                        <div className="titlentypeleft">

                        <button className='removebtn redbtn' onClick={()=>removeFromCart(ele,ind)}>

                            <FontAwesomeIcon icon={faMinus}/>




                         </button>
                    <p className="movietitle fontreg txtlight">{ele.Title}</p>


                        </div>
                         
                    <p className="type fontsml txtlight">{ele.Type}</p>

                    </div>
            
            <div className="pricecontainer">
                <p className="price  txtlight">${ele.Price}</p>
            </div>
            

           

            </div>

            )
            
        })
    ):(
                        <div className="emptycontainer">
                            <img className='emptyimg' src={EmptyImg} alt="" />
                            <span className="emptytxt txtlight">Oh no, there are no items in your cart</span> 
                        </div>
                    )}
        </div>

        <div className='totalcontainer'>
        {priceList.length > 0 && 
         <div className="totalinnercontainer">
                <span className='txtlight'>Total:</span> <span className='orangetxt'>${totalPrice}</span>
            </div>
        
        }
        </div>
       


    </div>
  )
}

export default Cart