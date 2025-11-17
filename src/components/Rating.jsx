import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../styles/star.css"
import RatingContext from '../context/RatingContext'
import { useContext } from 'react'

export const Rating = () => {
    const stars = []

    const {getRating, removeRating, rating, id} = useContext(RatingContext)

      for(let i = 0; i < 5; i++){
            stars.push(
            <FontAwesomeIcon 
            className = {rating > i ? "starcolour":"star"} 
            onClick= {()=>getRating(i, id)} key={i} icon={faStar} 
            onDoubleClick={removeRating}
            />) 

          }

// console.log(rating, "rating set for", id, name)

  return (
    <div className='startcontainer'>
        {stars}
        
    </div>
  )
}
