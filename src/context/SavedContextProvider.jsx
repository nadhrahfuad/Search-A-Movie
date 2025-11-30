import React from 'react'
import { useState } from 'react'
import SavedContext from './SavedContext'
import { useEffect } from 'react'

const SavedContextProvider = ({children}) => {


  const [savedList, setSavedList] = useState(() => {
  const savedList = localStorage.getItem('savedlist');
  return savedList && savedList !== "undefined" ? JSON.parse(savedList) : [];
});
  const [savedCount, setSavedCount] = useState(0)
  const [openList, setOpenList] = useState(false)
  const [currInd, setCurrInd] = useState(null)
  const [error, setErrorInd] = useState(null)

  const [errorMessage, setErrorMessage] = useState("")

   function toggleList(){
    
    setOpenList(!openList)
  }


  function saveToList(ele){

    const duplicate = savedList.find(function(movie){
        return movie.imdbID === ele.imdbID
    })

    if(duplicate){
         setErrorInd(ele.imdbID)
         console.log("already added")
         setErrorMessage("Already added")
        
         
    }else{
        const updatedSavedList = [
            ...savedList,
            ele
        ]

        setSavedList(updatedSavedList)

    }

       
   
    
  //  console.log("ind", ind)

  //  console.log("duplicate", duplicate)
  //  console.log("cartcount", savedCount)

    
  }

    useEffect(()=>{
          localStorage.setItem('savedlist', JSON.stringify(savedList))
        },[savedList])
  


  function removeFromList(ele){

    const duplicate = savedList.find(function(movie){
        return movie.imdbID === ele.imdbID
    })

    if(duplicate){
        const updatedList = savedList.filter(function(movie){
            return movie.imdbID !== ele.imdbID
        })

        setSavedList(updatedList)
    }


  }

        
    function toggleReview(movieInd){
        // console.log("clicked")
        // setCurrInd(movieInd)
        if (currInd === movieInd){
            setCurrInd(null)
        }else{
            setCurrInd(movieInd)
        }

        

    }

    // console.log(currInd)
    

   useEffect(()=>{
    setSavedCount(savedList.length)
    // console.log("cartcount", cartCount)

   },[savedList]) 
  




  return (
    <SavedContext.Provider
    value={
        {
        savedList,
        setSavedList,
        openList,
        savedCount,
        setOpenList,
        toggleList,
        currInd,
        setCurrInd,
        setSavedCount,
        saveToList,
        error,
        setErrorInd,
        removeFromList,
        toggleReview,
        errorMessage
    
    
    }
    }
    
    >

    {children}

    </SavedContext.Provider>
  )
}

export default SavedContextProvider