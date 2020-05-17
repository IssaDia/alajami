import React from 'react'
import{ Link } from 'react-router-dom'

export default function Navbar() {

    const [render, setrender] = useState('home');
    return (
    <>    
    <div className="page">
        <div className="header">
            <h1>Que dit vraiment le coran?</h1>
            <p>Penser et vivre son islamité à la lumiére du Coran</p>
            </div>
    <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabindex="0">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
        <ul>
            <li><Link onClick={tabChange} href="#0">Home</Link></li>
            <li><Link href="#0">Thémes</Link></li>
            <li><Link href="#0">Search</Link></li>
            <li><Link href="#0">Contact</Link></li>
        </ul>
        </div>
    </div>

    <main>
        <div className="content">
        <h2>Off-screen navigation using <span>:focus-within</span></h2>
        <p>Adding yet another pure CSS technique to the list of off-screen navigation by "hacking" the :focus-within pseudo-class. Have a look at the code to see how it works.</p>
        <small><strong>NB!</strong> Use a browser that supports :focus-within</small>
        </div>
    </main>
    </div>
    </>



    )
}
