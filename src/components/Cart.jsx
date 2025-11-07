import CardBase from './CardBase'
import "../styles/cart.css"
import "../styles/cardbase.css"
import EmptyImg from "../assets/empty.webp"
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const {cartList, removeFromList} = useContext(CartContext)

    console.log("MY CART",cartList)



  return (
    <div className='listcontainerouter'>

            <div className="listtitle">
             <h3 className='listtxt txtlight'>Your List</h3>

            </div>
           
           <div className={cartList.length>0? "grid":""}>

        {
            cartList?.length > 0 ?
            
           ( cartList.map(function(ele,ind){

               return (
                 <div className='listcontainer ' key = {ind}>
               <div className="listinner details">

                        <div className='removecontainer'>
                        <button onClick={()=>removeFromList(ele)} className=" lineheight redbtn adddelete " ><FontAwesomeIcon icon={faMinus} /></button>
                        </div>
                     <CardBase
                        movie = {ele}
                        />
                </div>
                    </div>

                
                
                )

            })):(
                <div className="emptycontainer">
                    <img className='emptyimg' src={EmptyImg} alt="" />
                    {/* larger text FIXX */}
                    <span className="emptytxt txtlight">Oh no, there are no items saved to your list</span> 
                </div>
            )
            
        }
        </div>
     
          </div>
        


  )
}

export default Cart