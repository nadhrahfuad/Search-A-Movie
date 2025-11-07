import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "../styles/star.css"
import { useState } from 'react'

export const Rating = (props) => {
    const stars = []

    const {id, name} = props

    const [starRating, setStarRating] = useState(0)
    // const [hoverRating, setHoverRating] = useState("")
  

    function rate(i){
        setStarRating(i+1)
        console.log(i+1)
        console.log(id)
    }

      for(let i = 0; i < 5; i++){
            stars.push(
            <FontAwesomeIcon 
            className = {starRating > i ? "starcolour":"star"}
            
            onClick= {()=>rate(i, id)} key={i} icon={faStar} 
            />) 

          }

console.log(starRating, "rating set for", id, name)

  return (
    <div className='startcontainer'>
        {stars}
        
    </div>
  )
}
