import React from 'react'
import { BounceLoader } from 'react-spinners'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({isLoading}) => {
  
  return (
    <>
        <div className='container'>
            <Link to={`/`} >
              <h1 className='title'>
                Podcaster
              </h1>
            </Link>
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