import { useContext } from 'react'
import SavedContext from '../context/SavedContext'
import { Rating } from './Rating'
import RatingContextProvider from '../context/RatingContextProvider'
import Placeholder from "../assets/placeholder.avif"
import CartContext from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'





const CardBase = (props) => {

  const {movie} = props
  const {toggleReview, currInd} = useContext(SavedContext)
  const {addToCart, cartList} = useContext(CartContext)


  const isInCart = cartList.some(function(ele){
    return ele.imdbID === movie.imdbID
  })

  return (
    <>
    <div  className='titleNPoster lineheight txtlight flexcol'>
          <h2 className="title">{movie.Title}</h2>
          <img src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : Placeholder} alt="" />
          </div>

          <RatingContextProvider id={movie.imdbID}>
           <Rating
           name = {movie.Title}
           
           />
           </RatingContextProvider>

        <div className="  detailscontainer">
          <div className="bottomdetails lineheight txtlight flexcol">
            <div className="genrencountrynyear">
              <p className="genre fontsml">Genre: {movie.Genre}</p>
              <p className="country fontsml">Country: {movie.Country}</p>
              <p className="year fontsml">Production Year: {movie.Year ? movie.Year : "n/a"}</p>
            </div>
          {/* <div className="plotcontainer">
            <p className="plot fontsml">{movie.Plot}</p>
          </div> */}
            </div>

             <div className="price-container">
              <p className='fontreg txtlight'>Price:</p>
          <p className="price fontreg orangetxt">
            $ {movie.Price}
          </p>
            
          </div>

          


        </div>

             <button className=' secondarybtn regbutton lineheight txtlight flexcol' onClick={()=>toggleReview(movie.imdbID)}  >View Movie Score</button>


            {!isInCart && (

               <button className= "lineheight primarybtn regbutton" onClick={()=>{
                                    addToCart(movie)
                                   }}>
                                    <div className='addtocartinnerbtn'>
                                    <span >Add To Cart</span>
                                    <span className="price"></span>
                                    
                                    <FontAwesomeIcon icon={faCartShopping} className=' addToCart' />
                                    </div>
                                    
                                   </button> 


            ) }
              

            {currInd === movie.imdbID && (

              <>
              <div className="breaklinecontainer">
                        <hr className='breakline'/>
                        </div>

                 <div className="ratingscontainer " >
                      {movie.Ratings?.map(function(ele,ind){
                          return (
                
             
                <div className="rating" key={ind}> 
                <p className='txtlight fontsml'> Rated {ele.Value} on {ele.Source} </p>
                </div>
              
                
            )}
          )
           
          
          
        }
        
        </div>
        
          <div className="breaklinecontainer">
            <hr className='breakline'/>
            </div>
</>

)}
             

    </>

  )
}

export default CardBase