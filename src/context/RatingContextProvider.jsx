import React from 'react'
import { useState } from 'react'
import RatingContext from './RatingContext'
import { useEffect } from 'react'


const RatingContextProvider = ({children, id}) => {



    function getInitialRating(){
        let saved = localStorage.getItem(`stars-${id}`)
        if(saved){
            return JSON.parse(saved)
        }else{
            return 0
        }
    }

     function getRating(ind){

        setRating(ind+1)
    }

      const [rating, setRating] = useState(getInitialRating)

      useEffect(()=>{
        localStorage.setItem(`stars-${id}`, JSON.stringify(rating))
        console.log(`local storage stars-${id}`, localStorage.getItem(`stars-${id}`))
      },[rating, id])


      function removeRating(){
        if (rating === 1){
            setRating(0)
        }
      }

    // console.log(rating, id, "fron CONTEXT")
    


  return (
    <RatingContext.Provider
    value={
        {
            getRating,
            rating,
            removeRating
        }
    }
    
    >

        {children}
    </RatingContext.Provider>
  )
}

export default RatingContextProvider