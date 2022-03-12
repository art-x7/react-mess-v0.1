import React from 'react'
import './Navbar.css'
import { NavItems } from "./NavItems"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='headerInner'>
            <nav className='nav'>
              <ul>
              {NavItems.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                )
              })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}