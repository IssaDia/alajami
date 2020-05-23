
import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Theme from "./pages/Theme"
import Articles from "./pages/SingleTheme"
import Search from "./components/Search"
import Create from './components/Create'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <div className='container-fluid'>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/admin/create" component={Create} />
      <Route path="/themes/:slug" component={Articles} />
      <Route path="/themes" exact component={Theme} />
      <Route path="/search" component={Search} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;