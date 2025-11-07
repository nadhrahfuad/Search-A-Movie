import React from 'react'
import "../styles/cardbase.css"
import ErrorContainer from './ErrorContainer'
import CardBase from './CardBase'
import { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import CartContext from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const Cards = () => {

  const {finalList} = useContext(MovieContext)
  const { saveToList, error, errorMessage} = useContext(CartContext)

  
  return (
    <div className='maindiv grid '>

     {finalList?.length > 0 &&

////5 stars, how many stars you want to give rating func by hover or click store rating in localstorage

    finalList.map(function(ele, ind){
      return(

        
        <div  className='details flexcol ' key={ind}>

        
          <div className="addtolistbtncontainer">
            
          {error === ele.imdbID && 
           <ErrorContainer message={errorMessage} />}
           
          <button className= "lineheight primarybtn adddelete" onClick={()=>{
            saveToList(ele, ind)
          

           }}><FontAwesomeIcon icon={faBookmark} className=' savetolist' /></button> 
           </div>

          <CardBase 
          ////u have to pass ele because thats each movie obj
          movie = {ele}
          />
            


           

          
          </div>
          
          
      )
    })}
  
  
  

 


    </div>
    
  )
  
}

export default Cards