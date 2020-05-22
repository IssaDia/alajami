import React, { useEffect, useState} from 'react'
import axios from 'axios'
import bgTheme from '../images/bg-theme-islam.jpg'


export default function Home() {

    const [articles, setarticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/categories/')
  .then(function (response) {
    // handle success
    setarticles(response.data);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 
  }, [])

  console.log(articles);
    return (
        <>
        
<section className="cards-wrapper">
  <div className="card-grid-space">
    <a className="card" style={{ backgroundImage:`url(${bgTheme})` }} href="https://codetheweb.blog/2017/10/06/html-syntax/">
      <div>
        <h1>HTML Syntax</h1>
      </div>
    </a>
  </div>
</section>
        </>
    )
}
