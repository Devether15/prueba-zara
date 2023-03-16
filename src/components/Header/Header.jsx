import React from 'react'
import { BounceLoader } from 'react-spinners'
import './Header.css'

const Header = ({isLoading}) => {
  
  return (
    <>
        <div className='container'>
            <h1 className='title'>
              Podcaster
            </h1>
            {isLoading ? ( 
              <div className='spinnerContainer'>
                  <BounceLoader color="rgb(34, 133, 190)" size={30}/>
              </div>) : null
            }
        </div>
        <div className="line"></div>
    </>
  )
}

export default Header