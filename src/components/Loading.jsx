import React from 'react'
import LoadingGif from "../assets/loading.gif"
import "../styles/loading.css"

const Loading = () => {
  return (
    <div className='loadingcontainer'>

        <img src={LoadingGif} alt="" />

        <p className='loadingtxt'>Please wait while we check...</p>


    </div>
  )
}

export default Loading