import CardBase from './CardBase'
import "../styles/saved.css"
import "../styles/cardbase.css"
import EmptyImg from "../assets/empty.webp"
import { useContext } from 'react'
import SavedContext from '../context/SavedContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'


const Saved = () => {

    const {savedList, removeFromList} = useContext(SavedContext)


    console.log("MY Bookmark",savedList)



  return (
    <div className='listcontainerouter'>

            <div className="listtitle">
             <h3 className='listtxt txtlight'>Your List</h3>

            </div>
           
           <div className={savedList.length>0? "grid":""}>

        {
            savedList?.length > 0 ?
            
           ( savedList.map(function(ele,ind){

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
                    <span className="emptytxt txtlight">Oh no, there are no items saved to your list</span> 
                </div>
            )
            
        }
        </div>
     
          </div>
        


  )
}

export default Saved