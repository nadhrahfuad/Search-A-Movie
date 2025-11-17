
import React from 'react'
import { useContext } from 'react'
import MovieContext from '../context/MovieContext'

const PaginationTab = () => {
  const {totalResults, nextPage} = useContext(MovieContext)

  const links = []


    for(let i=1;i<totalResults;i++){
      links.push(
        <a
        key={i}
        onClick={()=>nextPage(i)}
        >
          {i}
        </a>
      )
    }

  
  return (
    <div>
     {links}


    </div>
  )
}

export default PaginationTab

// const stars = []

//     const {getRating, removeRating, rating, id} = useContext(RatingContext)

//       for(let i = 0; i < 5; i++){
//             stars.push(
//             <FontAwesomeIcon 
//             className = {rating > i ? "starcolour":"star"} 
//             onClick= {()=>getRating(i, id)} key={i} icon={faStar} 
//             onDoubleClick={removeRating}
//             />) 

//           }

// // console.log(rating, "rating set for", id, name)

//   return (
//     <div className='startcontainer'>
//         {stars}
        
//     </div>
//   )


