
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
