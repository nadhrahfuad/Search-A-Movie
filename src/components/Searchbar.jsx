import "../styles/searchbar.css"
import ErrorContainer from './ErrorContainer'
import { useContext } from 'react'
import MovieContext from '../context/MovieContext'



const Searchbar = () => {

     const {userInput, setUserInput, searchMovie, errorMessage} = useContext(MovieContext)




  return (
    <div className='maindiv searchbar'>

        <form  action="submit" onSubmit={(e)=>
           { e.preventDefault()
            searchMovie(userInput)}}>
        <input className='txtlight fontreg lineheight' placeholder='What do you want to watch?' type="text" 
        value={userInput}
        onChange={
            (e) => {
                setUserInput(e.target.value)
            }
            
        }
        />
        <button onClick={()=>searchMovie(userInput)} className='lineheight primarybtn regbutton fontreg'>Search</button>

        </form>

        <ErrorContainer      
        message = {errorMessage} 
        />

    </div>
  )
}

export default Searchbar