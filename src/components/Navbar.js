import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <>
      <div className='row nav-perso'>
        <div className='col-md-12'>
          <h1>Que dit vraiment le coran</h1>
          <div className='nav-links'>
            <Link to='/' className='btn-nav'>Home</Link>
            <Link to='/themes' className='btn-nav'>Themes</Link>
            <Link to='/search' className='btn-nav'>Search</Link>
            <Link to='/contact' className='btn-nav'>Contact</Link>
          </div>
        </div>
      </div>
    </>)
}
