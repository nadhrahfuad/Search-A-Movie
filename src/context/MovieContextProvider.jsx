import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import MovieContext from './MovieContext'

const MovieContextProvider = ({children}) => {

    const [defaultMovies, setDefaultMovies] = useState([])

    const [searchedMovies, setSearchedMovies] = useState([])

    const [userInput, setUserInput] = useState("")

    const [finalList, setFinalList] = useState([])

    const [loading, setLoading] = useState(false)

    const [errorMessage, setErrorMsg] = useState("")

    const apiKey = "e2a05fd2"

    let url 

    url =  userInput ? `http://www.omdbapi.com/?s=${userInput}&apikey=${apiKey}`:`http://www.omdbapi.com/?s=hello&apikey=${apiKey}`

    useEffect(()=>{
        const fetchMovies = async()=>{
        setLoading(true)
        
            try{

                if(userInput == ""){
                    
                    const res = await axios.get(url)
                    setDefaultMovies(res.data.Search)
                    console.log("default", res.data.Search)

                }         
              
            }catch(error){
                setErrorMsg("We're having trouble getting movies")
                console.log(error)
            }finally{
                 setLoading(false)
            }
            
        }
        fetchMovies()
    },[userInput])


    const searchMovie = async()=>{
        

        try{
            setLoading(true)

            if(userInput){
                const res = await axios.get(url)
                const searchList = res.data.Search || []

                const found = searchList.find(function(movie){
                    return movie.Title.toLocaleLowerCase() === userInput.toLocaleLowerCase()
                })

                if(found && found.imdbID){
                    setSearchedMovies([found])
                    
                    
                }else{
                    setSearchedMovies([])
                    setErrorMsg("Movie not found")
                    console.log("Not found")
                }

            }else{
                setErrorMsg("Please type a movie name")
            }
        

        }catch(error){
            setErrorMsg("cannot search movies")
            console.log(error)

        }finally{
            setLoading(false)
        }
    }


    useEffect(()=>{
        const fetchMovieDetails = async()=>{
             setLoading(true)
             let holdDetails = []

            try{
               
                const showMovies = searchedMovies.length > 0 ? searchedMovies : defaultMovies

                const existingMovies = showMovies.filter(function(ele){
                    return ele && ele.imdbID
                })

                if(existingMovies.length>0){

                     for (let movie of existingMovies){
                    const res = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)

                    holdDetails.push(res.data)
                }
                setFinalList(holdDetails)
                 setErrorMsg("")

                }else{
                    if(!loading){
                         setErrorMsg("Cannot retrieve movies")
                    }
                   
                }
               


            }catch(error){

               

                setErrorMsg("Movie details cannot be retrieved")
                console.log(error)
            }finally{
                setLoading(false)
            }

            
            
        }
         if(searchedMovies.length>0 || defaultMovies.length>0){
            fetchMovieDetails()
         }
        
    }, [searchedMovies, defaultMovies])

 



  return (
    <MovieContext.Provider 
    value={{
        defaultMovies,
        searchedMovies,
        finalList,
        userInput,
        loading,
        errorMessage,
        setUserInput,
        searchMovie}} >

        {children}

    </MovieContext.Provider>
  )
}

export default MovieContextProvider