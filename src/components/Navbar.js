import React from 'react'
import{ Link } from 'react-router-dom'


export default function Navbar() {


    return (
    <>    
    
        <div className="header">
            <h1>Que dit vraiment le coran?</h1>
            <p>Penser et vivre son islamité à la lumiére du Coran</p>
            </div>
    <div id="nav-container">
        <div className="button" tabIndex="0">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
        <ul>
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/themes">Thémes</Link></li>
            <li><Link  to="/search">Search</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link  to="/admin/create">Create</Link></li>

        </ul>
        </div>
    </div>

    
    </>



    )
}
