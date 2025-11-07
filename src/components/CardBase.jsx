import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { Rating } from './Rating'





const CardBase = (props) => {

  const {movie} = props
  const {toggleReview, currInd} = useContext(CartContext)


  return (
    <>
    <div  className='titleNPoster lineheight txtlight flexcol'>
          <h2 className="title">{movie.Title}</h2>
          <img src={movie.Poster ? movie.Poster : "n/a"} alt="" />
          </div>

           <Rating
           id={movie.imdbID}
           name = {movie.Title}
           
           />

        <div className="  detailscontainer">
          <div className="bottomdetails lineheight txtlight flexcol">
            <div className="genrencountry sectionpadding flexcol">
              <p className="genre fontsml">Genre: {movie.Genre}</p>
              <p className="country fontsml">Country: {movie.Country}</p>
            </div>
          <div className="plotcontainer">
            <p className="plot fontsml">{movie.Plot}</p>
          </div>
          <div>
             <p className="year txtlight fontsml">Production Year: {movie.Year ? movie.Year : "n/a"}</p>
          </div>
            </div>
        </div>

          

           
           


             <button className=' secondarybtn regbutton lineheight txtlight flexcol' onClick={()=>toggleReview(movie.imdbID)}  >View Rating</button>

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