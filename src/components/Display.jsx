import Cards from './Cards'
import ErrorContainer from './ErrorContainer'
import Loading from './Loading'
import "../styles/app.css"
import MovieContext from '../context/MovieContext'
import { useContext } from 'react'


const Display = () => {

  const {loading, finalList, errorMessage} = useContext(MovieContext)
  
 

  return (
    <div className='movielistcontainer'>
      
      {/* {`http://www.omdbapi.com/?t=${props.title}&apikey=${apiKey}`}

    Sibling gave me the title {props.title} */}


        { loading? (

          <Loading/>
        
        ): finalList.length > 0?
        (
          <Cards
         
          />
        ):(
          <ErrorContainer
            message ={errorMessage}
          />
        )

        }

   
    

    </div>
  )
}

export default Display