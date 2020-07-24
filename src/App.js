
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
import ArticleProvider from './context/ArticleContext'
import '../node_modules/font-awesome/css/font-awesome.min.css'



function App() {

  return (
    <Router>
      <div className='container-fluid'>
      <Navbar />
      <ArticleProvider>
      <Route path="/" exact component={Home} />
      <Route path="/admin/create" component={Create} />
      <Route path="/themes/:slug" component={Articles} />
      <Route path="/themes" exact component={Theme} />
      <Route path="/search" component={Search} />
      </ArticleProvider>
     
      <Route path="/test" component={ArticleProvider} />
      <Footer />
      </div>
    </Router>
  );
}

export default App;