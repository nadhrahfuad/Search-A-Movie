import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import MovieContext from './MovieContext'

const MovieContextProvider = ({children}) => {

    const [movies, setMovies] = useState([])

    // const [searchedMovies, setSearchedMovies] = useState([])

    const [userInput, setUserInput] = useState("spiderman")

    const [finalList, setFinalList] = useState([])

    const [loading, setLoading] = useState(false)

    const [errorMessage, setErrorMsg] = useState("")

    const [page, setPage] = useState(1)

    const [currentPage, setCurrentPage] = useState(1)


    const [totalResults, setTotalResults] = useState(0)

    const apiKey = "e2a05fd2"

    let url 
    let movieName

    movieName = userInput === "" ? "spiderman" : userInput

    url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}&page=${page}`

    // :`https://www.omdbapi.com/?s=batman&apikey=${apiKey}&page=8`


        const fetchMovies = async()=>{
        setLoading(true)
        
            try{

                
                    const res = await axios.get(url)
                    console.log(res.data)
                    setMovies(res.data.Search || [])
                    const totalPages = res.data.totalResults ? Math.ceil(Number(res.data.totalResults)/10) : 0
                    setTotalResults(totalPages)
                    console.log("default", res.data.Search)
     
              
            }catch(error){
                setErrorMsg("We're having trouble getting movies")
                console.log(error)
            }finally{
                 setLoading(false)
            }
            
        }
  

        useEffect(()=>{
            
                fetchMovies()

        }, [userInput, page])
   


    const searchMovie = async()=>{
        

        try{
            setLoading(true)

            if(userInput){
                const res = await axios.get(url)
                const searchList = res.data.Search || []

                const found = searchList.filter(function(movie){
                    return movie.Title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()) 
                })

                console.log(found)

                if(found){
                    setMovies(found)
                    
                    
                }else{
                    setMovies([])
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
               
               

                const existingMovies = movies.filter(function(ele){
                    return ele && ele.imdbID
                })


                if(existingMovies.length>0){

                     for (let movie of existingMovies){
                    const res = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)

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
         if(movies.length>0){
            fetchMovieDetails()
         }
        
    }, [movies])

 

    function nextPage(id){
        setPage(id)
        setCurrentPage(id)

    }


  return (
    <MovieContext.Provider 
    value={{
        movies,
        finalList,
        userInput,
        loading,
        errorMessage,
        totalResults,
        currentPage,
        setUserInput,
        searchMovie,
        nextPage}} >

        {children}

    </MovieContext.Provider>
  )
}

export default MovieContextProvider