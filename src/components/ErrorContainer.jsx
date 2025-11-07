import React from 'react'
import "../styles/error.css"
import { useState } from 'react'
import { useEffect } from 'react'


const ErrorContainer = (props) => {

    const errorMessage = props.message

    const [hide, setHide] = useState(false)


    useEffect(()=>{

        if (!errorMessage){
            setHide(false)
            return
        }

        setHide(true)

        const timer = setTimeout(()=>{
            setHide(false)
        },5000)


          return () => clearTimeout(timer)
    },[ errorMessage]
    )

  return (
    <div className=''>


        { hide && (
            <div className="errorcontainer">
            <p>{errorMessage}</p>
            </div>
        )
            
        }
        

    </div>
  )
}

export default ErrorContainer