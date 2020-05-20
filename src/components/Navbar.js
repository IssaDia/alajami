import React, {useState} from 'react'
import{ Link } from 'react-router-dom'
import Home from './Home';
import ThemesList from './ThemesList';
import Contact from './Contact';
import Search from './Search';
import Create from './Create';


export default function Navbar() {

    const [comp, setcomp] = useState({render : 'home'});

    const tabChange = (compName) => {
        setcomp({render: compName})
    }

    const renderComp = () => {
        switch(comp.render) {
            case 'home' : return <Home/>;
            case 'themes': return <ThemesList/>;
            case 'search' : return <Search />;
            case 'contact' : return <Contact/>;
            case 'create' : return <Create/>;

            default:
        }
    }
    return (
    <>    
    <div className="page">
        <div className="header">
            <h1>Que dit vraiment le coran?</h1>
            <p>Penser et vivre son islamité à la lumiére du Coran</p>
            </div>
    <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabIndex="0">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
        <ul>
            <li><Link onClick={()=>tabChange('home')} to="/">Home</Link></li>
            <li><Link onClick={()=>tabChange('themes')} to="/themes">Thémes</Link></li>
            <li><Link onClick={()=>tabChange('search')} to="/search">Search</Link></li>
            <li><Link onClick={()=>tabChange('contact')} to="/contact">Contact</Link></li>
            <li><Link onClick={()=>tabChange('create')} to="/">Create</Link></li>

        </ul>
        </div>
    </div>

    <main>
     
         {/*
      <h2>Off-screen navigation using <span>:focus-within</span></h2>
        <p>Adding yet another pure CSS technique to the list of off-screen navigation by "hacking" the :focus-within pseudo-class. Have a look at the code to see how it works.</p>
        <small><strong>NB!</strong> Use a browser that supports :focus-within</small>
       */}
        {renderComp()}
       
    </main>
    </div>
    </>



    )
}
