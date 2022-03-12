import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className='logo'>
        <img alt='logo' src='src/static/images/logo.svg'/>
      </div>
      <div className='cont'>
        <div className='contForm'>
          <div className='sq1'>
            <p className='text'>Friends</p>
          </div>
          <div className='sq2'>
            <p className='text'>Photo</p>
            <div className='contPhoto'>
              <img className='photo' alt='photo' src='src/static/images/photo.jpg' />
            </div>
          </div>
          <div className='sq3'>
            <p className='text'>Messenger</p>
          </div>
        </div>
      </div>  
    </>
  )
}

