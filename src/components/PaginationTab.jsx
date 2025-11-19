
import React from 'react'
import { useContext } from 'react'
import MovieContext from '../context/MovieContext'
import "../styles/pages.css"

const PaginationTab = () => {
  const {totalResults, nextPage, currentPage} = useContext(MovieContext)

  const links = []


    for(let i=1;i<totalResults;i++){
      links.push(
        <a 
        className='pagestxt'
        key={i}
        id={currentPage == i? "active" : ""}
        onClick={()=>nextPage(i)}

        >
          {i}
        </a>
      )
    }

  
  return (
    <div className='pages-container'>
     {links}

    </div>
  )
}

export default PaginationTab
