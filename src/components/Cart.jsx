import CardBase from './CardBase'
import "../styles/cart.css"
import "../styles/display.css"
import EmptyImg from "../assets/empty.webp"
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {

    const {cartList, removeFromCart} = useContext(CartContext)

    console.log("MY CART",cartList)



  return (
    <div className='cartcontainerouter'>

            <div className="carttitle">
             <h3 className='carttxt txtlight'>Your Cart</h3>

            </div>
           
           <div className={cartList.length>0? "grid":""}>

        {
            cartList?.length > 0 ?
            
           ( cartList.map(function(ele,ind){

               return (
                 <div className='cartcontainer ' key = {ind}>
               <div className="cartinner  details">

                <div className="cartNDelete ">
                    <CardBase
                        movie = {ele}
                        />
                    <button onClick={()=>removeFromCart(ele)} className=" lineheight regbutton primarybtn deletemovie" >Remove from Cart</button>
                    </div>
                </div>
                    </div>

                
                
                )

            })):(
                <div className="emptycontainer">
                    <img className='emptyimg' src={EmptyImg} alt="" />
                    <span className="emptytxt txtlight">Hey, there are no items in your cart</span> 
                </div>
            )
            
        }
        </div>
     
          </div>
        


  )
}

export default Cart