import React from 'react'
import './Messenger.css'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'


export default function Messenger() {
  return (
    <>
      <IconContext.Provider value={{ color: '#1a5289' }}> 
        <div className='contMess'>
          <div className='chatMenu'>
            <div className='chatBar'>
              <div className='menuBars'>
                <AiIcons.AiOutlineMenu />
              </div>
              <div className='menuSearch'>
                <AiIcons.AiOutlineSearch />
                <input type='text' placeholder='Search' class='inputSearch' autocomlete='off'/>
              </div>
            </div>
            <div className='chatPlace'>
              <div className='chatName'>
                <div className='chatIcon'>
                  <img className='icon' alt='icon' src='src/static/images/eagle.jpg'/>
                </div>
                <div chatName='chatMain'>
                  <div className='chatHead'>
                    chatName 
                  </div>  
                  <div className='chatMessage'>
                    <p>Hello, my name is...</p><span className='qtyMessages'>2</span>
                  </div>
                </div>
              </div>
              <div className='chatName'>
                <div className='chatIcon'>
                  <img className='icon' alt='icon' src='src/static/images/eagle.jpg'/>
                </div>
                <div chatName='chatMain'>
                  <div className='chatHead'>
                    chatName 
                  </div>  
                  <div className='chatMessage'>
                    <p>Hello, my name is...</p><span className='qtyMessages'>2</span>
                  </div>
                </div>
              </div>
              <div className='chatName'>
                <div className='chatIcon'>
                  <img className='icon' alt='icon' src='src/static/images/eagle.jpg'/>
                </div>
                <div chatName='chatMain'>
                  <div className='chatHead'>
                    chatName 
                  </div>  
                  <div className='chatMessage'>
                    <p>Hello, my name is...</p><span className='qtyMessages'>2</span>
                  </div>
                </div>
              </div>
              <div className='chatName'>
                <div className='chatIcon'>
                  <img className='icon' alt='icon' src='src/static/images/eagle.jpg'/>
                </div>
                <div chatName='chatMain'>
                  <div className='chatHead'>
                    chatName 
                  </div>  
                  <div className='chatMessage'>
                    <p>Hello, my name is...</p><span className='qtyMessages'>2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='chatMess'>
            <div className='chatHeader'>
              <div className='chatHeaderInfo'>
                <div className='chatHeaderIcon'>
                  <img className='iconHeader' alt='icon' src='src/static/images/eagle.jpg'/>
                </div>
                <div className='chatMain'>
                  <div className='chatHead'>
                    chatName 
                  </div>
                  <div className='chatMessage'>
                    <p>last seen today at 06:54</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='chatBody'>
              body
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}